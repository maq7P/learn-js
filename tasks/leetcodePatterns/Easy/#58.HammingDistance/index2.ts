//https://leetcode.com/problems/hamming-distance/

function hammingDistance(x: number, y: number): number {   
  let count = 0 
  
  while(x || y){
    if((x & 1) !== (y & 1)){
      count++
    }

    x = x >> 1
    y = y >> 1
  }

  return count
};

console.log(hammingDistance(3,1));