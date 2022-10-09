//https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */

const nums = [0,1,0,3,12]

function moveZeroes(nums: number[]): void {
  const numsWithoutZero: number[] = [];
  let zeroCount = 0

  for(let i = 0; i < nums.length; i++){
    nums[i] === 0 ? (zeroCount++) : (numsWithoutZero.push( nums[i]))
  }

  const numsWithZero = [...numsWithoutZero, ...Array(zeroCount).fill(0)]

  for(let i = 0; i < nums.length; i++){
    nums[i] = numsWithZero[i]
  }
};

moveZeroes(nums)

console.log(nums)