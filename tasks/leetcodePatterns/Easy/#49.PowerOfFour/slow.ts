
//dumn solution (faster 14%)
function isPowerOfFour(n: number): boolean {
  let power = 0
  
  while(true){
      const num = 4 ** power
      
      if(num === n) return true
      if(num > n) return false

      power++
  }
};