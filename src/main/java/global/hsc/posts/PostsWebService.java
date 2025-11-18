package global.hsc.posts;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import global.common.dto.response.AbstractResponse;
import global.common.process.AbstractProcess;
import global.common.webservice.AbstractWebService;

@Path("vijp")
public class PostsWebService extends AbstractWebService {

	@POST
	@Path("/getPosts")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public PostsResponse search(PostsRequest item) {
		AbstractResponse abs = super.executeProcess(item);
		return (PostsResponse) abs;
	}

	@Override
	protected AbstractProcess getProcess() {
		return new PostsProcess(this);
	}

}
