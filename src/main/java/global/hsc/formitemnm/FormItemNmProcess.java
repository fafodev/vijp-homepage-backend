package global.hsc.formitemnm;

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

public class FormItemNmProcess extends AbstractProcess {

	public FormItemNmProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException{
		FormItemNmRequest reqFormItemNm = (FormItemNmRequest) request;
		FormItemNmResponse resFormItemNm = (FormItemNmResponse) response;

		ResultSet rs = null;
		DBStatement ps = null;

		try {
			StringBuilder strSql = new StringBuilder("SELECT * FROM FORMITEMNM WHERE SCREEN_ID = ? AND LANG = ?");
			ps = dba.prepareStatement(strSql);
			ps.setString(1, reqFormItemNm.SCREEN_ID);
			ps.setString(2, reqFormItemNm.accessInfo.language);
			rs = ps.executeQuery();

			if (rs.isBeforeFirst()) {
				resFormItemNm.listFormItemNm = new ArrayList<FormItemNmDto>();
				while (rs.next()) {
					FormItemNmDto func = new FormItemNmDto();
					func.FORM_ITEM_ID = rs.getString("FORM_ITEM_ID");
					func.FORM_ITEM_NM = rs.getString("FORM_ITEM_NM");
					resFormItemNm.listFormItemNm.add(func);
				}
			} else {
				resFormItemNm.listFormItemNm = null;
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

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new FormItemNmResponse();
	}

}
