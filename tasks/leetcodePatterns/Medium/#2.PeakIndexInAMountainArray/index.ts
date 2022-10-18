//https://leetcode.com/problems/peak-index-in-a-mountain-array/

function peakIndexInMountainArray(arr: number[]): number {
  
  let left = 0
  let right = arr.length - 1
  
  while(true){
    const mid = Math.floor((left + right)  / 2)
    
    if(arr[mid - 1] > arr[mid]){
      right = mid - 1
      continue
    }

    if(arr[mid + 1] > arr[mid]){
      left = mid + 1
      continue
    }

    return mid
  }

};

console.log(peakIndexInMountainArray([13,25,38,55,58,75,85,88,100,94,88,82,60,58,48,43,40,35,17,2]));
