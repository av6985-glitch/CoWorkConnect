// js/models/user.js
export default class User {
    constructor(id, name, email, password, isAdmin = false) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
    }
}
