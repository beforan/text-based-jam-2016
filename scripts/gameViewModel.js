var objects = {}; //all objects?!

var rooms = {}; //all rooms?

var gameViewModel = {
    inventory: ko.observableArray([]),
    money: ko.observable(0),
    verbs: ko.observableArray([
        "open",
        "close",
        "pick up",
        "use",
        "talk to",
        "go to",
        "examine"
    ]),
    room: null
    //api: api
};

var ui = {};

var api = {
    //travel
    goToRoom: roomId => {
        gameViewModel.room = ko.observable(rooms[roomId]);

        gameViewModel.room().onEnter();
    },
    
    //text output
    describe: text => {

    },

    speak: (name, color, text) => {

    },

    log: text => {
        $("#gameText").append(`<p>${text}</p>`);
    },

    //object ownership
    addToInventory: objectId => {

    },

    removeFromInventory: objectId => {

    },

    AddToCurrentRoom: objectId => {

    },

    removeFromCurrentRoom: objectId => {

    },

    //object manipulation
    changeObjectName: (objectId, name) => {

    },

    addObjectTopic: (objectId, topic) => {

    },

    //conditions?
    hasItem: objectId => {

    },

    isSet: flag => {

    },

    isNotSet: flag => {

    }
};

function initGame() {
    //wire up rooms to each other
    for (var roomId in rooms) {
        if (!rooms.hasOwnProperty(roomId)) continue;
        
        var room = rooms[roomId];

        if (!room.hasOwnProperty("exitIds")) continue;

        room.exits = ko.observableArray([]);

        room.exitIds.forEach(exitId => {
            room.exits.push(rooms[exitId]);
        });

        room.exitIds = null;
    }

    //set the initial room
    api.goToRoom("street");
}