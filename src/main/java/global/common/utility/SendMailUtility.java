package global.common.utility;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import global.common.ILogSender;
import global.common.LogLevel;

public class SendMailUtility {

	private ILogSender logSender = null;

	// Using Google Sender
	private static String username = "hscglobal.notify@gmail.com";
	private static String password = "ukgrmnxxiooofspd";

	public SendMailUtility(ILogSender logSender) {
		this.logSender = logSender;
	}

	/**
	 * Utility method to send email Using Google
	 * 
	 * @param toEmail
	 * @param mailSubject
	 * @param mailContent
	 */
	public void sendViaGoogle(String mailTo, String mailSubject, String mailContent) {

		String host = "smtp.gmail.com";
		int port = 587;

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.port", port);
		props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
		props.put("mail.smtp.ssl.protocols", "TLSv1.2");

		Session session = Session.getInstance(props, new Authenticator() {
			protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
				return new javax.mail.PasswordAuthentication(username, password);
			}
		});

		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(username));

			String[] mailToList = mailTo.split(",");
			Address[] addressList = new Address[mailToList.length];
			for (int i = 0; i < mailToList.length; i++) {
				addressList[i] = new InternetAddress(mailToList[i].trim());
			}
			message.addRecipients(Message.RecipientType.TO, addressList);
			message.setSubject(mailSubject);
			message.setContent(mailContent, "text/html; charset=UTF-8");

			// Log
			this.logSender.logSend(LogLevel.DEBUG, "メールを送信先：" + mailTo);
			this.logSender.logSend(LogLevel.DEBUG, "メール内容：" + mailContent);

			Transport.send(message);

			logSender.logSend(LogLevel.FATAL, "メールが正常に送信されました");
		} catch (MessagingException e) {
			logSender.logSend(LogLevel.FATAL, e);
		}
	}
}
