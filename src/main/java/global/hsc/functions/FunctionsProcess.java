package global.hsc.functions;

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

public class FunctionsProcess extends AbstractProcess {

	public FunctionsProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException {
		FunctionsRequest reqFunctions = (FunctionsRequest) request;
		FunctionsResponse resFunctions = (FunctionsResponse) response;

		ResultSet rs = null;
		DBStatement ps = null;

		try {
			StringBuilder strSql = new StringBuilder("SELECT * FROM FUNCTIONS WHERE LANG = ?");
			ps = dba.prepareStatement(strSql);
			ps.setString(1, reqFunctions.accessInfo.language);
			rs = ps.executeQuery();

			if (rs.isBeforeFirst()) {
				resFunctions.listFunctions = new ArrayList<FuncstionDto>();
				while (rs.next()) {
					FuncstionDto func = new FuncstionDto();
					func.type = rs.getString("MENU_TYPE");
					func.label = rs.getString("MENU_LABEL");
					func.icon = rs.getString("MENU_ICON");
					func.route = rs.getString("MENU_ROUTE");
					resFunctions.listFunctions.add(func);
				}
			} else {
				resFunctions.listFunctions = null;
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

		return resFunctions;
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new FunctionsResponse();
	}

}
