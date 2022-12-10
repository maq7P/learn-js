//https://leetcode.com/problems/squares-of-a-sorted-array/

function sortedSquares(nums: number[]): number[] {
  return nums.map(item => item ** 2).sort((a,b) => a - b)
};