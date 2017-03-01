var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.set("view engine", "ejs");

var campgrounds = [
    {
        name: "Yosemite National Park, California.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Yosemite_valley_tunnel_view_2010.JPG/1024px-Yosemite_valley_tunnel_view_2010.JPG"
    },
    {
        name: "Shenandoah National Park, Virginia.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shenandoah_National_Park_01.jpg/1024px-Shenandoah_National_Park_01.jpg"
    },
    {
        name: "Boya Lake Provincial Park, Canada.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg/1024px-Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg"
    },
    {
        name: "Yosemite National Park, California.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Yosemite_valley_tunnel_view_2010.JPG/1024px-Yosemite_valley_tunnel_view_2010.JPG"
    },
    {
        name: "Shenandoah National Park, Virginia.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shenandoah_National_Park_01.jpg/1024px-Shenandoah_National_Park_01.jpg"
    },
    {
        name: "Boya Lake Provincial Park, Canada.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg/1024px-Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg"
    },
    {
        name: "Yosemite National Park, California.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Yosemite_valley_tunnel_view_2010.JPG/1024px-Yosemite_valley_tunnel_view_2010.JPG"
    },
    {
        name: "Shenandoah National Park, Virginia.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Shenandoah_National_Park_01.jpg/1024px-Shenandoah_National_Park_01.jpg"
    },
    {
        name: "Boya Lake Provincial Park, Canada.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg/1024px-Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg"
    }
];

app.get("/", function(req, res){
    console.log("Someone has accessed the '/' route.");
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    console.log("Someone has accessed the '/campgrounds' route.");
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    console.log("Someone has accessed the POST '/campgrounds' route.");
    // Get data from form and add to campgrounds array.
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    
    // Redirect back to campgrounds page.
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    console.log("Someone has accessed the '/campgrounds/new' route.");
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started Successfully!");
});