"use strict";
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
//classic solution with hash
function twoSumTwoPointers(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left <= right) {
        const curSum = numbers[left] + numbers[right];
        if (curSum === target)
            return [left + 1, right + 1];
        if (curSum > target) {
            right--;
        }
        else
            left++;
    }
    return [];
}
;
console.log(twoSumTwoPointers([2, 7, 11, 15], 9));
