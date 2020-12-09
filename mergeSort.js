const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}
const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(((arr.length) / 2));
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)


}
let sorted = mergeSort(Array(1000000).fill(null).map(obj => Math.ceil(Math.random() * 1000)));
console.log(sorted);
