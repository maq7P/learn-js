//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicatesSorted(nums: number[]): number {
  
  let fixPointer = 0, searchPointer = 0

  while(searchPointer < nums.length){
    if(nums[searchPointer] > nums[fixPointer]){
      fixPointer++
      [nums[searchPointer], nums[fixPointer]] = [nums[fixPointer], nums[searchPointer]]
      searchPointer = fixPointer
      continue
    }

    searchPointer++
  }

  return ++fixPointer
};

//[0,0,1,1,1,2,2,3,3,4]
const test1 = [0,0,1,1,1,2,2,3,3,4]
console.log(test1);

console.log(removeDuplicatesSorted(test1));

console.log(test1);
