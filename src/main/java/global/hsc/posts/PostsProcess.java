package global.hsc.posts;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import global.common.ILogSender;
import global.common.database.DBAccessor;
import global.common.database.DBStatement;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.process.AbstractProcess;

public class PostsProcess extends AbstractProcess {

	public PostsProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException {
		PostsRequest reqPosts = (PostsRequest) request;
		PostsResponse resPosts = (PostsResponse) response;

		resPosts.listPostCnt = getCnt(dba, reqPosts);
		if (resPosts.listPostCnt > 0) {
			resPosts.listPosts = getRecords(dba, reqPosts);
		}
		
		return resPosts;
	}

	private int getCnt(DBAccessor dba, PostsRequest reqPosts) throws DBException {
		int result = 0;

		ResultSet rs = null;
		DBStatement ps = null;

		try {
			StringBuilder strSql = new StringBuilder("SELECT COUNT(*) AS CNT FROM POSTS");
			ps = dba.prepareStatement(strSql);
			rs = ps.executeQuery();

			if (rs.next()) {
				result = rs.getInt("CNT");
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

		return result;
	}
	
	private ArrayList<PostsDto> getRecords(DBAccessor dba, PostsRequest reqPosts) throws DBException {
		ResultSet rs = null;
		DBStatement ps = null;
		ArrayList<PostsDto> listPosts = new ArrayList<PostsDto>();
		
		Integer startNum = (reqPosts.pageIndex) * reqPosts.pageSize;
		String limit = " LIMIT " + reqPosts.pageSize + " OFFSET " + startNum + " ";
		
		try {
			StringBuilder strSql = new StringBuilder();
			strSql.append(" SELECT ID ");
			strSql.append(" 	,TITLE ");
			strSql.append(" 	,CONTENT ");
			strSql.append(" 	,IMAGE_URL ");
			strSql.append(" 	,DATE_FORMAT(CREATED_AT, '%Y/%m/%d') AS CREATED_AT ");
			strSql.append(" FROM POSTS ");
			strSql.append(" ORDER BY CREATED_AT DESC ");
			strSql.append( limit );
			ps = dba.prepareStatement(strSql);
			rs = ps.executeQuery();

			if (rs.isBeforeFirst()) {
				while (rs.next()) {
					PostsDto func = new PostsDto();
					func.INDEX = startNum + 1;
					func.ID = rs.getString("ID");
					func.TITLE = rs.getString("TITLE");
					func.CONTENT = rs.getString("CONTENT");
					func.IMAGE_URL = rs.getString("IMAGE_URL");
					func.CREATED_AT = rs.getString("CREATED_AT");
					listPosts.add(func);
					startNum++;
				}
			} else {
				listPosts = null;
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
		
		return listPosts;
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new PostsResponse();
	}

}
