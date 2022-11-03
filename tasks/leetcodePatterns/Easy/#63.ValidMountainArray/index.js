"use strict";
//https://leetcode.com/problems/valid-mountain-array/
function validMountainArray(arr) {
    if (arr.length < 3)
        return false;
    let left, right;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            left = i;
        }
    }
    for (let i = arr.length - 2; i < 0; i++) {
        if (arr[i] < arr[i - 1]) {
            right = i;
        }
    }
    // for(let i = 1; i < arr.length - 1; i++){    
    //   if(arr[i] >  arr[i - 1]){
    //     left = i
    //   }
    //   if(arr[arr.length - i] < arr[arr.length - i - 1]){
    //     right = i
    //   }
    // }
    console.log(left);
    console.log(right);
    console.log("_______--");
    return left === right;
}
;
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, -5, -10, -5, 0]));
console.log(validMountainArray([1, 3, 2]));
