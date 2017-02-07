/*jslint devel: true */

//SELECT
var highlight = document.getElementById("highlight");

//MANIPULATE
highlight.style.color = "blue";
highlight.style.border = "10px solid red";
highlight.style.fontSize = "70px";
highlight.style.background = "yellow";
highlight.style.marginTop = "200px";

// Not recommended using this ^ convention. See separation of concerns. (HTML = Structure, CSS = Presentation, JavaScript = Behaviour).

var second = document.querySelector("h2");

second.classList.add("second_class");