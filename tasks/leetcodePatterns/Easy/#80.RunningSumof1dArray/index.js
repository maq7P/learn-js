"use strict";
//https://leetcode.com/problems/running-sum-of-1d-array/
function runningSum(nums) {
    let prevSum = nums[0], res = [];
    for (let i = 1; i <= nums.length; i++) {
        res.push(prevSum);
        prevSum += nums[i];
    }
    return res;
}
;
