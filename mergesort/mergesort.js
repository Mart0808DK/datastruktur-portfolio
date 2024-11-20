let iterations = 0;

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
  
}

function merge(left, right) {
  const sortArr = []
  while (left.length && right.length) {
    iterations++;
    if (left[0] < right[0]) {
      sortArr.push(left.shift())
    } else {
      sortArr.push(right.shift())
    }
  }
  console.log(iterations);
  

  return [...sortArr, ...left, ...right]
  
}



export default mergeSort;