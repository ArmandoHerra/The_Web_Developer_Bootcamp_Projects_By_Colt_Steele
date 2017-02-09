/*jslint devel: true */

var firstLi = document.querySelector("li");

alert("CONNECTED");

firstLi.addEventListener("mouseover", function () {
    console.log("Hovered!");
    firstLi.classList.add("OnHoverEnter");
});

firstLi.addEventListener("mouseout", function () {
    firstLi.classList.remove("OnHoverEnter");
});
