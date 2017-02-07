/*jslint devel: true */

// Get elements by ID.
var tag = document.getElementById("highlight");
console.log(tag);

// Get elements by class name.
var tags = document.getElementsByClassName("bolded");
console.log(tags);

// Get elements by tag name.
var tagName = document.getElementsByTagName("li");
console.log(tagName);

// querySelector.
var selector = document.querySelector("#highlight");
console.log(selector);

var allSelectors = document.querySelector(".bolded");
console.log(allSelectors);