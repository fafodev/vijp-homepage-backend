package global.common.database;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import global.common.ILogSender;
import global.common.LogLevel;
import global.common.exception.DBException;
import global.common.exception.FatalException;

/**
 * DB接続
 */
public final class DBAccessor {

	// コネクション
	protected Connection conn;
	private String MySQLKey;

	/**
	 * コネクション取得
	 * @return
	 */
	public Connection getConnection() {
		return conn;
	}

	public void readOnly() throws DBException{
		try {
			conn.setReadOnly(true);
		} catch (SQLException e) {
			throw new DBException(e);
		}
	}

	/**
	 * コンストラクタ
	 * @throws ConnectOverException
	 * @throws DBException
	 * @throws FatalException
	 */
	public DBAccessor() throws DBException, FatalException {
		conn = null;
		connect();
	}

	@Override
	protected void finalize() {
		try {
			disconnect();
		} catch (Exception e) {
		}
	}

	/**
	 * 接続します。
	 * @throws DBException
	 * @throws FatalException
	 * @throws ConnectOverException
	 */
	public void connect() throws DBException, FatalException{
		InputStream io = null;
		try {
			if(conn == null){
				Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

				// db.propsertiesを取得
				Properties properties = new Properties();
				io = getClass().getResourceAsStream("/db.properties");
				properties.load(io);

				// 接続情報を取得
				String url = properties.getProperty("url");
				String user = properties.getProperty("user");
				String pass = properties.getProperty("pass");

				conn = DriverManager.getConnection(url, user, pass);
			}

			// オートコミットにしない
			conn.setAutoCommit(false);

		} catch (SQLException e) {
			logSend(LogLevel.INFOMATION, e);
			throw new DBException(e);
		} catch (Exception e) {
			throw new FatalException(e);
		}
	}

	/**
	 * 切断します。
	 *
	 * @throws DBException
	 */
	public void disconnect() throws DBException {

		try {
			if (conn != null) {
				if (conn.isClosed() == true) {
					return;
				}

				conn.close();
				conn = null;
			}
			return;
		} catch (Exception e) {
			throw new DBException(e);
		}

	}

	/**
	 * コミットします。
	 * @throws DBException
	 */
	public void commit() throws DBException {

		try {
			if (conn != null) {
				conn.commit();
			}
			return;
		} catch (Exception e) {
			throw new DBException(e);
		}

	}

	/**
	 * ロールバックします。
	 * @throws DBException
	 */
	public void rollback() throws DBException {

		try {
			if (conn != null) {
				conn.rollback();
			}
			return;
		} catch (Exception e) {
			throw new DBException(e);
		}

	}

	/**
	 * 暗号化キーを返す。
	 * @return 暗号化キー
	 */
	public String getKey(){
		return MySQLKey;
	}

	/**
	 * ＤＢステートメントを準備します。
	 *
	 * @param sql
	 *            SQL
	 * @return Dステートメント
	 * @throws DBException
	 */
	public DBStatement prepareStatement(String sql) throws DBException {
		return new DBStatement(this, sql);
	}

	/**
	 * ＤＢステートメントを準備します。
	 *
	 * @param sql	SQL
	 * @return DBステートメント
	 * @throws DBException
	 */
	public DBStatement prepareStatement(StringBuilder sql) throws DBException {
		return new DBStatement(this, sql.toString());
	}

	/**
	 * Callステートメントを準備します。
	 *
	 * @param sql	SQL
	 * @return Callステートメント
	 * @throws DBException
	 */
	public DBCallableStatement prepareCall(String sql) throws DBException {
		return new DBCallableStatement(this, sql);
	}

	/**
	 * Callステートメントを準備します。
	 *
	 * @param sql	SQL
	 * @return Callステートメント
	 * @throws DBException
	 */
	public DBCallableStatement prepareCall(StringBuilder sql)
			throws DBException {
		return new DBCallableStatement(this, sql.toString());
	}

	/**
	 * ログ出力クラス
	 */
	protected ILogSender logSender = null;

	/**
	 * ログ出力クラスを取得します。
	 * @return ログ出力クラス
	 */
	public ILogSender getLogSender() {
		return logSender;
	}

	/**
	 * ログ出力クラスを設定します。
	 * @param logSender	ログ
	 */
	public void setLogSender(ILogSender logSender) {
		this.logSender = logSender;
	}

	/**
	 * ログを出力します。
	 * @param level	レベル
	 * @param e		例外オブジェクト
	 */
	public void logSend(String level, Throwable e) {
		if (logSender != null) {
			logSender.logSend(level, e);
		}
	}

	/**
	 * ログを出力します。
	 * @param level			レベル
	 * @param message		メッセージ
	 */
	public void logSend(String level, String message) {
		if (logSender != null) {
			logSender.logSend(level, message);
		}
	}
}