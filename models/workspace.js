// Represents a workspace that can be booked

class Workspace {
    constructor(workspaceId, name, type, capacity, pricePerHour, availabilityStatus) {
        this.workspaceId = workspaceId;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.pricePerHour = pricePerHour;
        this.availabilityStatus = availabilityStatus;
    }

    updateAvailability() {}
    getDetails() {}
}

module.exports = Workspace;
