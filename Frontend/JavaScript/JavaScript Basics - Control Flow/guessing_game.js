/*jslint devel: true */

// Create Secret Number.

var secretNumber = 4;

// Ask User For Guess.

var stringGuess = prompt("Guess a number: ");
var guess = Number(stringGuess);

// Check If Guess Is Right.

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
} else if (guess > secretNumber) {
    alert("TOO HIGH, TRY AGAIN!");
} else {
    alert("TOO LOW, TRY AGAIN!");
}