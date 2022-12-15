//https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashRansomNote: any = {}
  const hashMagazine: any = {}

  for(let note of ransomNote){
    hashRansomNote[note] ? hashRansomNote[note]++ : hashRansomNote[note] = 1
  }
  for(let note of magazine){
    hashMagazine[note] ? hashMagazine[note]++ : hashMagazine[note] = 1
  }
  
  if(!Object.keys(hashRansomNote).length){
      return false
  }

  let count = 0

  for(let key in hashMagazine){
    if(!hashRansomNote[key]) continue

    if(hashMagazine[key] < hashRansomNote[key]){
      return false
    } else count++
  }

  return count > 0
};

canConstruct("a", "b")
canConstruct("aa", "aab")
// canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")