/*jslint devel: true */

var x = 10;
var y = "a";

// Evaluates True Because:

// y === "b" is False
// x >= 10 is True.
console.log(y === "b" || x >= 10);

var x = 3;
var y = 8;

// Evaluates to False Because:

// x == "3" is True.
// x === y is False.
// (x == "3" || x === y) is True.
// !(x == "3" || x === y) is False.
// &&
// y != 8 is False.
// &&
// x <= y is True.
// (y != 8 && x <= y) is False.
// !(y != 8 && x <= y) is True.
// (!(x == "3" || x === y) && !(y != 8 && x <= y)) is False && True = False.
console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));

var str = "";
var msg = "hahaha!";
var isFunny = "false";

console.log(!((str || msg) && isFunny));

// Evaluates to False Because:

// (str || msg) is True.
// ((str || msg) && isFunny) is True.
// !((str || msg) && isFunny)) is False.