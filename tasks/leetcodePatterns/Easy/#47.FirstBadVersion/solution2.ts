//https://leetcode.com/problems/first-bad-version/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// faster than 91.35%
var solution2 = function(isBadVersion: any) {

  return function(n: number): number {
      
    let left = 1
    let right = n

    while(left <= right){
      let mid = Math.floor((left + right) / 2)
      
      if(isBadVersion(mid)){
        right = mid - 1
      } else left = mid + 1
    }

    return left
  };
};

console.log(solution2((bad: number): boolean => bad >= 1)(5));