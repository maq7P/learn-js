//https://leetcode.com/problems/valid-anagram/

//faster than 90.12%
function isAnagram(s: string, t: string): boolean {
  const sHash: Record<string, number> = {}
  
  for(let item of s){
    sHash[item] ? (sHash[item]++) : (sHash[item] = 1)
  }

  
  for(let item of t){
    if(!sHash[item]) return false
    sHash[item]--
  }
  
  for(let key in sHash){
    if(sHash[key]) return false
  }
  
  return true
};

console.log(isAnagram("anagram","nagaram"));

