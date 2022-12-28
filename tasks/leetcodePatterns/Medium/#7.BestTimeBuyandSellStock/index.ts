//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function isDecrese(nums: number[]): boolean {
  let isDecrese = false

  for(let i = 0; i < nums.length; i++){  
    let [first, second] = [nums[i], nums[i + 1]]

    if(first > second) (isDecrese = true)

    if(first < second){
      return false
    }
  }
  
  return true
};

function maxProfitPrices(prices: number[]): number {

  let l = 0, r = prices.length - 1
  let min = prices[l], max = prices[r];

  let isDecresePrices = isDecrese(prices)
  
  while(l < r){
    l++
    r--
    
    prices[l] < min && (min = prices[l])
    prices[r] > max && (max = prices[r])
  }
  
  return isDecresePrices ? 0 : max - min
};
console.log(maxProfitPrices([7,1,5,3,6,4]));
console.log(maxProfitPrices([7,6,4,3,1]));
console.log(maxProfitPrices([1,2]));
console.log(maxProfitPrices([2,4,1]));