/*jslint devel: true */

var paragraph = document.querySelector("p");
paragraph.textContent;
paragraph.textContent = "You have been Bamboozled! I changed the paragraphs content! :D";
var paragraph2 = document.querySelector("p");
paragraph2.innerHTML = "<p>This is an <strong> innerHTML </strong> modification. </p>";