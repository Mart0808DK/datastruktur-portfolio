function insertionSortSwap(arr) {
    let iterations = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1, arr);
            j--;
        }
        iterations++;
    }
    console.log("iterations for swap :", iterations);  
    
    return arr;
}

function insertionSortShift(arr) {
    let iterations = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
        iterations++;
    }
    console.log("iterations for shift :", iterations);
    return arr;
}

function swap(indexa, indexb, arr) {
    let temp = arr[indexa];
    arr[indexa] = arr[indexb];
    arr[indexb] = temp;
}

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

export { insertionSortSwap, insertionSortShift, isSorted };
