//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//with convert to string 

//faster 80% than other solution
function findNumbers2(nums: number[]): number {
    
  let count = 0

  for(let num of nums){
    let d = 10
    let curCountOfNum = 1

    while(Math.floor(num / d) >= 1){
      curCountOfNum++
      d *= 10
    }    

    curCountOfNum % 2 === 0 && (count++)
  }   
  
  return count
};

console.log(findNumbers2([102, 10002]))