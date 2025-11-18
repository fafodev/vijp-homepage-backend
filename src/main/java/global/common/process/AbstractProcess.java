package global.common.process;

import java.sql.SQLException;
import java.util.List;

import global.common.ConstantValue;
import global.common.ILogSender;
import global.common.LogLevel;
import global.common.database.DBAccessor;
import global.common.dto.ErrorDto;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.exception.FatalException;
import global.common.exception.LoopException;
import global.common.exception.ProcessCheckErrorException;
import global.common.utility.CommonUtility;
import global.common.utility.MessageUtility;

public abstract class AbstractProcess implements ILogSender {

	/**
	 * コンストラクタ
	 *
	 * @param logSender ログ出力用クラス
	 */
	public AbstractProcess(ILogSender logSender) {
		this.logSender = logSender;
	}

	/**
	 * ログ出力用
	 */
	protected ILogSender logSender = null;

	/**
	 * ログ出力レベル
	 */
	protected String OUTPUT_LEVEL = ConstantValue.LOG_OUTPUT_LEVEL;

	/**
	 * ログ出力レベルを取得します。
	 *
	 * @return ログ出力レベル
	 */
	public String getOutputLevel() {
		return OUTPUT_LEVEL;
	}

	/**
	 * ログ出力レベルを設定します。
	 *
	 * @param outputLevel ログ出力レベル
	 */
	public void setOutputLevel(String outputLevel) {
		OUTPUT_LEVEL = outputLevel;
	}

	/**
	 * ログ出力用クラスを取得します。
	 *
	 * @return
	 */
	public ILogSender getLogSender() {
		return logSender;
	}

	public AbstractResponse execute(AbstractRequest request) throws FatalException, DBException, ProcessCheckErrorException {

		return execute(null, request, null);
	}

	public AbstractResponse execute(DBAccessor dba, AbstractRequest request, AbstractResponse parentResponse) throws FatalException, DBException, ProcessCheckErrorException {
		int deadCnt = 0;
		int maxDeadCnt = 5;
		boolean isDeadLock;
		// レスポンスを取得
		AbstractResponse response = createNewResponse(request);

		do {
			logSend(LogLevel.INFOMATION, "Process開始：(" + request.accessInfo.CSTMCD + "/" + request.accessInfo.USRCD + ")" + getClass().getSimpleName());
			isDeadLock = false;
			try {
				// プロセスID取得
				request.accessInfo.PRCSID = getProcessId();
				Boolean isParent = false;

				// コネクションがなければ親フラグをON
				// 親レスポンスに自分のレスポンスを設定
				if (dba == null || deadCnt > 0) {
					isParent = true;
					parentResponse = response;
				}

				try {
					// DBコネクション作成
//					if (false) {
//						dba = new DBAccessor();
//						dba.setLogSender(this.logSender);
//					}

					beforeProcess(dba, request, response, parentResponse);
					process(dba, request, response, parentResponse);
					afterProcess(dba, request, response, parentResponse);

					// コミット
//					if (false) {
//						dba.commit();
//						logSend(LogLevel.DEBUG, MessageUtility.getLogMessageMsg("LI000006"));
//					}

				} catch (ProcessCheckErrorException e) {

					if (!isParent) {
						// エラーを親プロセスに投げる
						throw e;
					} else {
						List<ErrorDto> lstNormalError = getNormalError((ProcessCheckErrorException) e);
						List<ErrorDto> lstFatalError = getFatalError((ProcessCheckErrorException) e);

						// エラーの内容をレスポンスにセット
						response.addFatalErrorList(lstFatalError);
						response.addNormalErrorList(lstNormalError);

						// 致命的なエラーがあればロールバックする
						if (lstFatalError.size() != 0) {
							try {
								for (int i = 0, max = lstFatalError.size(); i < max; i++) {
									logSend(LogLevel.DEBUG, lstFatalError.get(i).errMsg);
								}
								logSend(LogLevel.DEBUG, MessageUtility.getLogMessageMsg("LE000005"));
								if (dba != null) {
									dba.rollback();
								}
							} catch (DBException de) {
								// ロールバックできなくてもムシする
								logSend(LogLevel.ERROR, CommonUtility.getStackTraceString(de));
							}
						} else {
							if (dba != null) {
								dba.commit();
							}
							logSend(LogLevel.DEBUG, MessageUtility.getLogMessageMsg("LI000006"));
						}
					}

				} catch (LoopException e) {
					if (!isParent) {
						// エラーを親プロセスに投げる
						throw e;
					}
					deadCnt++;
					isDeadLock = true;

					// ロールバック
					try {
						logSend(LogLevel.ERROR, MessageUtility.getLogMessageMsg("LE000008").replace("%1", Integer.toString(deadCnt)));
						if (dba != null) {
							dba.rollback();
						}
					} catch (DBException de) {
						// ロールバックできなくてもムシする
						logSend(LogLevel.ERROR, MessageUtility.getLogMessageMsg("LE000006"));
						logSend(LogLevel.ERROR, CommonUtility.getStackTraceString(de));
					}

					if (deadCnt >= maxDeadCnt) {
						ErrorDto error = new ErrorDto();
						error.errId = "MC000001";
						response.addFatalError(error);
					} else {
						try {
							Thread.sleep(10000);
						} catch (InterruptedException ie) {
							logSend(LogLevel.FATAL, ie);
							ErrorDto error = new ErrorDto();
							error.errId = "MC000001";
							response.addFatalError(error);
							break;
						}
						continue;
					}
				} catch (Exception e) {
					logSend(LogLevel.FATAL, e);

					if (!isParent) {
						// エラーを親プロセスに投げる
						throw new FatalException(e);
					} else {
						ErrorDto error = new ErrorDto();
						error.errId = "MC000001";
						response.addFatalError(error);
					}

					// ロールバック
					try {
						logSend(LogLevel.DEBUG, MessageUtility.getLogMessageMsg("LE000005"));
						if (dba != null) {
							dba.rollback();
						}
					} catch (DBException de) {
						// ロールバックできなくてもムシする
						logSend(LogLevel.ERROR, MessageUtility.getLogMessageMsg("LE000006"));
						logSend(LogLevel.ERROR, CommonUtility.getStackTraceString(de));
					}

				} finally {

					if (isParent) {
						// データベースへの接続 終了
						try {
							if (dba != null) {
								dba.disconnect();
							}
						} catch (DBException de) {
							// BCC:データベースへの接続終了例外
						}
					}
				}
			} finally {
				List<ErrorDto> lstFatalError = response.getFatalError();

				if (lstFatalError.size() > 0) {
//					DBAccessor dbaForFinalAfter = null;
//					try {
//						dbaForFinalAfter = new DBAccessor();
//
//						dbaForFinalAfter.setLogSender(this.logSender);
//						finalAfterProcess(dbaForFinalAfter, request, response);
//						dbaForFinalAfter.commit();
//					} catch (Exception e) {
//						logSend(LogLevel.FATAL, e);
//
//						ErrorDto error = new ErrorDto();
//						error.errId = "MC000001";
//						response.addFatalError(error);
//						// ロールバック
//						try {
//							logSend(LogLevel.DEBUG, MessageUtility.getLogMessageMsg("LE000005"));
//							if (dbaForFinalAfter != null) {
//								dbaForFinalAfter.rollback();
//							}
//						} catch (DBException de) {
//							// ロールバックできなくてもムシする
//							logSend(LogLevel.ERROR, MessageUtility.getLogMessageMsg("LE000006"));
//							logSend(LogLevel.ERROR, CommonUtility.getStackTraceString(de));
//						}
//
//					} finally {
//						// データベースへの接続 終了
//						try {
//							if (dbaForFinalAfter != null) {
//								dbaForFinalAfter.disconnect();
//							}
//						} catch (DBException de) {
//							// BCC:データベースへの接続終了例外
//						}
//					}
				}

				if (!isDeadLock) {
					logSend(LogLevel.INFOMATION, "Process終了：(" + request.accessInfo.CSTMCD + "/" + request.accessInfo.USRCD + ")" + getClass().getSimpleName());
				}
			}
		} while (isDeadLock && deadCnt < maxDeadCnt);
		return response;
	}

	/**
	 * プロセス実行前処理
	 *
	 * @param dba            DBアクセッサ
	 * @param request        リクエスト
	 * @param response       レスポンス
	 * @param parentResponse 親レスポンス
	 */
	protected void beforeProcess(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws FatalException, DBException, ProcessCheckErrorException {
	}

	/**
	 * プロセス実行後処理
	 * 
	 * @param dba
	 * @param request
	 * @param response
	 * @param parentResponse
	 */
	protected void afterProcess(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws FatalException, DBException, ProcessCheckErrorException {
	}

	/**
	 * プロセス実行後処理
	 * 
	 * @param dba
	 * @param request
	 * @param response
	 * @param parentResponse
	 */
	protected void finalAfterProcess(DBAccessor dba, AbstractRequest request, AbstractResponse response) throws FatalException, DBException, ProcessCheckErrorException {

	}

	/**
	 * 通常のエラー配列を取得する
	 *
	 * @param e Exception
	 * @return エラー配列
	 */
	protected List<ErrorDto> getNormalError(ProcessCheckErrorException e) {
		return e.getNormalError();
	}

	/**
	 * 致命的なエラー配列を取得する
	 *
	 * @param e Exception
	 * @return エラー配列
	 */
	protected List<ErrorDto> getFatalError(ProcessCheckErrorException e) {
		return e.getFatalError();
	}

	/**
	 * レスポンスを取得
	 *
	 * @param request リクエスト
	 * @return
	 */
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new AbstractResponse();
	}

	/**
	 * 処理
	 *
	 * @param dba DBアクセッサ
	 * @return レスポンス
	 * @throws DBException
	 * @throws SQLException
	 * @throws FatalException
	 * @throws DBException
	 * @throws ProcessCheckErrorException
	 */
	public AbstractResponse process(DBAccessor dba) throws FatalException, DBException, ProcessCheckErrorException {

		return null;
	}

	/**
	 * 処理
	 *
	 * @param dba            DBアクセッサ
	 * @param request        リクエスト
	 * @param response       レスポンス
	 * @param parentResponse 親レスポンス
	 * @return レスポンス
	 * @throws FatalException
	 * @throws DBException
	 * @throws ProcessCheckErrorException
	 */
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse)
			throws FatalException, DBException, ProcessCheckErrorException {

		return null;
	}

	/**
	 * ログを出力します。
	 *
	 * @param level レベル
	 * @param e     エラーオブジェクト
	 */
	public void logSend(String level, Throwable e) {
		if (logSender != null) {
			logSender.logSend(level, e);
		}

	}

	/**
	 * ログを出力します。
	 *
	 * @param level   レベル
	 * @param message メッセージ
	 */
	public void logSend(String level, String message) {
		if (logSender != null) {
			logSender.logSend(level, message);
		}
	}

	/**
	 * プロセスIDを取得します。
	 *
	 * @return
	 */
	protected String getProcessId() {
		return getClass().getSimpleName();
	}
}
