"use strict";
//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
function removeDuplicates(s) {
    const stack = [];
    for (let c of s) {
        stack[stack.length - 1] === c
            ? stack.pop()
            : stack.push(c);
    }
    return stack.join("");
}
;
console.log(removeDuplicates("azxxzy"));
