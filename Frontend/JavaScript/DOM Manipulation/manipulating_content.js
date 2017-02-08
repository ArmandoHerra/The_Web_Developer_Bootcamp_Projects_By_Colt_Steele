/*jslint devel: true */

// Changing only text content with .textContent
var paragraph = document.querySelector("p");
paragraph.textContent = "You have been Bamboozled! I changed the paragraphs content! :D";

// Changing text and adding or modifiying HTML with .innerHTML
var paragraph2 = document.querySelector("p");
paragraph2.innerHTML = "<p>This is an <strong> innerHTML </strong> modification. </p>";