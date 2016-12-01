var objects = {}; //all objects?!

var rooms = {}; //all rooms?

var gameViewModel = {
    inventory: ko.observableArray([]),
    money: ko.observable(0),
    flags: {debug: true},
    verbs: [
        "open",
        "close",
        "pick up",
        "use",
        "talk to",
        "go to",
        "examine"
    ],
    verbLineValue: ko.observable(""),
    room: ko.observable(),
    
    
    
    
    initGame: () => {
        //wire up rooms to each other
        for (var roomId in rooms) {
            if (!rooms.hasOwnProperty(roomId)) continue;

            var room = rooms[roomId];

            if (!room.hasOwnProperty("exitIds")) continue;

            room.exits = [];

            room.exitIds.forEach(exitId => {
                room.exits.push(rooms[exitId]);
            });

            room.exitIds = null;
        }

        //set the initial room
        api.goToRoom("street");
    },


    processVerbLine: () => {
        api.debugLog(`verb line: ${gameViewModel.verbLineValue()}`);

        api.goToRoom(gameViewModel.verbLineValue());

        //reset the input
        gameViewModel.verbLineValue("");
    }
};

var api = {
    //travel
    goToRoom: roomId => {
        gameViewModel.room(rooms[roomId]);

        gameViewModel.room().onEnter();
    },

    //text output (these are kind of bad as they use the ui elements directly, not KO bindings,
    //but it's easier for html output, which is part of the point of doing this on the web (for easy inline text colouring...))
    clearScreen: () => {
        $("#gameText p").html("");
    },
    
    describe: text => {
        $("#gameText").append(`<p class="text-describe">${text}</p>`);
    },

    speak: (name, color, text) => {
        $("#gameText").append(`<p class="text-speech">${name}: <span style="color: ${color}">${text}</span></p>`);
    },

    log: text => {
        $("#gameText").append(`<p class="text-log">${text}</p>`);
    },

    debugLog: text => {
        if(gameViewModel.debug)
            $("#gameText").append(`<p class="text-debug">DEBUG: ${text}</p>`);
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
        return gameViewModel.flags[flag];
    },
    
    //flag manipulation
    setFlag: flag => {
        gameViewModel.flags[flag] = true;
    },

    clearFlag: flag => {
        gameViewModel.flags[flag] = null;
    }
};