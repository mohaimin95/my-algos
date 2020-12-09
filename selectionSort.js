const sort = arr => {
    for (let i = 0; i < arr.length; i++) { 
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

console.log(sort([51,400,1000,42,1,2,3,21]));
console.log(sort([1000,1,2,3,4,5,6]));