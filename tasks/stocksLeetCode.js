/*
#1 
    There are array of stocks prices. It's necessary maximum pofit purchase-sale
    - In one day there is an opportunity to buy or sell
    - Length of array: 1 < prices.length <= 3*10⁴

    input: [7,1,5,3,6,4]
    output: 7

    input: [7,6,5,4,3,2]
    output: 0

*/

// memory O(1)
// speed O(n)

const exPrices1 = [7,1,5,3,6,4];
const exPrices2 = [7,6,5,4,3,2];

const maxProfit = (prices) => {
    let prfit = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            prfit += prices[i] - prices[i - 1]
        }
    }
}
maxProfit()

/*
#2
 (Task about extremum function)

 There are array of stocks prices. It's necessary maximum pofit purchase-sale
    - there is an opportunity to buy or sell on of period
    - Length of array: 1 < prices.length <= 3*10⁴

    input: [7,1,5,3,6,4]
    output: 5

    input: [7,6,5,4,3,2]
    output: 0

*/

// memory O(1)
// speed O(n)

const exPrices1 = [7,1,5,3,6,4];
const exPrices2 = [7,6,5,4,3,2];

const maxProfitWithOnDeal = (prices) => {

    let minPrice = prices[0];
    let maxProfi = 0;
    
    for(let i = 0; i < prices.length; i++){
        const cur = prices[i];
        
        minPrice < cur && (minPrice = cur);
        
        (maxProfit < cur - minPrice) && (maxProfit = cur - minPrice)
    }

    return maxProfi
}
