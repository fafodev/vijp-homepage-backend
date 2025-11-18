package global.common.config;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;

import global.common.exception.DBException;
import global.common.exception.FatalException;
import global.common.filter.CrossOriginResourceSharingFilter;

public class ApplicationConfig extends ResourceConfig {
	protected Logger log = LogManager.getLogger(this.getClass());

	public ApplicationConfig() throws IOException, DBException, FatalException {
		log.info("Ignore error : Cross origin");
		// フィルタの登録
		registerFilter();
	}

	/**
	 * フィルタの登録
	 */
	private void registerFilter() {
		// CORS フィルタの登録
		register(CrossOriginResourceSharingFilter.class);
	}
}