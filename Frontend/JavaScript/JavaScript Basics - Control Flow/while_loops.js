/*jslint devel: true */

console.log("All numbers between -10 and 19.");

var x = -10;

while (x <= 19) {
    console.log(x);
    x++;
}

console.log("All even numbers between 10 and 40.");

var x = 10;

while (x <= 40) {
    if (x % 2 === 0) {
        console.log(x);
    }
    x++;
}

console.log("All odd numbers between 300 and 333.");

var x = 300;

while (x <= 333) {
    if (x % 2 === 1) {
        console.log(x);
    }
    x++;
}

console.log("All numbers divisible by 5 and between 5 and 50.");

var x = 5;

while (x <= 50) {
    if (x % 5 === 0) {
        console.log(x);
    }
    x++;
}