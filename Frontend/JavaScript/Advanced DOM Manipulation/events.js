/*jslint devel: true */

var times = 0;
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var lis = document.querySelectorAll("li");

// Setup click listener.
button.addEventListener("click", function () {
    times++;
    paragraph.textContent = "Someone clicked the button " + times + " times!";
});

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        this.style.fontSize = "50px";
        this.style.color = "red";
        this.style.fontWeight = "bold";
    });
}