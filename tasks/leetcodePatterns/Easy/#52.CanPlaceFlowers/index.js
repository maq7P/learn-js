"use strict";
//https://leetcode.com/problems/can-place-flowers/
function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (((flowerbed[i - 1] || 0) + flowerbed[i] + (flowerbed[i + 1] || 0)) === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n === 0;
}
;
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2)); // true
