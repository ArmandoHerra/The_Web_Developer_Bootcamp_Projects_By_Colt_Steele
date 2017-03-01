var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    console.log("Someone has accessed the '/' route.");
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query;
    console.log("Someone has requested to access: " + url);
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            console.log("Someone has successfully accessed: " + url);
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("*", function(req, res) {
    res.send("Sorry, that route has not been defined :)");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App Server Initialized Successfully!"); 
});