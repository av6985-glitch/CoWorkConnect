// Represents an administrator with management privileges

const User = require('./user');

class Admin extends User {
    constructor(adminId, name, email, password, role) {
        super(adminId, name, email, password);
        this.role = role;
    }

    addWorkspace() {}
    updateWorkspace() {}
    viewAllBookings() {}
    manageUsers() {}
}

module.exports = Admin;
