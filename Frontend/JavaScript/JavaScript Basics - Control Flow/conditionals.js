/*jslint devel: true */

var userAge = prompt("Please Input Your Age To Verify You Eligibility To Enter The Concert Venue: ");

if (userAge < 18) {
    alert("Sorry, you are not old enogh to enter the venue.");
    
    console.log("Sorry, you are not old enogh to enter the venue.");
} else if (userAge < 21) {
    alert("Welcome, you can enter, but you cannot drink alcohol.");
    
    console.log("Welcome, you can enter, but you cannot drink alcohol.");
} else {
    alert("Welcome, you may enter the venue and drink alcohol.");
    
    console.log("Welcome, you may enter the venue and drink alcohol.");
}