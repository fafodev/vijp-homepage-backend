package global.hsc.functions;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import global.common.dto.response.AbstractResponse;
import global.common.process.AbstractProcess;
import global.common.webservice.AbstractWebService;

@Path("vijp")
public class FunctionsWebService extends AbstractWebService {

	@POST
	@Path("/getFunctions")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public FunctionsResponse search(FunctionsRequest item) {
		AbstractResponse abs = super.executeProcess(item);
		return (FunctionsResponse) abs;
	}

	@Override
	protected AbstractProcess getProcess() {
		return new FunctionsProcess(this);
	}

}
