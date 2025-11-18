package global.common.utility;

import java.util.ResourceBundle;

import global.common.dto.AccessInfoDto;

public class MessageUtility {

	private static final String logMsgFile = "logmessage";
	private static final String msgFile = "message";
	private static final String CmnMsgFile = "commonmessage";
	private static final String apiErrFile = "apimessage";


	/**
	 * コンストラクタ
	 * newできないようにprivateで宣言
	 */
	private MessageUtility() {
	}

	/**
	 * バンドルを取得
	 * @param fileName				プロパティファイル名
	 * @return
	 */
	synchronized private static ResourceBundle getFileStream(String fileName) {
        try {
            return ResourceBundle.getBundle(fileName);
        } catch (Exception e) {
            return null;
        }
    }


	/**
	 * ログメッセージから文字列を取得
	 * @param key
	 * @return
	 */
	synchronized private static String getLogMessageString (String key){
		String ret = "";
		ResourceBundle  bundle = getFileStream(logMsgFile);
		try {
			if(bundle != null){
				ret = bundle.getString(key);
			}
		} catch (Exception e) {
			// 何もしない
		}

		return ret;
	}


	/**
	 * ログメッセージのレベルを取得
	 * @param key
	 * @return
	 */
	synchronized public String getLogMessageLevel(String key){
		String str = getLogMessageString(key);
		if(("").equals(str)){
			return str;
		}

		String[] msg = str.split(",", 0);
		return msg[0];
	}


	/**
	 * ログメッセージの文言を取得
	 * @param key
	 * @return
	 */
	synchronized public static String getLogMessageMsg(String key){
		String str = getLogMessageString(key);
		if(("").equals(str)){
			return str;
		}

		String[] msg = str.split(",", 0);
		return msg[1];
	}


	 /** メッセージから文字列を取得
	 * @param key
	 * @param cstmcd		荷主コード
	 * @return
	 */
	synchronized private static String getMessageString(String key, String cstmcd, String lang){
		String ret = "";
		ResourceBundle  bundle = getFileStream(cstmcd + msgFile + lang);
		try {
			if(bundle != null){
				ret = bundle.getString(key);
			}
		} catch (Exception e) {
			// 何もしない
		}

		return ret;
	}

	 /** 共通メッセージから文字列を取得
	 * @param key
	 * @param cstmcd		荷主コード
	 * @return
	 */
	synchronized private static String getCommonMessageString(String key,String lang){
		String ret = "";
		ResourceBundle  bundle = getFileStream(CmnMsgFile + lang);
		try {
			if(bundle != null){
				ret = bundle.getString(key);
			}
		} catch (Exception e) {
			// 何もしない
		}

		return ret;
	}

	/**
	 * メッセージのレベルを取得
	 * @param key
	 * @param cstmcd		荷主コード
	 * @return
	 */
	synchronized public static String getMessageLevel(String key, AccessInfoDto accessInfo){
		String str = getMessageString(key, accessInfo.CSTMCD, accessInfo.language);
		if(("").equals(str)){
			return str;
		}

		String[] msg = str.split(",", 0);
		return msg[0];
	}


	/**
	 * メッセージの文言を取得
	 * @param key
	 * @param cstmcd		荷主コード
	 * @return
	 */
	synchronized public static String getMessageMsg(String key, AccessInfoDto accessInfo){
		String str = getMessageString(key, accessInfo.CSTMCD, accessInfo.language);
		if(("").equals(str)){
			str = getCommonMessageString(key, accessInfo.language);
		}
		if(("").equals(str)){
			return str;
		}

		String[] msg = str.split(",", 0);
		return msg[1];
	}


	/**
	 * メッセージのボタン位置を取得
	 * @param key
	 * @param cstmcd		荷主コード
	 * @return
	 */
	synchronized public static String getMessageDefaultBtn(String key, AccessInfoDto accessInfo){
		String str = getMessageString(key, accessInfo.CSTMCD, accessInfo.language);
		if(("").equals(str)){
			return str;
		}

		String[] msg = str.split(",", 0);
		return msg[2];
	}


	/**
	 * システムエラーから文字列を取得
	 * @param key
	 * @return
	 */
	synchronized public static String getAPIErrString(String key){
		String ret = "APIERROR";
		ResourceBundle bundle = getFileStream(apiErrFile);
		try {
			if(bundle != null){
				ret = bundle.getString(key);
			}
		} catch (Exception e) {
			// 何もしない
		}

		return ret;
	}
}