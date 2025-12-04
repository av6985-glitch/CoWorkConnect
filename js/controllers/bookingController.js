
// js/controllers/bookingController.js
import Booking from "../models/booking.js"

export default class BookingController {

    bookWorkspace(user, workspace) {
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")

        const booking = new Booking(
            Date.now(),
            user.id,
            workspace.id,
            user.name,
            workspace.name,
            "Confirmed"
        )

        bookings.push(booking)
        localStorage.setItem("bookings", JSON.stringify(bookings))

        alert("Booking created")
    }

    cancelBooking(bookingId) {
        let bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
        bookings = bookings.map(b => {
            if (b.id === bookingId) {
                b.status = "Cancelled"
            }
            return b
        })
        localStorage.setItem("bookings", JSON.stringify(bookings))
        alert("Booking cancelled")
    }

    getBookingsByUser(userId) {
        const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
        return bookings.filter(b => b.userId === userId)
    }

    getAllBookings() {
        return JSON.parse(localStorage.getItem("bookings") || "[]")
    }
}
