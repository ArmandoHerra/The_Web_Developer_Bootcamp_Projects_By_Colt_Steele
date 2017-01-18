/*jslint devel: true */

function sing() {
    console.log("Twinkle twinkle...");
    console.log("How i wonder...");
}

setInterval(sing, 1000);

setInterval(function () {
    console.log("I am an annonymous function!");
    console.log("THIS IS WEIRD!");
}, 2000);