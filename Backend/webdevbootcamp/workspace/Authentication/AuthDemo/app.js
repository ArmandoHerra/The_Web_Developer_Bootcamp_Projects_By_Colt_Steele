var passportLocalMongoose   = require("passport-local-mongoose"),
    LocalStrategy           = require("passport-local"),
    User                    = require("./models/user"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    express                 = require("express");

var app = express();

mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "This is the secret string!",
    resave: false,
    saveUninitialized: false
}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==================
// ROUTES
// ==================

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// AUTH ROUTES.

// Show signup form.
app.get("/register", function(req, res) {
    res.render("register");
});

// Handling user sign up.
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

// LOGIN ROUTES.

// Render login form.
app.get("/login", function(req, res) {
    res.render("login");
});

// Login logic.
// Middleware.
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
    }), function(req, res){
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized Successfully!");
});