import mergeSort from './mergesort.js';

window.addEventListener("load", main);

function main() {
    const arr1 = [34, 7, 23, 32, 5, 62, 31, 4, 18, 9];
    const arr2 = [23, 4, 42, 15, 16, 8];

    console.log(mergeSort(arr1));
    console.log("------------------------------------------------");
    
    console.log(mergeSort(arr2));
}