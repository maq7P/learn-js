//https://leetcode.com/problems/relative-sort-array/

//TODO: awful solution, need find better solution
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const sortByArr2 =  arr1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));

  const rest = []
  while(arr2.indexOf(sortByArr2[0]) === -1){
    rest.push(sortByArr2.shift() || 0)
  }
  
  return [...sortByArr2, ...rest.sort((a, b) => a - b)]
};