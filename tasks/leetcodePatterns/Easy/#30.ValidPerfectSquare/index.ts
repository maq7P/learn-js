//https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num: number): boolean {
  let left = 0
  let right = 30

  while(left <= right){
    let middle = Math.floor((right + left) / 2)

    const currentPower = 2 ** middle

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

console.log(isPerfectSquare(9))