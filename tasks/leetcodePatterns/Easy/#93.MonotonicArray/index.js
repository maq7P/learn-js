"use strict";
//https://leetcode.com/problems/monotonic-array/
function isMonotonic(nums) {
    let isIncrease = false;
    let isDecrese = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1])
            (isIncrease = true);
        if (nums[i] > nums[i + 1])
            (isDecrese = true);
        if (isIncrease && nums[i] > nums[i + 1]) {
            return false;
        }
        if (isDecrese && nums[i] < nums[i + 1]) {
            return false;
        }
    }
    return true;
}
;
// console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([2, 2, 2, 1, 4, 5]));
