package global.hsc.sendinforequest;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.client.RestTemplate;

import com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient;
import com.google.recaptchaenterprise.v1.Assessment;
import com.google.recaptchaenterprise.v1.CreateAssessmentRequest;
import com.google.recaptchaenterprise.v1.Event;
import com.google.recaptchaenterprise.v1.ProjectName;

import global.common.ILogSender;
import global.common.LogLevel;
import global.common.database.DBAccessor;
import global.common.dto.request.AbstractRequest;
import global.common.dto.response.AbstractResponse;
import global.common.exception.DBException;
import global.common.exception.FatalException;
import global.common.process.AbstractProcess;
import global.common.utility.SendMailUtility;

public class SendInfoProcess extends AbstractProcess {

	public SendInfoProcess(ILogSender logSender) {
		super(logSender);
	}

	@Override
	public AbstractResponse process(DBAccessor dba, AbstractRequest request, AbstractResponse response, AbstractResponse parentResponse) throws DBException, FatalException {
		SendInfoRequest reqSendInfo = (SendInfoRequest) request;
		SendInfoResponse resSendInfo = (SendInfoResponse) response;
		
		String projectID = "vijp-notify";
		String recaptchaKey = "6LfS-fMrAAAAAN6-myMEgDq_Wk23DSzlH--P8e8o";
		String token = reqSendInfo.token;
		String recaptchaAction = "sendContact";
		
		try {
			int recaptchaChecked = checkRecaptcha(projectID, recaptchaKey, token, recaptchaAction);
			if (recaptchaChecked != 0) {
				logSender.logSend(LogLevel.FATAL, recaptchaAction);
				resSendInfo.successful = 9;
				return resSendInfo;
			}
		} catch (IOException e) {
			logSender.logSend(LogLevel.FATAL, e);
		}

		String mailTo = "info@vijp.jp";
		//String mailTo = "k_trong@brycen.com.vn";

		// Tiêu đề email
		String mailSubject = "[VIJP Contact Inquiry] – " + reqSendInfo.name;

		String mailContent = 
			    "New Contact Message from VIJP Website\r\n\r\n" +
			    "Dear VIJP Team\r\n\r\n" +
			      "Name / お名前：" + reqSendInfo.name + "\r\n" +
			      "Email：" + reqSendInfo.email + "\r\n" +
			      "Phone Number / 電話番号：" + reqSendInfo.phone + "\r\n" +
			      "Inquiry Type / お問い合わせ種類：" + reqSendInfo.inquiryType + "\r\n" +
			      "Message / メッセージ：" + reqSendInfo.message + "\r\n" +
			    "\r\nBest regards,\r\n\r\nVIJP Website System";

		// Gửi mail (HTML)
		SendMailUtility mailSender = new SendMailUtility(logSender);
		mailSender.sendViaGoogle(mailTo, mailSubject, mailContent);

		resSendInfo.successful = 1;
		return resSendInfo;
	}

	public int checkRecaptcha(String projectID, String recaptchaKey, String token, String recaptchaAction) throws IOException {
		int result = 0;
		
//		InputStream io = getClass().getResourceAsStream("/application_default_credentials.json");
//		
//		Storage storage = StorageOptions.newBuilder()
//			    .setCredentials(GoogleCredentials.fromStream(io))
//			    .build()
//			    .getService();
		
		
		try (RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient.create()) {

			// Set the properties of the event to be tracked.
			Event event = Event.newBuilder().setSiteKey(recaptchaKey).setToken(token).build();

			// Build the assessment request.
			CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest.newBuilder().setParent(ProjectName.of(projectID).toString())
					.setAssessment(Assessment.newBuilder().setEvent(event).build()).build();

			Assessment response = client.createAssessment(createAssessmentRequest);

			// Check if the token is valid.
			if (!response.getTokenProperties().getValid()) {
				result = 1;
			}

			// Check if the expected action was executed.
			if (!response.getTokenProperties().getAction().equals(recaptchaAction)) {
				result = 1;
			}

			// Get the risk score and the reason(s).
			// For more information on interpreting the assessment, see:
			// https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
//			for (ClassificationReason reason : response.getRiskAnalysis().getReasonsList()) {
//				System.out.println(reason);
//			}

//			float recaptchaScore = response.getRiskAnalysis().getScore();
//			System.out.println("The reCAPTCHA score is: " + recaptchaScore);

			// Get the assessment name (id). Use this to annotate the assessment.
//			String assessmentName = response.getName();
//			System.out.println("Assessment name: " + assessmentName.substring(assessmentName.lastIndexOf("/") + 1));
		}
		return result;
	}

	@Override
	protected AbstractResponse createNewResponse(AbstractRequest request) {
		return new SendInfoResponse();
	}

}
