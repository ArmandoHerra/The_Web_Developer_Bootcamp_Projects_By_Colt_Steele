// mongoose is a ODM - Object Data Mapper.
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to the database.

/*var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err) {
        console.log("Something went wrong!");
    } else {
        console.log("We just saved a cat to the Database.");
        console.log(cat);
    }
});*/

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log("An error has occurred while trying to create a cat.");
        console.log(err);
    } else {
        console.log("A new cat has been created.");
        console.log(cat);
    }
});

// Retrieve all cats from database. Console.log() all cats.

Cat.find({}, function(err, cats){
    if(err){
        console.log("An error has occurred.");
        console.log(err);
    } else {
        console.log("All The Cats...");
        console.log(cats);
    }
});