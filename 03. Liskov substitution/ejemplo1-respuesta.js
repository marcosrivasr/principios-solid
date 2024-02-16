class PaymentGateway {
  processPayment(amount) {
    // Logic to process payment
    console.log(`Processing payment of $${amount}`);
  }
}

class SecurePaymentGateway extends PaymentGateway {
  processPayment(amount) {
    // Additional security steps
    this.authenticateUser();
    super.processPayment(amount);
  }

  authenticateUser() {
    console.log("User authenticated securely.");
  }
}

function makePayment(paymentGateway, amount) {
  paymentGateway.processPayment(amount);
}

const basicGateway = new PaymentGateway();
const secureGateway = new SecurePaymentGateway();

makePayment(basicGateway, 100); // Output: Processing payment of $100
makePayment(secureGateway, 100); // Output: User authenticated securely. Processing payment of $100
