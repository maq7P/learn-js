//https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
  const d1: Record<string, string> = {}, d2: Record<string, string> = {}

  for(let i = 0; i < s.length; i++){
    const sChar = s[i]
    const tChar = t[i]

    if(sChar in d1 && d1[sChar] !== tChar) return false
    if(tChar in d2 && d2[tChar] !== sChar) return false

    d1[sChar] = tChar
    d2[tChar] = sChar
  }

  return true
};

