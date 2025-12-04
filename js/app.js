// js/app.js

import AuthController from "./controllers/authController.js"
import AdminController from "./controllers/adminController.js"
import BookingController from "./controllers/bookingController.js"

// auto-create default admin if missing
(function initializeAdmin() {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (!users.find(u => u.email === "admin@cw.com")) {
        users.push({
            id: Date.now(),
            name: "Admin",
            email: "admin@cw.com",
            password: "admin",
            isAdmin: true
        })
        localStorage.setItem("users", JSON.stringify(users))
        console.log("Default admin: admin@cw.com / admin")
    }
})()

const app = {
    auth: new AuthController(),
    admin: new AdminController(),
    booking: new BookingController()
}

// expose globally for inline handlers
window.app = app

export default app
