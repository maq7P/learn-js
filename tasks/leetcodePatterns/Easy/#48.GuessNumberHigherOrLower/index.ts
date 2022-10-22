//https://leetcode.com/problems/guess-number-higher-or-lower/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (pick: number, guess = 5) => {
  if(pick === guess) return 0
  
  return pick > guess ? 1 : -1
}

function guessNumber(n: number): number {
  let left = 0
  let right = n

  while(left <= right){
    const mid = Math.floor((left + right) / 2)
    const guessCall = guess(mid)

    if(guessCall === 1){
      left = mid + 1
      continue
    } 

    if(guessCall === - 1){
      right = mid - 1
      continue
    }

    return mid
  }

  return left
};

console.log(guessNumber(10));
