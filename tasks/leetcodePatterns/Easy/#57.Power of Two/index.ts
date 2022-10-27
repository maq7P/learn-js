//https://leetcode.com/problems/power-of-two/submissions/

function isPowerOfTwo(n: number): boolean {
  return (n > 0) && (n & (n - 1)) === 0
};