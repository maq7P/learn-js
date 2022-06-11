"use strict";
//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// when given range from 1 to N need use CYCLING CORT!
function findDisappearedNumbers(nums) {
    const setNums = new Set(nums);
    const sortedWithCyclingSort = [];
    for (let item of setNums) {
        sortedWithCyclingSort[item - 1] = item;
    }
    const res = [];
    for (let i = 0; i < sortedWithCyclingSort.length; i++) {
        !sortedWithCyclingSort[i] && res.push(i + 1);
    }
    if (!res.length) {
        res.push(sortedWithCyclingSort.length + 1);
    }
    return res;
}
//[5,6]
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
//2
console.log(findDisappearedNumbers([1, 1]));
