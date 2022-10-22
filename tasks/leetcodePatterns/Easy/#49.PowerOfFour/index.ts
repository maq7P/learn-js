//https://leetcode.com/problems/power-of-four/

function isPowerOfFour(n: number): boolean {
  return !!(((n % 10 === 6 || n % 10 === 4) 
    && (n < 4 ** 2 ? n % 4 === 0 : n % 4 ** 2 === 0)) || n === 1)
};