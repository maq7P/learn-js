//https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */

const nums1 = [0,1,0,3,12]
const nums2 = [1, 2]

function moveZeroes2(nums: number[]): void {

  let temp = 0;

  for(let i = 0; i < nums.length; i++){

    if(nums[i] != 0){
      [nums[temp], nums[i]] = [nums[i], nums[temp]]
      temp++
    }
  }
}

moveZeroes2(nums1)
moveZeroes2(nums2)

console.log(nums1)
console.log(nums2)