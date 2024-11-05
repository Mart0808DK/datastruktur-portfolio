function countingSort(list) {
    let iterations = 0;
    const max = Math.max(...list);
    const count = Array(max + 1).fill(0);
    console.log(count.length);
    
    const result = [];

    list.forEach(item => {
        count[item]++;
    });

    count.forEach((item, index) => {
        for (let i = 0; i < item; i++) {
            result.push(index);
            iterations++
            
        }
    });
    console.log(iterations);
    

    return result;
}



export {countingSort}