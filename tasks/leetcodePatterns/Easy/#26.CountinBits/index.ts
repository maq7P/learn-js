//https://leetcode.com/problems/counting-bits/

function countBits(n: number): number[] {

  let arrBinaryOfN = [];
  for(let i = 0; i <= n; i++){
    arrBinaryOfN.push(
      (i + i)
        .toString(2)
        .split("")
        .reduce((count, number) => {
          if(number === "1"){
            count++;
          }

          return count
        }, 0)
    )
  }

  return arrBinaryOfN;
};