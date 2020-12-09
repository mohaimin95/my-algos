function isBalanced(s) {
    const stack = [];
    const brackets = {
        "{": "}",
        "(": ")",
        "[": "]",
    }
    const reverseBrackets = {};
    for (let bracket in brackets) {
        reverseBrackets[brackets[bracket]] = bracket;
    }
    for (let l of s) {
        if (l in brackets) {
            stack.push(l);
        } else if (l in reverseBrackets) {
            if (stack[stack.length - 1] === reverseBrackets[l]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

isBalanced("{})");