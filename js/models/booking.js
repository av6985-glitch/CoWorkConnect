// js/models/booking.js
export default class Booking {
    constructor(id, userId, workspaceId, userName, workspaceName, status = "Confirmed") {
        this.id = id
        this.userId = userId
        this.workspaceId = workspaceId
        this.userName = userName
        this.workspaceName = workspaceName
        this.status = status
    }
}
