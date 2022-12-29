//https://leetcode.com/problems/product-of-array-except-self/
//TODO: with devision operatror (need without)

function productExceptSelf(nums: number[]): number[] {
  let power = 0;
  const zeros: any = {};

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      zeros[i] = true
    } else {
      if(power === 0){
        power = 1
      }

      power *= nums[i]
    }
  }

  const ans = []

  for(let i = 0; i < nums.length; i++){
    if(Object.keys(zeros).length){
      zeros[i] ? (ans[i] = power) : (ans[i] = 0)
    } else {
      ans[i] = power/ nums[i]
    }
  }

  return ans
};