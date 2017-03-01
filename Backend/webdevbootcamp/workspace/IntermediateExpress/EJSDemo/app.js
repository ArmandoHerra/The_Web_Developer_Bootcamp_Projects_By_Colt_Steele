var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    console.log("Someone has accessed the '/' page.");
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    console.log("Someone has accessed /fallinlovewith/" + thing);
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {
            title: "Post 1",
            author: "Susy"
        },
        {
            title: "Post 2",
            author: "Charlie"
        },
        {
            title: "Post 3",
            author: "Sue"
        }
    ];
    
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Initialized Successfully!");
});