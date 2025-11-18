package global.hsc.fullsearch;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.atilika.kuromoji.ipadic.Token;
import com.atilika.kuromoji.ipadic.Tokenizer;

import global.common.ILogSender;
import global.common.database.DBAccessor;
import global.common.database.DBStatement;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.process.AbstractProcess;

public class FullSearchProcess extends AbstractProcess {

	public FullSearchProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response,
			AbstractResponse parentResponse) throws DBException {
		FullSearchRequest reqFormItemNm = (FullSearchRequest) request;
		FullSearchResponse resFormItemNm = (FullSearchResponse) response;

		ResultSet rs = null;
		DBStatement ps = null;

		try {
			// Phân tách từ khóa bằng Kuromoji
            List<String> keywords = tokenize(reqFormItemNm.keyword);

            // Nối các từ để sử dụng trong MATCH ... AGAINST
            String searchQuery = String.join(" ", keywords);
			
			
            StringBuilder strSql = new StringBuilder();
            strSql.append(" SELECT '1' AS TYPE_SEARCH, ID, TITLE, BODY, LINK, FRAGMENT           					");
            strSql.append(" FROM CONTENTS                                                                   		");
            strSql.append(" WHERE MATCH(TITLE, BODY) AGAINST (? IN NATURAL LANGUAGE MODE)                   		");
            strSql.append("                                                                                 		");
            strSql.append(" UNION ALL                                                                       		");
            strSql.append("                                                                                 		");
            strSql.append(" SELECT '2' AS TYPE_SEARCH, ID, TITLE, CONTENT AS BODY, 'news' AS LINK, '' AS FRAGMENT   ");
            strSql.append(" FROM POSTS                                                                      		");
            strSql.append(" WHERE MATCH(TITLE, CONTENT) AGAINST (? IN NATURAL LANGUAGE MODE)                		");

			ps = dba.prepareStatement(strSql);
			ps.setString(1, searchQuery);
			ps.setString(2, searchQuery);
			rs = ps.executeQuery();

			if (rs.isBeforeFirst()) {
				resFormItemNm.listSearchResult = new ArrayList<FullSearchDto>();
				while (rs.next()) {
					FullSearchDto searchRow = new FullSearchDto();
					searchRow.TYPE_SEARCH = rs.getString("TYPE_SEARCH");
					searchRow.ID = rs.getString("ID");
					searchRow.TITLE = rs.getString("TITLE");
					searchRow.BODY = rs.getString("BODY");
					searchRow.LINK = rs.getString("LINK");
					searchRow.FRAGMENT = rs.getString("FRAGMENT");
					resFormItemNm.listSearchResult.add(searchRow);
				}
			} else {
				resFormItemNm.listSearchResult = null;
			}

		} catch (DBException | SQLException e) {
			throw new DBException(e);
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (ps != null)
					ps.close();
			} catch (DBException | SQLException e) {
				throw new DBException(e);
			}
		}

		return resFormItemNm;
	}

	public static List<String> tokenize(String text) {
		Tokenizer tokenizer = new Tokenizer();
		return tokenizer.tokenize(text).stream()
				.map(Token::getSurface)
				.filter(token -> !token.trim().isEmpty())
				.collect(Collectors.toList());
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new FullSearchResponse();
	}

}
