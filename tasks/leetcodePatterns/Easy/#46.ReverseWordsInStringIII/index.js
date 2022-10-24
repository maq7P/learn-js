"use strict";
//https://leetcode.com/problems/reverse-words-in-a-string-iii/
function reverseWords(s) {
    const res = [];
    for (let c of s.split(" ")) {
        const arr = c.split("");
        let left = 0, right = c.length - 1;
        while (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        res.push(arr.join(""));
    }
    return res.join(" ");
}
;
console.log(reverseWords("Let's take LeetCode contest"));
