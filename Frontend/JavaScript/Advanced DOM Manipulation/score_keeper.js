/*jslint devel: true */

var playerOneHTML = document.getElementById("playerOneDisplay");
var playerTwoHTML = document.getElementById("playerTwoDisplay");
var numInput = document.querySelector("input[type='number']");
var playerOneButton = document.getElementById("playerOne");
var playerTwoButton = document.getElementById("playerTwo");
var winningScoreHTML = document.querySelector("p span");
var resetButton     = document.getElementById("reset");
var paragraph = document.querySelector("p");
var playerOneScore  = 0;
var playerTwoScore  = 0;
var gameOver = false;
var winningScore = 5;

playerOneButton.addEventListener("click", function () {
    if(numInput.value > 0){
        if (!gameOver) {
            playerOneScore++;
            if (playerOneScore === winningScore) {
                playerOneHTML.classList.add("winner");
                gameOver = true;
            }
            playerOneHTML.textContent = playerOneScore;
        }
    }
});

playerTwoButton.addEventListener("click", function () {
    if(numInput.value > 0){
        if (!gameOver) {
            playerTwoScore++;
            if (playerTwoScore === winningScore) {
                playerTwoHTML.classList.add("winner");
                gameOver = true;
            }
            playerTwoHTML.textContent = playerTwoScore;
        }
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset () {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneHTML.textContent = 0;
    playerTwoHTML.textContent = 0;
    playerOneHTML.classList.remove("winner");
    playerTwoHTML.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function () {
    if(numInput.value < 0){
        winningScore.textContent = 0;
    } else {
        winningScoreHTML.textContent = numInput.value;
        winningScore = Number(numInput.value);
        reset();
    }
});
