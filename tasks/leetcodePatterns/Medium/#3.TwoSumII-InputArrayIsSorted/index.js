"use strict";
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum2(numbers, target) {
    const hash = {};
    for (let i = 0; i < numbers.length; i++) {
        if (hash[numbers[i]] !== undefined) {
            return [hash[numbers[i]], i];
        }
        hash[target - numbers[i]] = i + 1;
    }
    return [];
}
;
console.log(twoSum2([2, 7, 11, 15], 9));
