package global.common.dto.request;

import global.common.dto.AccessInfoDto;

public class AbstractRequest {

	/**
	 * アクセス情報
	 */
	public AccessInfoDto accessInfo = new AccessInfoDto();

	/**
	 * 最初に呼ばれるプロセス
	 */
	public boolean isFirstCall = false;
}
