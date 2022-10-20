"use strict";
//https://leetcode.com/problems/add-digits/
// Если число разложить: num = 10^n * x1 + 10^(n-1) * x2 + ...
// 10 в любой степени по модулю 9 вернет 1 =>
// num % 9 = (x1 + x2 + ...) % 9 и дальше такая же схема, если число больше 10, оно раскладывается
function addDigits2(num) {
    return num % 9;
}
console.log(addDigits2(38));
