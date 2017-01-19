/*jslint devel: true */

var toDos = [];

function listToDoS() {
    console.log("**********");
    
    toDos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    
    console.log("**********");
}

function addToDo() {
    var newToDo = prompt("Enter new to do: ");
    toDos.push(newToDo);
    console.log("Added ToDo.");
}

function deleteToDo() {
    var index = prompt("Enter index of todo to delete: ");
    toDos.splice(index, 1);
    console.log("Deleted ToDo!");
}

function toDoFunc() {

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        
        if (input === "list") {
            
            listToDoS();
            
        } else if (input === "new") {
            
            addToDo();
            
        } else if (input === "delete") {
            
            deleteToDo();
            
        }
        
        input = prompt("What would you like to do now?");
        
    }

    console.log("You Quit The App!");
    alert("You Quit The App!");

}

// setInterval used to avoid script loading before HTML file is viewed in browser.
setInterval(toDoFunc, 3000);