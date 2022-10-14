"use strict";
//https://leetcode.com/problems/is-subsequence/
function isSubsequenceWithStack(s, t) {
    let stack = Array.from(s).reverse();
    for (let c of t) {
        if (c === stack[stack.length - 1]) {
            stack.pop();
        }
    }
    console.log(stack);
    return !stack.length;
}
console.log(isSubsequenceWithStack("abc", "ahbgdc"));
