//https://leetcode.com/problems/implement-strstr/

function strStr(haystack: string, needle: string): number {
  let res = -1;

  for (let i = 0; i < haystack.length - 1; i++) {
    let curHaystackIdx = i;
    let curNeedleIdx = 0;


    while (haystack[curHaystackIdx] && needle[curNeedleIdx] && haystack[curHaystackIdx] === needle[curNeedleIdx]) {
      curHaystackIdx++;
      curNeedleIdx++;
    }

    if (needle.length === curNeedleIdx)
      res = i

  }

  return res;
};

console.log(strStr("hello", "llo"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("keesshakek", "kek"))