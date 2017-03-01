var express = require("express");
var app = express();

// "/" => "Hi there!".
app.get("/home", function(req, res){
    console.log("Someone has made a request to '/home'");
    res.send("Welcome young padawan, to the realm of the backend...");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    console.log("Someone has made a request to '/bye'");
   res.send("Goodbye young padawan, may the force be with you!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone has made a request to '/dog'");
    res.send("MEOW!!!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    console.log("Someone has made a request to /r/" + subreddit);
    res.send("Welcome To The " + subreddit + " Subreddit!");
});

// "*" is for invalid routes not defined in the app.js file.
// => Sends the following message: "Cannot Get The Requested Route(/...)".
// "*" Parameter should go last, if not last then the "*" will not let
// us access any of the other routes after it.
app.get("*", function(req, res) {
    console.log("User tried to access an invalid route...");
    res.send("Cannot Get The Requested Route (/...)");
});

// Tell Express to listen for requests (start server).
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});