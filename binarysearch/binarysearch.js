"use strict";
window.addEventListener("load", main);

function main() {
    console.log("Hello");
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearch(search, values) {
    let min = 0;
    let max = values.length;
    let middle;
    let found = false;

    while (!found && min < max) {
        middle = min + Math.floor((max - min) / 2);
        let com = comparenum(search, values[middle]);

        if (com == 0) {
            found = true;
            return middle;
        } else if (com < 0) {
            console.log("Det var for højt");
            max = middle - 1;
        } else if (com > 0) {
            console.log("Det var for lavt");
            min = middle + 1;
        }
    }
    return -1;
}

function comparenum(num1, num2) {
    return num1 - num2;
}

let index = binarySearch(23, values);
console.log(`Talet fundet på ${index}`);
