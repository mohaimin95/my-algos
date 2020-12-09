const sort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(sort([51, 400, 1000, 42, 1, 2, 3, 21]));
console.log(sort([1000, 1, 2, 3, 4, 5, 6]));