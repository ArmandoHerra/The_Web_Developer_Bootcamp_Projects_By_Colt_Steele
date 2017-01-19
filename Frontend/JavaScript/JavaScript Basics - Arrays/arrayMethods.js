/*jslint devel: true */

// Push & Pop.

console.log("Push.");

var numbers = [0, 1, 2];
console.log(numbers);
numbers.push(3);

console.log("Pop.");

var numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers);
numbers.pop();

// Shift & Unshift.

console.log("Unshift Adds To The Beggining Of The Array.");

var numbers = [0, 1, 2];
console.log(numbers);
numbers.unshift(3);

console.log("Shift Removes The First Item In The Array.");

var numbers = [0, 1, 2];
console.log(numbers);
numbers.shift();

// indexOf.

console.log("indexOf is used to find the index of an item in an array.");

var names = ["Armando", "Alexis", "Herra", "Cortez"];

// Returns the first index at which a given element was found.
console.log(names.indexOf("Herra"));

// Returns -1 if it doesn't find an element.
console.log(names.indexOf("Seketh"));

// Slice.

// Slice is used to copy parts of an array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
var fruits_backup = fruits.slice();

console.log(fruits);
console.log(citrus);
console.log(fruits_backup);