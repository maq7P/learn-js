//https://leetcode.com/problems/binary-gap/

//TODO: not working, find error
function binaryGap(n: number): number {

  const binary = n.toString(2).split("")

  let maxGap = 0

  for(let i = 0; i < binary.length; i++){
    let bit = binary[i]

    if(bit === "1"){
      i++
      bit = binary[i]
      let gap = 0

      while(bit === "0"){
        if(i === binary.length - 1){
          gap = 0
          break;
        }
        console.log(bit);
        
        gap++
        i++
        bit = binary[i]
      }
      
      console.log("gap: ", gap);
      
      if(gap > 0 && gap + 1 > maxGap){
        maxGap = gap + 1
      }
    }
  }

  return maxGap
};

console.log(binaryGap(8));
console.log(binaryGap(6));


