"use strict";
//https://leetcode.com/problems/majority-element/
function majorityElement(nums) {
    const hash = {};
    for (let num of nums) {
        hash[num] ? hash[num]++ : hash[num] = 1;
    }
    for (let key in hash) {
        if (hash[key] > nums.length / 2)
            return +key;
    }
    return NaN;
}
;
