"use strict";
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
//with convert to string 
function findNumbers1(nums) {
    let count = 0;
    for (let num of nums) {
        (num).toString().length % 2 === 0 && (count++);
    }
    return count;
}
;
