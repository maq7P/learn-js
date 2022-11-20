"use strict";
//https://leetcode.com/problems/max-consecutive-ones/
function findMaxConsecutiveOnesDp(nums) {
    const dp = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            dp[i + 1] = dp[i] + nums[i];
        }
    }
    console.log(dp);
    return 0;
}
;
findMaxConsecutiveOnesDp([1]);
