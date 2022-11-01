//https://leetcode.com/problems/verifying-an-alien-dictionary/

function isAlienSorted(words: string[], order: string): boolean {
    const orderPrice: Record<string, number> = {}

    for(let i = 0; i < order.length; i++){
      orderPrice[order[i]] = i
    }

    let prevPrice = 0
    for(let word of words){

      let curPrice = 0
      for(let char of word){
        curPrice += orderPrice[char]
      }

      if(curPrice < prevPrice){
        return false
      }

      prevPrice = curPrice
    }

    return true
};

console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["kuvp","q"],"ngxlkthsjuoqcpavbfdermiywz"));