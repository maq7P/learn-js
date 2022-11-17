"use strict";
//https://leetcode.com/problems/reverse-vowels-of-a-string/
const vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];
function reverseVowels(s) {
    let left = 0, right = s.length - 1;
    const sArr = s.split("");
    while (left <= right) {
        const isCurLeftVowels = vowels.indexOf(sArr[left]) !== -1;
        const isCurRightVowels = vowels.indexOf(sArr[right]) !== -1;
        if (isCurLeftVowels && isCurRightVowels) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
            continue;
        }
        if (isCurLeftVowels) {
            right--;
            continue;
        }
        if (isCurRightVowels) {
            left++;
            continue;
        }
        left++;
        right--;
    }
    return sArr.join("");
}
;
console.log(reverseVowels("hello"));
