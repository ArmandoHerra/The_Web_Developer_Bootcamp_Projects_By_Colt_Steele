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
