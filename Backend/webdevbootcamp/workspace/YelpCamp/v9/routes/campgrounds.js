var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");

// INDEX ROUTE.
router.get("/", function(req, res){
    // Get all campgrounds from Database.
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: allCampgrounds
            });
        }
    });
});

// CREATE ROUTE.
router.post("/", isLoggedIn, function(req, res){
    // Get data from form and add to campgrounds array.
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name,
        image: image,
        description: desc,
        author: author
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
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

// SHOW ROUTE.
router.get("/:id", function(req, res) {
    // Find the campground with provided id.
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            // Render show template with that campground.
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// Middleware.
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;