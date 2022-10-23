"use strict";
//not so dumn solution (faster 82%)
// linear space
function isPowerOfFourRecursion(n) {
    if (n < 1)
        return false;
    if (n === 1)
        return true;
    return isPowerOfFourRecursion(n / 4);
}
