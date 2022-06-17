"use strict";
//https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums) {
    let curSum = nums[0];
    let sum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        curSum = Math.max(curSum + num, num);
        sum = Math.max(curSum, sum);
    }
    return sum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6 -> [4,-1,2,1]
