package global.common.utility;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import global.common.database.DBAccessor;
import global.common.database.DBStatement;
import global.common.exception.DBException;
import global.common.exception.ProcessCheckErrorException;

public class ValidateUtility {

	// 半角英数字
	private static final String regAlphaNume = "[a-zA-Z0-9]+";

	// 半角英小文字
	private static final String regLowerAlphaChk = "[a-z]+";

	// 半角英大文字
	private static final String regUpperAlphaChk = "[A-Z]+";

	// 半角数字
	public static final String regNumChk = "[0-9]+";

	// 半角記号 'は除く
	private static final String regSymbolChk = "[ -&(-/:-@\\[-\\`\\{-\\~]+";

	// パスワード用にチェックする半角英数字と記号 半角スペースと’は除く
	private static final String regPwdChk = "[a-zA-Z0-9!-&(-/:-@\\[-\\`\\{-\\~]+";

	/**
	 * コンストラクタ
	 */
	private ValidateUtility() {
	}

	/**
	 * CheckNull
	 *
	 * @param str
	 * @return
	 */
	synchronized public static Boolean CheckNull(String str) {
		return ("".equals(str)) || (str == null);
	}

	/**
	 * 半角数字 or 半角アルファベットをチェック
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean IsAlphaNumber(String str) {
		return !str.matches(regAlphaNume);
	}

	/**
	 * 半角英小文字が含まれているかをチェック
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean partialMatchLowerAlpha(String str) {
		return !str.matches(".*" + regLowerAlphaChk + ".*");
	}

	/**
	 * 半角英大文字が含まれているかをチェック
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean partialMatchUpperAlpha(String str) {
		return !str.matches(".*" + regUpperAlphaChk + ".*");
	}

	/**
	 * 半角数字が含まれているかをチェック
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean partialMatchNum(String str) {
		return !str.matches(".*" + regNumChk + ".*");
	}

	/**
	 * 半角記号が含まれているかをチェック 'は除く
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean partialMatchSymbol(String str) {
		return !str.matches(".*" + regSymbolChk + ".*");
	}

	/**
	 * パスワード用に半角数字 or 半角アルファベット or 半角記号をチェック 半角スペースと’が含まれる場合は、true を返却する
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean IsPwdChk(String str) {
		return !str.matches(regPwdChk);
	}

	/**
	 * 一定文字数より小さいかをチェック
	 * 
	 * @param str
	 * @param min
	 * @return
	 */
	synchronized public static Boolean IsMinLength(String str, int min) {
		if (str.length() < min) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 一定文字数より大きいかをチェック
	 * 
	 * @param str
	 * @param max
	 * @return
	 */
	synchronized public static Boolean CheckMaxLength(String str, int max) {
		if (str != null && str.length() > max) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 半角カタカナチェック
	 * 
	 * @param str
	 * @return
	 */
	synchronized public static Boolean CheckHalfKata(String str) {

		for (char c : str.toCharArray()) {
			if (String.valueOf(c).matches("[\uff65-\uff9f]"))
				return true;
		}
		return false;
	}

	/**
	 * 数字型をチェック（整数・小数・マイナス）
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Boolean IsFloat(String num) {
		String regex = "^\\-?[0-9]*\\.?[0-9]+$";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(num);
		return m.find();
	}

	/**
	 * 数字型をチェック（整数・小数・マイナス）
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Boolean IsInteger(String num) {
		return num.matches(regNumChk);
	}

	/**
	 * マイナスの値であるかをチェック
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Boolean IsMinux(String num) {
		String firstChar = num.substring(0, 1);
		if (firstChar.equals("-")) {
			return true;
		}
		return false;
	}

	/**
	 * 小数値であるかをチェック
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Boolean IsDecimals(String num) {
		Integer pos = num.indexOf(".");
		if (pos == -1) {
			return false;
		}
		return true;
	}

	/**
	 * 整数部の桁数を取得
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Integer GetIntPartDigit(String num) {
		String numList[] = num.split("\\.", 0);

		if (numList.length == 0) {
			// 整数
			return num.length();
		} else {
			return numList[0].length();
		}
	}

	/**
	 * 小数部の桁数を取得
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Integer GetDecimalPartDigit(String num) {
		String numList[] = num.split("\\.");

		if (numList.length == 1) {
			// 整数のみ
			return 0;
		} else {
			return numList[1].length();
		}
	}

	/**
	 * 整数部の桁数を取得
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Integer GetIntPartDigit(BigDecimal num) {
		return num.precision();
	}

	/**
	 * 小数部の桁数を取得
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Integer GetDecimalPartDigit(BigDecimal num) {
		return num.scale();
	}

	/**
	 * 日付として正しいかチェック
	 * 
	 * @param num
	 * @return
	 */
	synchronized public static Boolean IsDate(String date) {

		if (date == null || "".equals(date)) {
			return false;
		}

		// デリミタ「/」でチェック
		Boolean retSlash = IsDate(date, "/");
		if (retSlash == true) {
			return true;
		}

		// デリミタ「-」でチェック
		Boolean retHaifun = IsDate(date, "-");
		if (retHaifun == true) {
			return true;
		}

		return false;

		/*
		 * // 数字8桁の時は、スラッシュを入れる if(date.length() == 8){ date = date.substring(0,4) + "/"
		 * + date.substring(4,6) + "/" + date.substring(6,8); }
		 * 
		 * DateFormat format=new SimpleDateFormat("yyyy/MM/dd");
		 * 
		 * try { // 型だけではなくて、日付として不正なもの(2015/05/32など)もエラーにする format.setLenient(false);
		 * format.parse(date);
		 * 
		 * return true; } catch (ParseException e) { return false; }
		 */
	}

	/**
	 * デリミタを指定して型チェック
	 * 
	 * @param date
	 * @param delimiter
	 * @return
	 */
	synchronized private static Boolean IsDate(String date, String delimiter) {

		// 数字8桁の時は、スラッシュを入れる
		if (date.length() == 8 && date.replace(delimiter, "").length() == 8) {
			date = date.substring(0, 4) + delimiter + date.substring(4, 6) + delimiter + date.substring(6, 8);
		}

		// case yyyyMMdda return false
		if (!IsInteger(date.replace(delimiter, ""))) {
			return false;
		}

		DateFormat format = new SimpleDateFormat("yyyy" + delimiter + "MM" + delimiter + "dd");

		try {
			// 型だけではなくて、日付として不正なもの(2015/05/32など)もエラーにする
			format.setLenient(false);
			format.parse(date);

			return true;
		} catch (ParseException e) {
			return false;
		}
	}

	/**
	 * SQLインジェクション対策。エスケープ用
	 * 
	 * @param val
	 * @return
	 */
	synchronized public static String escapeMySQL(String val) {
		if (val == null || val.length() == 0) {
			return val;
		}

		val = val.replace("'", "''");
		val = val.replace("\\", "\\\\");
		return val;
	}

	/**
	 * SQLのLIKE検索時のエスケープ
	 * 
	 * @param val
	 * @return
	 * @throws ProcessCheckErrorException
	 */
	synchronized public static String getLikeString(String val) throws ProcessCheckErrorException {
		if (val == null || val.length() == 0) {
			return val;
		}

		return val.replace("!", "!!").replace("%", "!%").replace("_", "!_").replace("[", "![");
	}

	/**
	 * SQL
	 * 
	 * @param date
	 * @return
	 * @throws DBException
	 */
	synchronized public static Boolean CheckPeriod(DBAccessor dba, String inputDate, String cstmcd, String datacd) throws DBException {

		DBStatement ps = null;
		ResultSet rs = null;
		int numData2 = 0;

		try {
			StringBuilder strSql = new StringBuilder();
			strSql.append("	SELECT IFNULL(TMT040.NUMDATA2, 6) AS NUMDATA2	");
			strSql.append("	FROM TMT040_CNTRL TMT040	");
			strSql.append("	WHERE TMT040.CSTMCD = ?	");
			strSql.append("	AND TMT040.RCDKBN = '0040'	");
			strSql.append("	AND TMT040.DATACD = ?	");
			ps = dba.prepareStatement(strSql);
			ps.setString(1, cstmcd);
			ps.setString(2, datacd);
			rs = ps.executeQuery();
			if (rs.next()) {
				numData2 = rs.getInt("NUMDATA2");
			}

			Calendar cal = Calendar.getInstance();
			cal.add(Calendar.MONTH, -numData2);
			cal.set(Calendar.DATE, 1);
			Date minDate = cal.getTime();

			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
			Date inputDateObj = dateFormat.parse(inputDate);
			if (inputDateObj.before(minDate)) {
				return false;
			}

			return true;
		} catch (SQLException | ParseException e) {
			throw new DBException(e.getMessage());
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					throw new DBException(e.getMessage());
				}
			}
			if (ps != null) {
				ps.close();
			}
		}
	}

	/**
	 * SQLのIN句検索時のエスケープ 文字列をエスケープして「'」を付与し返す A,B,C → 'A','B','C'
	 * 
	 * @param val A,B,C
	 * @return
	 * @throws ProcessCheckErrorException
	 */
	synchronized public static String getInString(String val) throws ProcessCheckErrorException {
		if (val == null || val.length() == 0) {
			return val;
		}

		List<String> tmp = Arrays.asList(val.split(","));

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < tmp.size(); i++) {
			sb.append("'").append(escapeMySQL(tmp.get(i))).append("'");
			if (i != tmp.size() - 1) {
				sb.append(",");
			}
		}
		return sb.toString();
	}
}