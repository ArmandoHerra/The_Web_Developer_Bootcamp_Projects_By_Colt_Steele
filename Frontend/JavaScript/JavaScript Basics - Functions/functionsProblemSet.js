/*jslint devel: true */

alert("Check if a number is even or odd.");
var number = prompt("Enter a number: ");

// Long way.
/*
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
*/

// Short way.
function isEven(number) {
    return number % 2 === 0;
}

alert("Get the factorial of a number.");
var number = prompt("Enter a number: ");

function factorial(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}


alert("Kebab to Snake Case.");
var string = prompt("Enter a kebab cased string: ");

function kebabToSnake(string) {
    var newString = string.replace(/-/g , "_");
    return newString;
}
