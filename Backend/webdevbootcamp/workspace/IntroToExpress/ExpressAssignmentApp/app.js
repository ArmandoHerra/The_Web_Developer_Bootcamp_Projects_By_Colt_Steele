var express = require("express");
var app = express();

// "/"
app.get ("/", function (req, res) {
    console.log("Someone has accessed '/'");
    res.send("Hi there, welcome to my Express Routing Assignment.");
});

// '/speak/:animal'
app.get ("/speak/:animalName", function (req, res) {
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human...",
        goldfish: "..."
    }
    
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];
    console.log("Someone has accessed '/speak/" + animal + "'..."); 
    
    res.send("The " + animal + " says '" + sound + "'");
    
});

app.get("/repeat/:userString/:userNumber", function(req, res) {
    
    var uString = req.params.userString;
    var uNumber = Number(req.params.userNumber);
    var result = "";
    console.log("Someone has accessed '/repeat/" + uString + "/" + uNumber + "'...");
    
    for(var i = 0; i < uNumber; i++) {
        result += uString + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    console.log("User tried to access an invalid route...");
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (Start The Server).
app.listen (process.env.PORT, process.env.IP, function () {
    console.log("Server Initialized Successfully...");
});