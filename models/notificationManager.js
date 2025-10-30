// Manages notifications for booking confirmations or cancellations

class NotificationManager {
    constructor(notificationId, message, recipientEmail) {
        this.notificationId = notificationId;
        this.message = message;
        this.recipientEmail = recipientEmail;
    }

    sendConfirmation() {}
    sendCancellation() {}
}

module.exports = NotificationManager;
