var faker = require("faker");

console.log("Welcome To My Wonderful Shop...");
console.log("Here You Can See My 10 Limited Edition Items: ");
console.log("");

for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - " + "${{commerce.price}}"));
}