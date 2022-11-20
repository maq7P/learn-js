//https://leetcode.com/problems/longest-continuous-increasing-subsequence/

function findLengthOfLCIS(nums: number[]): number {

  let dp = Array(nums.length + 1).fill({len: 0, val: 0})

  for(let i = 0; i < nums.length; i++){
    dp[i + 1] = {
      len: nums[i] > dp[i].val ? dp[i].len + 1 : 1, 
      val: nums[i]
    }
  }
    
  return Math.max(...(dp.map(item => item.len)))
};

findLengthOfLCIS([1,5,10,4,2])
findLengthOfLCIS([1,3,5,4,7])
findLengthOfLCIS([2,1,3])