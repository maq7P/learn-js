// #1 ATM easy
//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10, 1

const availables = [100,50,20,10, 1];

//time complexity: O(n**2); //need try found O(log(n))
//memory compexity: O(1);
const getMoney = (amount) => {
    const result = [];
    
    if(amount < 0) result;

    for (let i = 0; i < availables.length; i++) {
        const available = availables[i];

        while(amount >= available){
            result.push(available);
            amount -= available;
        }
        
    }

    return result
}

console.log(getMoney(1123));
console.log(getMoney(1160));

// #2 ATM hard
//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes are set
// 5. Available notes are set

const limit = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6};
const iWantToGet = (amountRequired, limits) => {
    function collect(amount, nominals){
        if(amount === 0) return {};

        if(!nominals.length) return;

        const curNominal = nominals[0];
        const availableNotes = limits[curNominal];
        const notesNeeded = Math.floor(amount / curNominal);
        const numberOfNotes = Math.min(availableNotes, notesNeeded);

        for(let i = numberOfNotes; i >= 0; i--){
            const res = collect(amount - i * curNominal, nominals.slice(1));

            if(res){
                return i 
                        ? {[curNominal]: i, ...res}
                        : res;
            }
        }
    }

    const nominals = Object.keys(limits)
        .map(Number)
        .sort((a,b) => b - a);

    return collect(amountRequired, nominals);
}
console.log(iWantToGet(230, limit)) // {30: 2, 100: 2}
console.log(iWantToGet(1000, limit))// {1000: 1}
console.log(iWantToGet(200, limit)) // {100: 2}
console.log(iWantToGet(150, limit)) // {50: 1, 100: 1}
console.log(iWantToGet(120, limit)) // {30: 4}
console.log(iWantToGet(275, limit)) 
console.log(iWantToGet(5000000, limit)) 