var Campground = require("../models/campground");
var Comment = require("../models/comment");

// ALL THE MIDDLEWARE GOES HERE.

var middlewareObj = {
    checkCampgroundOwnership: function(req, res, next) {
        if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
                if(err) {
                    req.flash("error", "Campground not found.");
                    res.redirect("back");
                } else {
                    // Does user own capground? (If Yes).
                    if(foundCampground.author.id.equals(req.user._id)){
                        next();
                    } else {
                        req.flash("error", "You don't have permission to edit that item.");
                        // If not, redirect somewhere.
                        res.redirect("back");
                    }
                }
            });
        } else {
            req.flash("error", "You need to be logged in to do that!");
            // If not, redirect somewhere.
            res.redirect("back");
        }
    },
    checkCommentOwnership: function(req, res, next) {
        if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment) {
                console.log(foundComment);
                if(err) {
                    res.redirect("back");
                } else {
                    // Does user own comment? (If Yes).
                    if(foundComment.author.id.equals(req.user._id)) {
                        next();
                    } else {
                        req.flash("error", "You don't have permission to edit that item.");
                        // If not, redirect somewhere.
                        res.redirect("back");
                    }
                }
            });
        } else {
            req.flash("error", "You need to be logged in to do that!");
            // If not, redirect somewhere.
            res.redirect("back");
        }
    },
    isLoggedIn: function(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("/login");
    }
};

module.exports = middlewareObj;