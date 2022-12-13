"use strict";
function numJewelsInStones(jewels, stones) {
    let hashJewels = new Set();
    for (let jewel of jewels) {
        hashJewels.add(jewel);
    }
    let res = 0;
    for (let stone of stones) {
        if (hashJewels.has(stone)) {
            res++;
        }
    }
    return res;
}
;
