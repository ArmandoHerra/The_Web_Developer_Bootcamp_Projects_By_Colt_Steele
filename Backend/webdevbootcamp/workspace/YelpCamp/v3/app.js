var express     = require("express"),
    app         = express(),
    morgan      = require("morgan"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds");
    
mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.set("view engine", "ejs");

seedDB();

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX ROUTE.
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from Database.
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE ROUTE.
app.post("/campgrounds", function(req, res){
    // Get data from form and add to campgrounds array.
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: desc
    };
    // Create a new campground and save to Database.
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            console.log(err);
        } else {
            // Redirect back to campgrounds page.
            res.redirect("/campgrounds");
        }
    });
});

// NEW ROUTE.
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// SHOW ROUTE.
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided id.
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            // Render show template with that campground.
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started Successfully!");
});