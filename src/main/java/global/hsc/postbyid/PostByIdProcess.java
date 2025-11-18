package global.hsc.postbyid;

import java.sql.ResultSet;
import java.sql.SQLException;

import global.common.ILogSender;
import global.common.database.DBAccessor;
import global.common.database.DBStatement;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.process.AbstractProcess;

public class PostByIdProcess extends AbstractProcess {

	public PostByIdProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException {
		PostByIdRequest reqPosts = (PostByIdRequest) request;
		PostByIdResponse resPosts = (PostByIdResponse) response;

		resPosts.post = getPostById(dba, reqPosts);
		
		return resPosts;
	}

	private PostByIdDto getPostById(DBAccessor dba, PostByIdRequest reqPost) throws DBException {
		ResultSet rs = null;
		DBStatement ps = null;
		PostByIdDto postResult = new PostByIdDto();
		
		try {
			StringBuilder strSql = new StringBuilder();
			strSql.append(" SELECT ID ");
			strSql.append(" 	,TITLE ");
			strSql.append(" 	,CONTENT ");
			strSql.append(" 	,IMAGE_URL ");
			strSql.append(" 	,DATE_FORMAT(CREATED_AT, '%Y/%m/%d') AS CREATED_AT ");
			strSql.append(" FROM POSTS ");
			strSql.append(" WHERE ID = ? ");
			ps = dba.prepareStatement(strSql);
			ps.setInt(1, reqPost.postId);
			rs = ps.executeQuery();

			if (rs.isBeforeFirst()) {
				while (rs.next()) {
					postResult.INDEX = 1;
					postResult.ID = rs.getString("ID");
					postResult.TITLE = rs.getString("TITLE");
					postResult.CONTENT = rs.getString("CONTENT");
					postResult.IMAGE_URL = rs.getString("IMAGE_URL");
					postResult.CREATED_AT = rs.getString("CREATED_AT");
				}
			} else {
				postResult = null;
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
		
		return postResult;
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new PostByIdResponse();
	}

}
