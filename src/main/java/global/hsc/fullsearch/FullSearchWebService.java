package global.hsc.fullsearch;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import global.common.dto.response.AbstractResponse;
import global.common.process.AbstractProcess;
import global.common.webservice.AbstractWebService;

@Path("vijp")
public class FullSearchWebService extends AbstractWebService {

	@POST
	@Path("/fullsearch")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public FullSearchResponse search(FullSearchRequest item) {
		AbstractResponse abs = super.executeProcess(item);
		return (FullSearchResponse) abs;
	}

	@Override
	protected AbstractProcess getProcess() {
		return new FullSearchProcess(this);
	}

}
