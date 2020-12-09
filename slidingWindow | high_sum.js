const findHighestSum = (arr, nos) => {
    if (arr.length < nos) return null;
    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < nos; i++) {
        tempSum += arr[i]
    }
    maxSum = tempSum;
    if (arr.length === nos) return maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + a[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}