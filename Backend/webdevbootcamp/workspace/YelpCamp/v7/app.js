var express     = require("express"),
    app         = express(),
    morgan      = require("morgan"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local");
    
    
mongoose.connect("mongodb://localhost/yelp_camp_v6");
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

// PASSPORT CONFIGURATION.
app.use(require("express-session")({
    secret: "d4rt7pl49u315",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

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
            res.render("campgrounds/index", {
                campgrounds: allCampgrounds
            });
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
    res.render("campgrounds/new");
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
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// =========================
// COMMENTS ROUTES.
// =========================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    // Find campground by id.
    Campground.findById(req.params.id, function(err, campground){
        if(err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    // Lookup campground using ID.
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
             // Create new comment.
             Comment.create(req.body.comment, function(err, comment){
                 if(err) {
                     console.log(err);
                 } else {
                     // Connect new comment to campground.
                     campground.comments.push(comment);
                     campground.save();
                     // Redirect campground show page.
                     res.redirect("/campgrounds/" + campground._id);
                 }
             });
        }
    });
});

// ========================
// AUTHENTICATION ROUTES.
// ========================

// Show register form.
app.get("/register", function(req, res) {
    res.render("register");
});

// Handle sign up logic.
app.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render("/register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        });
    });
});

// Show login form.
app.get("/login", function(req, res) {
    res.render("login");
});

// Handling Login logic.
app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
});

// Log out route.
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started Successfully!");
});