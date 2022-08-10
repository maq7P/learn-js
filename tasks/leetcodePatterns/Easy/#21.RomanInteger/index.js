"use strict";
//https://leetcode.com/problems/roman-to-integer/
const GRADES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
function romanToInt(s) {
    let result = 0, current, previous = 0;
    for (const char of s.split("").reverse()) {
        current = +GRADES[char];
        if (current >= previous) {
            result += current;
        }
        else {
            result -= current;
        }
        previous = current;
    }
    return result;
}
;
console.log(romanToInt("MCMXCIV"));
