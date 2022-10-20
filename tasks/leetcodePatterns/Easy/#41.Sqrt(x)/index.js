"use strict";
function mySqrt(x) {
    let left = 1, right = Math.floor(x / 2), mid = 1;
    while (left <= right) {
        mid = Math.floor(((left + right) / 2));
        const sq = mid * mid;
        if (sq === x)
            return mid;
        if (x > sq) {
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    return right;
}
;
console.log("255: ", mySqrt(255));
console.log("2: ", mySqrt(2));
console.log("3: ", mySqrt(3));
console.log("1: ", mySqrt(1));
console.log("5: ", mySqrt(5));
console.log("6: ", mySqrt(6));
console.log("7: ", mySqrt(7));
console.log("8: ", mySqrt(8));
console.log("9: ", mySqrt(9));
console.log("10: ", mySqrt(10));
console.log("17: ", mySqrt(17));
console.log("29792276: ", mySqrt(29792276));
