package global.hsc.sendinforequest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import global.common.dto.response.AbstractResponse;
import global.common.process.AbstractProcess;
import global.common.webservice.AbstractWebService;

@Path("vijp")
public class SendInfoWebService extends AbstractWebService {

	@POST
	@Path("/sendInfoRequest")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public SendInfoResponse search(SendInfoRequest item) {
		AbstractResponse abs = super.executeProcess(item);
		return (SendInfoResponse) abs;
	}

	@Override
	protected AbstractProcess getProcess() {
		return new SendInfoProcess(this);
	}

}
