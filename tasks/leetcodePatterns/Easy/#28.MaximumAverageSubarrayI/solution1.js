"use strict";
//https://leetcode.com/problems/maximum-average-subarray-i/
function findMaxAverage(nums, k) {
    const calcAvg = (nums) => {
        return nums.reduce((acc, num) => (acc += num), 0) / nums.length;
    };
    let answer = -Infinity;
    let queue = [];
    for (let num of nums) {
        queue.push(num);
        if (queue.length === k) {
            answer = Math.max(calcAvg(queue), answer);
            queue.shift();
        }
    }
    return answer;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
