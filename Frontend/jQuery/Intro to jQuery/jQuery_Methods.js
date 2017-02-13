/*jslint devel: true */

// Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
console.log($("h1").text());
console.log($("ul").text());

$("h1").text("Hi! Updated Text Here!");

// Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
console.log($("h1").html());
console.log($("ul").html());

$("h1").html("<h1>Intro to <a href='https://jquery.com/'>jQuery</a></h1>");

// Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
$("img").css("width", "300px");

var image = document.querySelector("img");

image.addEventListener("click", function () {
    
    $("img").attr("src", "ermine.jpg");
    $("img").css("width", "600px");
    
});

var button = document.getElementById("button1");
console.log($("input").attr("type"));

button.addEventListener("click", function () {
   
    $("input").attr("type", "color");
    
});

// Get the current value of the first element in the set of matched elements or set the value of every matched element.
console.log($("input").val());

var button2 = document.getElementById("button2");

button2.addEventListener("click", function () {
    
    alert($("input").val()); 
    
});

// Adds the specified class(es) to each element in the set of matched elements.
var button3 = document.getElementById("button3");
var button5 = document.getElementById("button5");

button3.addEventListener("click", function () {
   
    $("h2").addClass("correct");
    
});

button5.addEventListener("click", function () {
   
    $("h2").addClass("wrong");
    
});

// Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

var button4 = document.getElementById("button4");
var button6 = document.getElementById("button6");

button4.addEventListener("click", function () {
   
    $("h2").removeClass("correct");
    
});

button6.addEventListener("click", function () {
   
    $("h2").removeClass("wrong");
    
});

// Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");

button7.addEventListener("click", function () {
   
    $("h2").toggleClass("correct");
    
});

button8.addEventListener("click", function () {
   
    $("h2").toggleClass("wrong");
    
});