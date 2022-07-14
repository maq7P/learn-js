//https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
  const values: Record<string, number> = {}
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]

    if (typeof values[target - cur] === 'number') {
      return [values[target - cur], i]
    } else {
      values[cur] = i;
    }
  }


  return res;
}

console.log(twoSum([2,7,11,15], 9))