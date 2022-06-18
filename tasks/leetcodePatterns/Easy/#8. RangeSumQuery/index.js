"use strict";
//https://leetcode.com/problems/range-sum-query-immutable/
class NumArray {
    constructor(nums) {
        let sums = [];
        let curSum = 0;
        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i];
            sums.push(curSum);
        }
        this.sums = sums;
    }
    sumRange(left, right) {
        if (left === 0) {
            return this.sums[right];
        }
        return this.sums[right] - this.sums[left - 1];
    }
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
