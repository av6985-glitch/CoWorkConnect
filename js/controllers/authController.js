import User from "../models/user.js"

export default class AuthController {

    register(name, email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        
        if (users.find(u => u.email === email)) {
            alert("User already exists")
            return false
        }

        const newUser = new User(Date.now(), name, email, password, false)
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))

        alert("Registered successfully")
        return true
    }

    login(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const found = users.find(u => u.email === email && u.password === password)

        if (!found) {
            alert("Invalid credentials")
            return null
        }

        localStorage.setItem("session", JSON.stringify(found))

        if (found.isAdmin) {
            window.location.href = "admin_dashboard.html"
        } else {
            window.location.href = "user_dashboard.html"
        }

        return found
    }

    logout() {
        localStorage.removeItem("session")
        window.location.href = "index.html"
    }
}
