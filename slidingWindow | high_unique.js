// hellothereqwertyui
const getHighUnique = str => {
    let obj = {};
    let max = "";
    let temp = "";
    for(let letter of str) {
         if(!(letter in obj)) {
             obj[letter] = 1;
             temp += letter;
             if(temp.length>=max.length) {
                 max = temp;
             }
         } else {
            if(temp.length>=max.length) {
                max = temp;
            }
            obj = {[letter]:1};
            temp = letter;
         }
    }
    return max;
}