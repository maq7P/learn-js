/*
The input is an array that contains an array of currency, 
"sell" or "buy" operations, and values. At the exit, the amount of the sale 
of the purchase of the currency is expected
*/

const input = [
    ['usd', 'buy', 2000],
    ['rub', 'buy', 2540],
    ['eur', 'sell', 12000],
    ['uah', 'sell', 500],
    ['gbp', 'sell', 1000],
    ['eur', 'sell', 100],
    ['eur', 'sell', 1000],
    ['usd', 'sell', 20000]
];

const out = {
    usd: [0, 2000],
    rub: [2540, 0],
    eur: [0, 13100],
    uah: [0, 500],
    gbp: [0, 1000]
}

const reduceCurrencyOperations = (currencies) => {
    const res = {};

    for(let i = 0; i < currencies.length; i++){
        const [currency, operation, val] = currencies[i];
        !res[currency] && (res[currency] = [0,0]);
        
        switch(operation){
            case 'buy':{
                res[currency][0] += val;
                break;
            }
            case 'sell':{
                res[currency][1] += val ;
                break;
            }
            default: continue;
        }
    }

    return res
}

console.log(reduceCurrencyOperations(input));

//solution from reduce

const result = input.reduce((acc, item) => {
    const [currency, operation, val] = item;
    !acc[currency] && (acc[currency] = [0, 0])
    operation === 'buy' 
        ? (acc[currency][0] += val)
        : (acc[currency][1] += val)

    return acc
}, {});

console.log(result)
