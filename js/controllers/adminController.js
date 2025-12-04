import Workspace from "../models/workspace.js"

export default class AdminController {

    addWorkspace(name, price) {
        const workspaces = JSON.parse(localStorage.getItem("workspaces") || "[]")

        const w = new Workspace(Date.now(), name, price)
        workspaces.push(w)

        localStorage.setItem("workspaces", JSON.stringify(workspaces))
        alert("Workspace added")
    }

    getAllWorkspaces() {
        return JSON.parse(localStorage.getItem("workspaces") || "[]")
    }

    getAllBookings() {
        return JSON.parse(localStorage.getItem("bookings") || "[]")
    }
}
