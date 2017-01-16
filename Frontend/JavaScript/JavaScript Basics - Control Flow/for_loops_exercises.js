/*jslint devel: true */

console.log("All numbers between -10 and 19.");

for (var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("All even numbers between 10 and 40.");

for (var i = 10; i < 41; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("All odd numbers between 300 and 333.");

for (var i = 300; i < 334; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

console.log("All numbers divisible by 5 and between 5 and 50.");

for (i = 5; i < 51; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}