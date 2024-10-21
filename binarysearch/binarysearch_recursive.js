window.addEventListener("load", main);

function main() {
    console.log("Hello");
}

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function comparenum(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

function binarySearchRecursive(search, values, min, max, compare = comparenum) {
    if (min > max) {
        return -1; // Base case: element not found
    }
    let middle = min + Math.floor((max - min) / 2);
    let com = compare(search, values[middle]);

    if (com == 0) {
        return middle;
    } else if (com < 0) {
        console.log(`For højt ${middle}`);
        return binarySearchRecursive(search, values, min, middle - 1, compare);
    } else {
        console.log(`For lavt ${middle}`);
        return binarySearchRecursive(search, values, middle + 1, max, compare);
    }
}

let index = binarySearchRecursive(22, values, 0, values.length - 1);

console.log(`Talet fundet på ${index}`);

// if (start > end) {
//     return -1;
// }

// let middle = start + Math.floor((end - start) / 2);
// let com = compare(search, values[middle]);

// if (com == 0) {
//     return middle;
// } else if (com < 0) {
//     return binarySearchRecursive(search, values, start, middle - 1, comparator);
// } else {
//     return binarySearchRecursive(search, values, middle + 1, end, comparator);
// }
