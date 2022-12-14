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

  for(let key in hashRansomNote){
    if(!hashMagazine[key] || +hashMagazine[key] < +hashRansomNote[key]){
      return false
    }
  }

  return true
};

// canConstruct("a", "b")
// canConstruct("aa", "aab")
canConstruct("az", "ab")
// console.log(canConstruct("ihgg", "ch"));
// canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")