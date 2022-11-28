//https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(words: string[]): string {
  if (!words[0] || words.length == 1) return words[0] || "";
  
  let res = "";

  for(let i = 0; i < words[0].length; i++){
    const char = words[0][i]

    for(let word of words){
      if(word[i] !== char){
        return res
      }
    }

    res += char
  }

  return res
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
