//https://leetcode.com/problems/plus-one/

function plusOneBestPractice(digits: number[]): number[] {

  let carry = 1

  for(let i = digits.length - 1; i >= 0; i--){
    const cur = digits[i] + carry

    digits[i] = cur % 10
    carry = Math.floor(cur / 10)

  }
  
  // unhift working more faster than destructuring
  // with unshift 73 ms
  // with destructuring 120ms

  // return carry ? [carry, ...digits] : digits
  carry ? digits.unshift(carry) : digits

  return digits
}

console.log(plusOneBestPractice([9]));