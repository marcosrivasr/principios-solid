// Low-level modules
class EmailService {
  sendEmail(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService {
  sendSMS(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// High-level module depending on details
class NotificationManager {
  private emailService: EmailService;
  private smsService: SMSService;

  constructor(emailService: EmailService, smsService: SMSService) {
    this.emailService = emailService;
    this.smsService = smsService;
  }

  sendNotificationByEmail(message: string): void {
    this.emailService.sendEmail(message);
  }

  sendNotificationBySMS(message: string): void {
    this.smsService.sendSMS(message);
  }
}

// Usage
const emailService = new EmailService();
const smsService = new SMSService();

const notificationManager = new NotificationManager(emailService, smsService);
notificationManager.sendNotificationByEmail("Important email notification");
notificationManager.sendNotificationBySMS("Urgent SMS notification");
