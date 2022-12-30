//https://leetcode.com/problems/binary-gap/

function binaryGap(n: number): number {

  const binary = n.toString(2).split("")

  let gaps = []
  let maxGap = 0

  for(let i = 0; i < binary.length; i++){
    const bit = binary[i]
    
    if(bit === "0") continue

    gaps.push(i)
  }

  for(let i = 0; i < gaps.length - 1; i++){
    const diff = gaps[i + 1] - gaps[i]

    maxGap = Math.max(diff, maxGap)
  }

  return maxGap
};

console.log(binaryGap(8));
console.log(binaryGap(6));


