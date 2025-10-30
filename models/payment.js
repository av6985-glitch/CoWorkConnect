// Handles payment-related data and transaction status

class Payment {
    constructor(paymentId, bookingId, amount, paymentStatus) {
        this.paymentId = paymentId;
        this.bookingId = bookingId;
        this.amount = amount;
        this.paymentStatus = paymentStatus;
    }

    processPayment() {}
    generateReceipt() {}
}

module.exports = Payment;
