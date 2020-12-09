
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const pivot = (arr, start = 0, end = arr.length - 1) => {
    let swapPosition = start;
    let pivot = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapPosition++;
            swap(arr, swapPosition, i);
        }
    }
    swap(arr, swapPosition, start);
    return swapPosition;
}
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotPostition = pivot(arr, left, right);
        quickSort(arr, left, pivotPostition - 1);
        quickSort(arr, pivotPostition + 1, right);
    }
    return arr;
}
let result = quickSort([4, 8, 1, 3, 2, 5, 6, 7])

console.log(result);
// [4,8,1,3,2,5,6,7]