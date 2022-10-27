"use strict";
//https://leetcode.com/problems/backspace-string-compare/
function backspaceCompare(s, t) {
    const typing = (word) => {
        const stack = [];
        for (let char of word) {
            if (char === "#") {
                stack.pop();
            }
            else
                stack.push(char);
        }
        return stack.join("");
    };
    return typing(s) === typing(t);
}
;
console.log(backspaceCompare("ab#c", "ad#c") === true);
console.log(backspaceCompare("ab##", "c#d#") === true);
console.log(backspaceCompare("a#c", "b") === false);
