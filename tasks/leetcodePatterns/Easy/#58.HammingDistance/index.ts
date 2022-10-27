//https://leetcode.com/problems/hamming-distance/

function hammingDistance(x: number, y: number): number {
  let count = 0
    
  for(let d of ((x ^ y)).toString(2)){
      if(d === "1") {count++}
  }
  
  return count
};

console.log(hammingDistance(3,1));
