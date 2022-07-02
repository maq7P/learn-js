//https://leetcode.com/problems/find-smallest-letter-greater-than-target/

function nextGreatestLetter(letters: string[], target: string): string {
  let right = 0
  let left = letters.length - 1

  while(right <= left){
    let mid = left + Math.floor((right - left) / 2)

    if(letters[mid] > target){
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return letters[left % letters.length]

}