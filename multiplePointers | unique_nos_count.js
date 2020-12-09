const countUniqueNumbers = arr => {
    let arrayLength = arr.length;
    if (arrayLength === 0 || arrayLength === 1) return arrayLength;

    let i = 0;
    let j = 1;
    let count = 1
    while (j !== arrayLength) {
        if (arr[i] !== arr[j]) {
            count++;
        }
        i++;
        j++;
    }
    return count;
}
[1,2,3,3,4,5,6]
//even more better solution
const countUniqueNumbers2 = arr => {
    let i=0;
    for(let j = 1;j<=arr.length;j++) {
        if(arr[i]!==arr[j]) {
            i++;
            arr[i] = arr[j]  
        }
    }
    return i+1;
}

