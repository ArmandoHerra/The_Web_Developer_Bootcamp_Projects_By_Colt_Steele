/*jslint devel: true */

var first = document.getElementById("first");
console.log(first);

var second = document.getElementsByClassName("special");
console.log(second[0]);

var third = document.getElementsByTagName("p");
console.log(third[0]);

var fourth = document.querySelector("#first");
console.log(fourth);

var fifth = document.querySelector(".special");
console.log(fifth);