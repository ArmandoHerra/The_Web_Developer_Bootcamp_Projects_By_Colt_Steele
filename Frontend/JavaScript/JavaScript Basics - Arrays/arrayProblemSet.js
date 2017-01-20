/*jslint devel: true */

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        return arr[i];
    }
}

printReverse([1,2,3,4,5]);

/*function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}*/

function isUniform(arr) {
    var first = arr[0];
    arr.forEach(function(element){
        if(element !== first) {
            return false;
        }
    });
    return true;
}

isUniform([1,1,1,1]);
isUniform([1,1,1,2]);

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

sumArray([1,2,3]);

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([5, 20, 99, 0]);