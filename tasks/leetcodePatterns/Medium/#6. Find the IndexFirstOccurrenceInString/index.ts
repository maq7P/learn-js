//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

//TODO: re
// need to control previously simbol, how in example
function strStr(haystack: string, needle: string): number {
  const lh = haystack.length;
  const ln = needle.length;

  for(let i = 0; i < (lh - ln + 1); i++){
    if(haystack.slice(i, i + ln) === needle){
      return i
    }
  }

  return -1
};

console.log(strStr("mississippi", "issip"));

console.log(strStr("sadbutsad", "sad"));
