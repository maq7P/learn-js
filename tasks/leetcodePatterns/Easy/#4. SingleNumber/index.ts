//https://leetcode.com/problems/single-number/


//js solution
function singleNumberJSSolution(nums: number[]): number {
  return  [...new Set(nums)][0]
}

//native solution
// Решение осуществляется с помощью логического сложения XOR:
// 0101
// 0101
// _____
// 0000

//При операции XOR равные числа взаимно устроняться

function singleNumber(nums: number[]): number {
  let mask: number = 0;

  for(let item of nums){
    mask ^= item
  }

  return mask
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))