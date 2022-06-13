"use strict";
//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// when given range from 1 to N need use CYCLING CORT!
//its bed solution
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
function findDisappearedNumbersWithCycleSort(nums) {
    let idx = 0;
    while (idx < nums.length) {
        const sortIdx = nums[idx] - 1;
        if (sortIdx === idx) {
            idx++;
            continue;
        }
        [nums[sortIdx], nums[idx]] = [nums[idx], nums[sortIdx]];
    }
    const miss = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            miss.push(i + 1);
        }
    }
    return miss;
}
//[5,6]
console.log(findDisappearedNumbersWithCycleSort([4, 3, 2, 7, 8, 2, 3, 1]));
//2
console.log(findDisappearedNumbers([1, 1]));
