"use strict";
//https://leetcode.com/problems/valid-parentheses/
function isValid(s) {
    const pattern = {
        "{": "}",
        "(": ")",
        "[": "]",
        // "]": "[",
        // ")": "(",
        // "}": "{"
    };
    const stack = [];
    for (let c of s) {
        if (c === pattern[stack[stack.length - 1]]) {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    }
    console.log(stack);
    return !stack.length;
}
;
// console.log(isValid("()"));
// console.log(isValid("(]"));
console.log(isValid("(){}}{"));
