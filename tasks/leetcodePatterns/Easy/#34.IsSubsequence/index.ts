//https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {

  let temp = 0
  let checker = []

  for(let c of t){
    if(c === s[temp]){
      checker.push(c)
      temp++
    }
  }

  return s === checker.join("")

}

console.log(isSubsequence("axc", "ahbgdc"));


