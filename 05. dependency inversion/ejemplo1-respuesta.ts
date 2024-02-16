// Abstraction (high-level module)
interface NotificationService {
  sendNotification(message: string): void;
}

// Low-level modules implementing the abstraction
class EmailService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// High-level module depending on abstractions
class NotificationManager {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.sendNotification(message);
  }
}

// Usage
const emailService = new EmailService();
const smsService = new SMSService();

const emailNotificationManager = new NotificationManager(emailService);
emailNotificationManager.sendNotification("Important email notification");

const smsNotificationManager = new NotificationManager(smsService);
smsNotificationManager.sendNotification("Urgent SMS notification");
