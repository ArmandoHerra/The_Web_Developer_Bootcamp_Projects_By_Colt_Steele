/*jslint devel: true */

var movies = [
    
    {
        title: "The Matrix",
        hasWatched: true,
        rating: 87
    },
    {
        title: "The Matrix Reloaded",
        hasWatched: true,
        rating: 73
    },
    {
        title: "The Matrix Revolutions",
        hasWatched: true,
        rating: 36
    }
    
];

function buildResultString(movie) {
    
    "use strict";
    var result = "You have ";
    
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " out of 100.";
    
    return result;
}

movies.forEach(function (movie) {
    
    "use strict";
    console.log(buildResultString(movie));
    
});