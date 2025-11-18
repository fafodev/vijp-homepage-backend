/**
 * 
 */
package global.hsc.sendinforequest;

import global.common.dto.request.AbstractRequest;

/**
 * @author k_trong
 *
 */
public class SendInfoRequest extends AbstractRequest {
	public String name;
	public String email;
	public String phone;
	public String inquiryType;
	public String message;
	public String token;
}
