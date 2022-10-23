//https://leetcode.com/problems/power-of-four/

// test that number is deree of two:
// n & (n - 1) === 0
// example:
// 1000 & (1000 - 0001) = 1000 & 0111 = 0 


// faster than 35% (O(1) O(1))

function isPowerOfFour2(n: number): boolean {
  if(!(n > 0 && (n & (n - 1)) === 0)){
    return false
  }
  const sq = Math.round(Math.sqrt(n))

  return sq * sq === n
};

// faster than 35% (O(1) O(1))

function isPowerOfFour3(n: number): boolean {
  if(n === 1) return true
    
  if((n & (n - 1)) === 0 && ((n).toString(2).length) % 2 === 1 && n > 0){
    return true
  }
    
  return false
};
