//https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num: number): boolean {
  if(num === 1) return true

  let left = 0, right = Math.floor(num / 2);

  while(left <= right){
    let middle = Math.floor((right - left) / 2) + left
    const currentPower = middle * middle

    if(num === currentPower) return true

    if(num > currentPower){
      left = middle + 1
    }

    if(num < currentPower){
      right = middle - 1
    }
  }

  return false
}

console.log(isPerfectSquare(1))