"use strict";
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    const res = [];
    for (let candy of candies) {
        res.push(candy + extraCandies > max);
    }
    return res;
}
;
