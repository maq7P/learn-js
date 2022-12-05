//https://leetcode.com/problems/sort-array-by-parity/

//49%
function sortArrayByParity(nums: number[]): number[] {
  const res = []

  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      res.push(nums[i])
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 1){
      res.push(nums[i])
    }
  }

  return res
};  