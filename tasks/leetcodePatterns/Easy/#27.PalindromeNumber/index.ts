function isPalindromeNumber(x: number): boolean {
  if(x < 0) return false;

  let palindromeNum: number = 0
  let copyX = x

  while(copyX) {
    palindromeNum = palindromeNum * 10 + (copyX % 10)
    copyX = Math.floor(copyX / 10)
  }

  return palindromeNum === x
}