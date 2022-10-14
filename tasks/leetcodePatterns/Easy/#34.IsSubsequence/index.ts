//https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {

  let temp = 0
  let stack = []

  for(let c of t){
    if(c === s[temp]){
      stack.push(c)
      temp++
    }
  }

  return s === stack.join("")

}

console.log(isSubsequence("axc", "ahbgdc"));


