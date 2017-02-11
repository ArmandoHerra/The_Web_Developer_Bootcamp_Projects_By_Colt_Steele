/*jslint devel: true */

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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