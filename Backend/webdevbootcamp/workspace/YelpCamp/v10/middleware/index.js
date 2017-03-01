var Campground = require("../models/campground");
var Comment = require("../models/comment");

// ALL THE MIDDLEWARE GOES HERE.

var middlewareObj = {
    checkCampgroundOwnership: function(req, res, next) {
        if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
                if(err) {
                    res.redirect("back");
                } else {
                    // Does user own capground? (If Yes).
                    if(foundCampground.author.id.equals(req.user._id)){
                        next();
                    } else {
                        // If not, redirect somewhere.
                        res.redirect("back");
                    }
                }
            });
        } else {
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
                        // If not, redirect somewhere.
                        res.redirect("back");
                    }
                }
            });
        } else {
            // If not, redirect somewhere.
            res.redirect("back");
        }
    },
    isLoggedIn: function(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }
};

module.exports = middlewareObj;