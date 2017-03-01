var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = [
    "Alex",
    "Monica",
    "Kalzeto",
    "Zombra",
    "Luismy"
];  

app.get("/", function(req, res){
    console.log("Someone has accessed the '/' route...");
    res.render("home");
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    console.log("Someone has accessed the '/addFriend' route...");
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    console.log("Someone has accessed the '/friends' route...");
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res) {
   console.log("Someone has tried to access an invalid route...");
   res.send("Sorry, this route is undefined, please try another route...");
});

app.listen(process.env.PORT, process.env.IP, function(){
     console.log("Server Initialized Successfully!");
});