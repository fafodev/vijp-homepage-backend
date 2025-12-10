package global.hsc.partnerrequest;

import java.util.Map;

import org.springframework.web.client.RestTemplate;

import global.common.ILogSender;
import global.common.LogLevel;
import global.common.database.DBAccessor;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.exception.FatalException;
import global.common.process.AbstractProcess;
import global.common.utility.SendMailUtility;

public class PartnerRequestProcess extends AbstractProcess {

	public PartnerRequestProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException, FatalException {
		PartnerRequestRequest reqSendInfo = (PartnerRequestRequest) request;
		PartnerRequestResponse resSendInfo = (PartnerRequestResponse) response;
		
		String projectID = "vijp-notify";
		String recaptchaKey = "6LfS-fMrAAAAAFiwuWP3NJj0wpAlg4yUUEQFEGaA";
		String token = reqSendInfo.token;
		String recaptchaAction = "sendContact";

		int recaptchaChecked = checkRecaptcha(projectID, recaptchaKey, token, recaptchaAction);
		if (recaptchaChecked != 0) {
			logSender.logSend(LogLevel.FATAL, recaptchaAction);
			resSendInfo.successful = 9;
			return resSendInfo;
		}

		String mailTo = "info@vijp.jp";
		//String mailTo = "k_trong@brycen.com.vn";

		// Tiêu đề email
		String mailSubject = "[VIJP Partnership Request] – " + reqSendInfo.companyName;

		// Tạo nội dung email HTML
		String mailContent =
		    "<p><strong>New Partnership Request from VIJP Website</strong></p>" +
		    "<p>Dear VIJP Team,</p>" +
		    "<table border='1' cellspacing='0' cellpadding='8' style='border-collapse: collapse;'>" +
		      "<tr><td><strong>Company Name / 会社名</strong></td><td>" + reqSendInfo.companyName + "</td></tr>" +
		      "<tr><td><strong>Contact Person / 担当者</strong></td><td>" + reqSendInfo.contactPerson + "</td></tr>" +
		      "<tr><td><strong>Email / メール</strong></td><td>" + reqSendInfo.email + "</td></tr>" +
		      "<tr><td><strong>Type of Cooperation / 協力種別</strong></td><td>" + reqSendInfo.cooperationType + "</td></tr>" +
		      "<tr><td><strong>Message / 内容</strong></td><td>" + reqSendInfo.message + "</td></tr>" +
		    "</table>" +
		    "<p style='margin-top:16px;'>Best regards,<br>VIJP Website System</p>";

		// Gửi mail (HTML)
		SendMailUtility mailSender = new SendMailUtility(logSender);
		mailSender.sendViaGoogle(mailTo, mailSubject, mailContent);

		resSendInfo.successful = 1;
		return resSendInfo;
	}

	public int checkRecaptcha(String projectID, String recaptchaKey, String token, String recaptchaAction) {
	    int result = 0;

	    // Đây là secret key (không phải site key)
	    String secretKey = recaptchaKey;

	    String verifyUrl = "https://www.google.com/recaptcha/api/siteverify"
	            + "?secret=" + secretKey
	            + "&response=" + token;

	    RestTemplate restTemplate = new RestTemplate();
	    Map<String, Object> response = restTemplate.postForObject(verifyUrl, null, Map.class);

	    if (response == null) {
	        result = 1;
	    } else {
	        Boolean success = (Boolean) response.get("success");
	        if (success == null || !success) {
	            result = 1;
	        }
	    }

	    return result;
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new PartnerRequestResponse();
	}

}
