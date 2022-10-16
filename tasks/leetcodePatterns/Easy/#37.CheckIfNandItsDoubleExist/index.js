"use strict";
//https://leetcode.com/problems/check-if-n-and-its-double-exist/
function checkIfExist(arr) {
    const evenHash = {};
    let countOfZero = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 && (evenHash[arr[i] / 2] = i);
        arr[i] === 0 && countOfZero++;
    }
    if (countOfZero < 2)
        delete evenHash[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in evenHash)
            return true;
    }
    return false;
}
;
console.log(checkIfExist([10, 2, 5, 3, 0]));
console.log(checkIfExist([0, 0]));
console.log(checkIfExist([0]));
