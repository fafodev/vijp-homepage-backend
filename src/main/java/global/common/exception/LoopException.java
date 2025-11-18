package global.common.exception;

/**
 * データベースアクセス例外クラス
 */
public class LoopException extends DBException {

	private static final long serialVersionUID = -5345572391091687630L;
	protected boolean bNothingCrtNo = false;
	protected boolean bNotFound = false;

	// SQLExceptionのエラーコード
	protected int iSqlErrorCode = -1;

	/**
	 * コンストラクタ
	 */
	public LoopException() {
		super();
	}

	/**
	 * コンストラクタ
	 *
	 * @param e 例外
	 */
	public LoopException(Exception e) {
		super(e);
	}

	/**
	 * コンストラクタ
	 *
	 * @param message 例外メッセージ
	 */
	public LoopException(String message) {
		super(message);
	}

	/**
	 * コンストラクタ
	 *
	 * @param message 例外メッセージ
	 * @param message2 例外判定
	 */
	public LoopException(String message, boolean message2) {
		super(message);

		bNothingCrtNo = message2;
	}

	/**
	 * エラーメッセージを取得します。
	 *
	 * @return
	 */
	public boolean getErrorMessage() {
		return bNothingCrtNo;
	}

	/**
	 * NotFoundを設定します。
	 *
	 * @param bValue フラグ
	 */
	public void setNotFound(boolean bValue) {
		bNotFound = bValue;
	}

	/**
	 * NotFoundを取得します。
	 *
	 * @return
	 */
	public boolean getNotFound() {
		return bNotFound;
	}


	/**
	 * SQLException発生時の、エラーコードを取得します。
	 *
	 * @return
	 */
	public int getSQLErrorCode() {
		return iSqlErrorCode;
	}

	/**
	 * SQLException発生時の、エラーコードを設定します。
	 *
	 * @param iValue エラーコード
	 */
	public void setSQLErrorCode(int iValue) {
		iSqlErrorCode = iValue;
	}
}
