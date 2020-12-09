//[5,2,3,4,1]
const sort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]>arr[j+1]) {
                isSwapped = true;
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        if(!isSwapped) return arr;
    }
    return arr;
}

console.log(sort([51,400,1000,42,1,2,3,21]));
console.log(sort([1000,1,2,3,4,5,6]));
