
//not so dumn solution (faster 82%)
function isPowerOfFourSlow(n: number): boolean {
  if(n < 1) return false

  if(n === 1) return true

  return isPowerOfFourSlow(n / 4)
}