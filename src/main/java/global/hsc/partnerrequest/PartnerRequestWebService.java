package global.hsc.partnerrequest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import global.common.dto.response.AbstractResponse;
import global.common.process.AbstractProcess;
import global.common.webservice.AbstractWebService;

@Path("vijp")
public class PartnerRequestWebService extends AbstractWebService {

	@POST
	@Path("/partnerRequest")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public PartnerRequestResponse search(PartnerRequestRequest item) {
		AbstractResponse abs = super.executeProcess(item);
		return (PartnerRequestResponse) abs;
	}

	@Override
	protected AbstractProcess getProcess() {
		return new PartnerRequestProcess(this);
	}

}
