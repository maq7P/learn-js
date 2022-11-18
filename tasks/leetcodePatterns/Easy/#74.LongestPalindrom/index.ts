//https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
  const counter: any = {}

  for(let c of s){
    counter[c] ? counter[c]++ : (counter[c] = 1)
  }

  let res = 0, wasOddNum = false

  for(let key in counter){
    const val = counter[key]
    
    val % 2 === 0 && (res += val)
    val % 2 === 1 && (res += val - 1) && (wasOddNum = true)
  }

  res += wasOddNum ? 1 : 0

  return res
};