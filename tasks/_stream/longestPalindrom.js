const input1 = "babad"; // Output: 'bab' | "aba";
const input2 = "cbbd"; // Outupt: 'bb'
const input3 = "mississippississiississi"; // Outupt: 'ississi'
const input4 = "ac"; // Outupt: 'a' | 'c'

const longestPalindrome = function (s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i);
    let len2 = expandFromCenter(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }

  function expandFromCenter(s, L, R) {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }

  return s.substring(start, end + 1);
};

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input2));
console.log(longestPalindrome(input3));
console.log(longestPalindrome(input4));