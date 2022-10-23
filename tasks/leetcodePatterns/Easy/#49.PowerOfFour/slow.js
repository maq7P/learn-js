"use strict";
//dumn solution (faster 14%)
function isPowerOfFourSlow(n) {
    let power = 0;
    while (true) {
        const num = Math.pow(4, power);
        if (num === n)
            return true;
        if (num > n)
            return false;
        power++;
    }
}
;
