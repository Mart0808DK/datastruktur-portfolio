import { countingSort } from "./countingsort.js";
const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

window.addEventListener("load", main);

function main() {
    console.log("Hello World");

    console.log(countingSort(list)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}