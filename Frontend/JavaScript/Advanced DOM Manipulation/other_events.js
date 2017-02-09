/*jslint devel: true */

var allLi = document.querySelectorAll("li");

for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("mouseover", function () {
        this.classList.add("OnHoverEnter");
    });
    
    allLi[i].addEventListener("mouseout", function () {
        this.classList.remove("OnHoverEnter");
    });
}
