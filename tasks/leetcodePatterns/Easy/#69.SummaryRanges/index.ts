//https://leetcode.com/problems/summary-ranges/

function summaryRanges(nums: number[]): string[] {

  let res = [], start = nums[0], end = nums[0]

  for(let i = 1; i <= nums.length; i++){
    if(nums[i] - end === 1){
      end = nums[i]
    } else {
      start === end 
        ? res.push(start + "")
        : res.push(start + "->" + end)

      start = end = nums[i]
    }
  }


  return res

};
