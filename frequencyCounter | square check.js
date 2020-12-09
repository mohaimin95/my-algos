//[1,2,3] [4,1,27] === true
//[5,2,3] [4,10,9] === false;
//[1,2,3,1] [9,1,9] === false;
const frequencyCounterApproach = (arr1,arr2) => {
    if(arr1.length!==arr2.length) return false;
    let frequencyCounterForArr1 = {};
    let frequencyCounterForArr2 = {};

    for(let element of arr1) {
        frequencyCounterForArr1[element] = (frequencyCounterForArr1[element] || 0) + 1;
    }
    
    for(let element of arr2) {
        frequencyCounterForArr2[element] = (frequencyCounterForArr2[element] || 0) + 1;
    }
    for(let key in frequencyCounterForArr1) {
        if(!(key**key in frequencyCounterForArr2)) {
            return false;
        }
        if(frequencyCounterForArr1[key]!==frequencyCounterForArr2[key**key]) {
            return false;
        }
    }
    return true;
} 