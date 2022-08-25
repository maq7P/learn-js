//https://leetcode.com/problems/find-the-difference/

function findTheDifference(s: string, t: string): string {
  const hash: Record<string, number> = {}

  for(let c of t){
    hash[c] ? (hash[c]++) : (hash[c] = 1)
  }

  for(let c of s){
    if(hash[c]){
      hash[c]--
    }
  }

  for(let key in hash){
    if(hash[key]){
      return key
    }
  }

  return ""
};

findTheDifference("abcde", "abcdee")
