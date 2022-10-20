//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//with convert to string 

//faster 20% than other solution
function findNumbers1(nums: number[]): number {
    
  let count = 0
  for(let num of nums){
      (num).toString().length % 2 === 0 && (count++)
  }   
  
  return count
};