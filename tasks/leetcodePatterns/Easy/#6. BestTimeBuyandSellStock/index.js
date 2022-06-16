"use strict";
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices) {
    let [maxProfit, min] = [0, 0];
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        maxProfit = Math.max(maxProfit, price - min);
        min = Math.min(min, price);
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
