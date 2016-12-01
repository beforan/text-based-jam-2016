rooms.street = {
    id: "street",
    name: "Main Street",
    objects: [],
    exitIds: ["abandoned_office"],
    onEnter: () => {
        api.clearScreen();
        
        api.debugLog("entered street");

        api.describe("You are standing on an empty street, in the darkness of the winter evening.")
    }
}