package global.common.utility;

import java.io.StringWriter;

public class CommonUtility {

	private CommonUtility() {
	}

	/**
	 * スタックトレースを文字列で取得
	 * 
	 * @param e Exception
	 * @return
	 */
	synchronized public static String getStackTraceString(Exception e) {
		StringWriter sw = new StringWriter();
		return sw.toString();
	}
}