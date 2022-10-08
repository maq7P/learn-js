//https://leetcode.com/problems/maximum-average-subarray-i/

function findMaxAverage(nums: number[], k: number): number {
  const calcAvg = (nums: number[]) => {
    return nums.reduce((acc, num) => (acc += num), 0) / nums.length
  }

  let answer = -Infinity
  let queue: number[] = []

   for(let num of nums){
     queue.push(num)

     if(queue.length === k){
       answer = Math.max(calcAvg(queue), answer)
       queue.shift()
     }
   }

  return answer
}

console.log(findMaxAverage(
  [1,12,-5,-6,50,3], 4)
)
