// mam -> mma === true
// cinema -> iceman === true
// azz -> zza === false
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyOfStr = {};

    for (let letter of str1) {
        frequencyOfStr1[letter] = (frequencyOfStr1[letter] || 0) + 1;
    }

    for (let letter of str2) {
        if (!frequencyOfStr[letter]) {
            return false;
        } else {
            frequencyOfStr[letter] -= 1
        }
    }
    return true;
}
isAnagram("Hello", "World")