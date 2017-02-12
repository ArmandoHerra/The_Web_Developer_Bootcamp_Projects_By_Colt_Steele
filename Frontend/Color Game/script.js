/*jslint devel: true */

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
});

hardBtn.addEventListener("click", function () {
    
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    
});

resetButton.addEventListener("click", function () {
    
    // Generate all new colors.
    colors = generateRandomColors(numSquares);
    
    // Pick a new random color from our array.
    pickedColor = pickColor();
    
    // Change color display to match picked color.
    colorDisplay.textContent = pickedColor;
    
    // Change colors of squares.
    for (var i = 0; i < squares.length; i++) {
    
        squares[i].style.background = colors[i];
    
    }
    
    h1.style.background = "steelblue";
    
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    
    // Add initial colors to squares.
    squares[i].style.background = colors[i];
    
    // Add click listeners to squares.
    squares[i].addEventListener("click", function () {
        
        // Grab color of clicked square.
        var clickedColor = this.style.background;
        
        // Compare color to pickedColor.
        if (clickedColor === pickedColor) {
            
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            
        } else {
            
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
            
        }
    });
}

function changeColors(color) {
    
    // Loop through all squares.
    for (var i = 0; i < squares.length; i++) {
        
        // Change each color to match given color.
        squares[i].style.background = color;
        
    }
}

function pickColor() {
    
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}

function generateRandomColors(num) {
    
    // Make array.
    var arr = [];
    
    // Add num random colors to array.
    for (var i = 0; i < num; i++) {
        // Get random colors and push to arr.
        arr.push(randomColor());
    }
    
    // Return that array.
    return arr;
    
}

function randomColor () {
    
    // Pick a "red" from 0 to 255.
    var R = Math.floor(Math.random() * 256);
    
    // Pick a "green" from 0 to 255.
    var G = Math.floor(Math.random() * 256);
    
    // Pick a "blue" from 0 to 255.
    var B = Math.floor(Math.random() * 256);
    
    return "rgb(" + R + ", " + G + ", " + B + ")";
    
}