package global.common.filter;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * 開発時のみ、CORS制限を解除する。
 */
@Provider
public class CrossOriginResourceSharingFilter implements ContainerResponseFilter {
	protected Logger log = LogManager.getLogger(this.getClass());
	private boolean devMode = true;

	public CrossOriginResourceSharingFilter() throws IOException {
		log.info("CORSフィルタを起動：ローカルモード:" + this.devMode);
	}

	@Override
	public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) {
		log.info("filter： " + this.devMode);
		if (this.devMode) {

			responseContext.getHeaders().add("Access-Control-Allow-Origin", "*");
			responseContext.getHeaders().add("Access-Control-Allow-Credentials", "true");
			responseContext.getHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
			responseContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
			responseContext.getHeaders().add("Access-Control-Max-Age", "86400");
		}
	}

}