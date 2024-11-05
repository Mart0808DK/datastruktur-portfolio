import { insertionSortSwap, insertionSortShift } from "./insertionsort.js";
window.addEventListener("load", main);

const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

function main() {
    console.log("list :", list);

    console.log("insertionsSortSwap :", insertionSortSwap(list));
    console.log("insertionSortShift :", insertionSortShift(list));
}
