//https://leetcode.com/problems/reverse-string/

function reverseString(s: string[]): void {

  let left = 0
  let right = s.length - 1

  while(right >= left){
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
};