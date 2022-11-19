"use strict";
//https://leetcode.com/problems/max-consecutive-ones/
function findMaxConsecutiveOnes(nums) {
    let max = 0, cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            cur = 0;
            continue;
        }
        cur += nums[i];
        if (cur > max) {
            max = cur;
        }
    }
    return max;
}
;
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
findMaxConsecutiveOnes([1, 1, 0, 1]);
