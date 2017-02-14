/*jslint devel: true */

var divStyles = {
    width: "100px",
    height: "100px",
    background: "teal",
    float: "left",
    margin: "50px",
    padding: "25px",
    textAlign: "center"
};

var spanStyles = {
    width: "100px",
    height: "100px",
    background: "teal",
    float: "left",
    margin: "50px",
    padding: "25px",
    textAlign: "center",
    display: "none"
};

$("div").css(divStyles);
$("span").css(spanStyles);
$("#toggle").css(divStyles);

/*
$("#fadeButton").on("click", function () {
    $("div").fadeOut(2000, function () {
        console.log("Fade Out Completed!");
        $(this).remove();
    });
});

$("#fadeButton").on("click", function () {
    $("span").fadeIn(2000, function () {
        console.log("Fade In Completed!");
    });
});
*/

$("#fadeButton").on("click", function () {
    $("#toggle").fadeToggle(2000, function () {
        console.log("Fade Toggle Completed!");
    });
});

