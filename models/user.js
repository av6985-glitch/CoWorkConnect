// Represents a system user (customer)

class User {
    constructor(userId, name, email, password) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    register() {}
    login() {}
    viewBookings() {}
    makeBooking() {}
}

module.exports = User;
