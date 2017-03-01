var express     = require("express"),
    app         = express(),
    morgan      = require("morgan"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.set("view engine", "ejs");

// Schema Setup.

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
        name: "Boya Lake Provincial Park, Canada.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg/1024px-Boya_Lake_-_Boya_Lake_Provincial_Park_-_Near_Watson_Lake_-_Northern_British_Columbia_-_Canada_-_03.jpg",
        description: "Beautiful lake. Highly recommended place to camp!"
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("Newly Created Campground: ");
            console.log(campground);
        }
    });*/

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
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            // Render show template with that campground.
            res.render("show", {campground: foundCampground});
        }
    });
    
    

});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started Successfully!");
});