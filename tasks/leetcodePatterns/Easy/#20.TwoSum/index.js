"use strict";
//https://leetcode.com/problems/two-sum/
function twoSum(nums, target) {
    const values = {};
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (typeof values[target - cur] === 'number') {
            return [values[target - cur], i];
        }
        else {
            values[cur] = i;
        }
    }
    return res;
}
console.log(twoSum([2, 7, 11, 15], 9));
