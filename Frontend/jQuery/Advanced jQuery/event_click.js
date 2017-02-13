/*jslint devel: true */

var h1Styles = {
    
    color: "white",
    background: "steelblue",
    margin: "30px",
    padding: "30px",
    textAlign: "center",
    border: "5px solid white"
    
};

var firstButtonStyles = {
    
    width: "125px",
    height: "125px",
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    display: "block",
    fontSize: "16px"
    
};

var secondButtonStyles = {
    
    width: "175px",
    height: "175px",
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    display: "none",
    fontSize: "20px"
    
};

var thirdButtonStyles = {
    
    width: "250px",
    height: "250px",
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    display: "none",
    fontSize: "24px"
    
};

$("body").css("backgroundColor", "#232323");
$("h1").css(h1Styles);
$("#firstButton").css(firstButtonStyles);
$("#secondButton").css(secondButtonStyles);
$("#thirdButton").css(thirdButtonStyles);

$("#firstButton").click(function () {

    $(firstButtonStyles).attr("display", "none");
    $("#firstButton").css(firstButtonStyles);
    $(secondButtonStyles).attr("display", "block");
    $("#secondButton").css(secondButtonStyles);
    
});

$("#secondButton").click(function () {

    $(secondButtonStyles).attr("display", "none");
    $("#secondButton").css(secondButtonStyles);
    $(thirdButtonStyles).attr("display", "block");
    $("#thirdButton").css(thirdButtonStyles);
    
});

$("#thirdButton").click(function () {

    $(thirdButtonStyles).attr("display", "none");
    $("#thirdButton").css(thirdButtonStyles);
    alert("Dude!");
    
});
