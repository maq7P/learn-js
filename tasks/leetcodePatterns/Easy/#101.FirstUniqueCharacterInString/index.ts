//https://leetcode.com/problems/first-unique-character-in-a-string/

function firstUniqChar(s: string): number {

  const hash: any = {}

  let max = 0

  for(let c of s){
    for(let i = 0; i <= max; i++){
      if(hash[i] === c){
        hash[i + 1]?.length ? hash[i + 1].push(c) : hash[i + 1] = [c]
      } else {
        hash[i]?.length ? hash[i].push(c) : hash[i] = [c]
      }
    }
  }

  console.log(hash);

  return 0
  
};

firstUniqChar("leetcode")

