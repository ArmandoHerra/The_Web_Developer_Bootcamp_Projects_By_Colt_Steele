/*jslint devel: true */

var colors = ["red", "orange", "yellow", "green"];

// For loop.
console.log("For loop.");

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ForEach Loop.
console.log("ForEach loop.");

colors.forEach(function(color) {
    console.log(color);
});