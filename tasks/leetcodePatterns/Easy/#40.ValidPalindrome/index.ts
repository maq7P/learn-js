function isPalindrome(s: string) {
  let right = s.length - 1, left = 0;

  for (let i = 0; i < s.length - 1; i++) {
      if(!(/[a-z0-9]/i.test(s[left]))) {
          left++
          continue
      }
      if(!(/[a-z0-9]/i.test(s[right]))) {
          right--
          continue
      }

      if (s[left].toLowerCase() !== s[right].toLowerCase())
          return false;

      left++;
      right--;
  }

  return true;
}

// console.log(isPalindrome(""))
// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome(" "))
// console.log(isPalindrome("a.b,."))
console.log(isPalindrome("ab_a"))
console.log(isPalindrome("0P"))
