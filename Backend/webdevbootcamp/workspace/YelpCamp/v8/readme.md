#YelpCamp

* Add Landing Page.
* Add Campgrounds Page That Lists All Campgrounds.

Each Campground Has:
    * Name.
    * Image.
    
#Layout and Basic Styling.

* Create our header and footer partials.
* Add in Bootstrap.

#Creating New Campgrounds.

* Setup new campground POST route.
* Add in body-parser.
* Setup route to show form.
* Add basic unstyled form.

#Style the campgrounds page.

* Add a better header/title.
* Make campgrounds display in a grid.

#Style the Navbar and Form.

* Add a navbar to all templates.
* Style the new campground form.

#Add Mongoose.

* Install and configure mongoose.
* Setup campground model.
* Use camoground model inside of our routes!

#Show Page.

* Review the RESTful routes we've seen so far.
* Add description to our campground model.
* Show db.collection.drop();
* Add a show route/template.



=== RESTFUL ROUTES ===
NAME    ///     URL         ///     VERB    ///     DESCRIPTION.
============================================================
INDEX   ///     /dogs       ///     GET     /// Display a list of all dogs.
NEW     ///     /dogs/new   ///     GET     /// Displays form to make a new dog.
CREATE  ///     /dogs       ///     POST    /// Add a new dog to DB.
SHOW    ///     /dogs/:id   ///     GET     /// Shows info about one dog.



#Refactor Mongoose Code.

* Create a models directory.
* Use module.exports.
* Require everything correctly!

#Add Seeds File.

* Add a seeds.js file.
* Run the seeds file every time the server starts.

#Add the Comment model.

* Make our error go away!
* Display comments on campground show page.

#Comment New/Create.

* Discuss nested routes.
* Add the comment new and create routes.
* Add the new comment form.

#Style Show Page.

* Add sidebar to show page.
* Display comments nicely.

#Finish Styling Show Page.

* Add public directory.
* Add custom stylesheet.

#Auth Part 1 - Add User Model.

* Install all packages needed for auth.
* Define User model.

#Auth Part 2 - Register.

* Configure Passport.
* Add register routes.
* Add register template.

#Auth Part 3 - Login.

* Add login routes.
* Add login template.

#Auth Part 4 - Logout/Navbar.

* Add logout route.
* Prevent user from adding a comment if not signed in.
* Add links to navbar.
* Show/hide auth links correctly.

#Auth Part 5 - Show/Hide Links.

* Show/hide auth links in navbar correctly.

#Refactor The Routes.

* Use Express router to reorganize all routes.

#Users + Comments.

* Associate users and comments.
* Save author's name to a comment automatically.