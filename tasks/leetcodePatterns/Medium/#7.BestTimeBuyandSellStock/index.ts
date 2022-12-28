//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfitPrices(prices: number[]): number {

  let min = -Infinity, maxProfit = +Infinity;

  for(let p of prices){
    min = Math.min(min, p)
    maxProfit = Math.max(maxProfit, p - min)
  }
  
  return maxProfit
};

console.log(maxProfitPrices([7,1,5,3,6,4]));
console.log(maxProfitPrices([7,6,4,3,1]));
console.log(maxProfitPrices([1,2]));
console.log(maxProfitPrices([2,4,1]));