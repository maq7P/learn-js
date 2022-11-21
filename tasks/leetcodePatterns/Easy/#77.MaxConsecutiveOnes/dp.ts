//https://leetcode.com/problems/max-consecutive-ones/

function findMaxConsecutiveOnesDp(nums: number[]): number {
  const dp = Array(nums.length + 1).fill(0)
  
  for(let i = 0; i < nums.length; i++){
    nums[i] && (dp[i + 1] = dp[i] + nums[i])
  }
  
  return Math.max(...dp)
};

findMaxConsecutiveOnesDp([1])