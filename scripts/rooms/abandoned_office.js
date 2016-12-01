rooms.abandoned_office = {
    id: "abandoned_office",
    name: "Abandoned Office",
    exitIds: [
        "street"
    ],
    onEnter: () => {
        api.clearScreen();

        api.debugLog("entered abandoned_office");
    }
}