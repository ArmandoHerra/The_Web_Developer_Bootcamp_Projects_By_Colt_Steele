/*jslint devel: true */

$("input[type='text']").keypress(function (event) {
    if(event.which === 13) {
        alert("You hit enter!");
    }
});