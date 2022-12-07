"use strict";
//https://leetcode.com/problems/monotonic-array/
function isMonotonic(nums) {
    let isIncrease = false, isDecrese = false;
    for (let i = 0; i < nums.length; i++) {
        let [first, second] = [nums[i], nums[i + 1]];
        if (first < second)
            (isIncrease = true);
        if (first > second)
            (isDecrese = true);
        if (isIncrease && first > second) {
            return false;
        }
        if (isDecrese && first < second) {
            return false;
        }
    }
    return true;
}
;
// console.log(isMonotonic([6,5,4,4]));
// console.log(isMonotonic([2,2,2,1,4,5]));
