//https://leetcode.com/problems/longest-palindrome/

function longestPalindrome(s: string): number {
  const counter: any = {}

  for(let c of s){
    counter[c] ? counter[c]++ : (counter[c] = 1)
  }

  console.log("counter: ", counter);
  
  let res = 0, maxOdd = 0

  for(let key in counter){
    const val = counter[key]

    val % 2 === 0 && (res += val)
    val % 2 === 1 && val > maxOdd && (maxOdd = val)
  }

  res += maxOdd

  return res
};