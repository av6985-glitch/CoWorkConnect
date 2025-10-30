// Represents a booking made by a user for a workspace

class Booking {
    constructor(bookingId, userId, workspaceId, date, startTime, endTime, status) {
        this.bookingId = bookingId;
        this.userId = userId;
        this.workspaceId = workspaceId;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }

    confirmBooking() {}
    cancelBooking() {}
    getBookingDetails() {}
}

module.exports = Booking;
