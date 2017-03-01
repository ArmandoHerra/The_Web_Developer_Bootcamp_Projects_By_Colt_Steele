var express          = require("express"),
    app              = express(),
    morgan           = require("morgan"),
    bodyParser       = require("body-parser"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose         = require("mongoose");

// App Configuration.
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

// Mongoose/Model Configuration.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES.

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX ROUTE.
app.get("/blogs", function(req, res){
    
    Blog.find({}, function(err, blogs){
        if(err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE.
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE ROUTE.
app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // Create blog.
    Blog.create(req.body.blog, function(err, newBlog){
        if(err) {
            res.render("new");
        } else {
            // Redirect.
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE.
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE.
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE.
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE.
app.delete("/blogs/:id", function(req, res){
    // Destroy blog post.
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log("Error has ocurred!");
            res.redirect("/blogs");
        } else {
            // Redirect somewhere.
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Initialized Successfully!");
});