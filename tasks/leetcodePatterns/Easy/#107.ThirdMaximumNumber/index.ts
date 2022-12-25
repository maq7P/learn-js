//https://leetcode.com/problems/third-maximum-number/
//re

function thirdMax(nums: number[]) {
  let tempArr = new Set(nums.sort((a,b) => b-a));
  let newArr = Array.from(tempArr);

  return newArr[2] ?? newArr[0];
};