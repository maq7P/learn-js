"use strict";
function isPalindrome(x) {
    if (x < 0)
        return false;
    let palindromeNum = 0;
    let copyX = x;
    while (copyX) {
        palindromeNum = palindromeNum * 10 + (copyX % 10);
        copyX = Math.floor(copyX / 10);
        console.log(copyX);
    }
    console.log(palindromeNum);
    return palindromeNum === x;
}
;
isPalindrome(0);
