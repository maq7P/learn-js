// #1 ATM easy
//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10, 1

const availables = [100,50,20,10, 1];

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
console.log(getMoney(1160))