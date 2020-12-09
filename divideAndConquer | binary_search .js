// 1,2,3,5,8,9,11,12
const getPosition = (arr,element) => {
    let min = 0;
    let max = arr.length-1;
    while(min<=max) {
        let middle = Math.floor(min+max/2);
        if(arr[middle]<element) {
            min = middle+1;
        } else if(arr[middle]>element) {
            max = middle-1;
        } else {
            return middle;
        }
    }
}