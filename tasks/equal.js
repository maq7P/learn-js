/*
    write deep comparison function without taking into account 
    the functions but taking into account the order of the keys
*/

// complexity time O(n * log(n))
// complexity memory O(n)
const deepCompare = (com1, com2, withSort) => {
    const newCom1 = {};
    const newCom2 = {};

    const objectToAlphbet = (obj) => {
        const alphbetObj = {}
        const keys = Object.keys(com1);

        keys
            .sort()
            .forEach(key => {
                alphbetObj[key] = com1[key]
            })

        return alphbetObj
            
    }

    return withSort 
        ? JSON.stringify(objectToAlphbet(newCom1)) === JSON.stringify(objectToAlphbet(newCom2)) 
        : JSON.stringify(com1) === JSON.stringify(com2)
}

const firstObj = {
    fruit: '🥝',
    energy: '255kJ',
};

const secondObj = {
    energy: '255kJ',
    fruit: '🥝',
};

console.log(deepCompare(firstObj, secondObj)); //false
console.log(deepCompare(firstObj, secondObj, true)); //true