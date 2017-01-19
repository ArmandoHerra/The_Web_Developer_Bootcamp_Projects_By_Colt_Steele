/*jslint devel: true */

function toDoFunc() {
    
    var toDos = [];

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        if (input === "list") {
            console.log(toDos);
        } else if (input === "new") {
            var newToDo = prompt("Enter new to do: ");
            toDos.push(newToDo);
        }
        input = prompt("What would you like to do now?");
    }

    console.log("You Quit The App!");
    alert("You Quit The App!");

}

setInterval(toDoFunc, 3000);