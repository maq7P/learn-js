"use strict";
//https://leetcode.com/problems/maximum-average-subarray-i/
function findMaxAverage2(nums, k) {
    const calcAvg = (nums) => {
        return nums.reduce((acc, num) => (acc += num), 0) / nums.length;
    };
    let count = 0;
    let answer = -Infinity;
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        count++;
        cur += nums[i];
        if (count === k) {
            answer = Math.max(answer, cur / k);
        }
        if (count > k) {
            cur -= nums[i - k];
            answer = Math.max(answer, cur / k);
        }
    }
    return answer;
}
console.log(findMaxAverage2([1, 12, -5, -6, 50, 3], 4));
