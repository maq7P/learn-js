const buildCharObj = (str) => {
    const chartObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);

    for(let char of str){
        chartObj[char] = chartObj[char] + 1 || 1;
    }

    return chartObj;
}

//complexity speed: O(n)
//complexity memory: O(n)
const anagram = (strA, strB) => {
    const strAObj = buildCharObj(strA);
    const strBObj = buildCharObj(strB);

    if(Object.keys(strAObj).length !== Object.keys(strBObj).length) 
        return false;

    for(let char of strAObj){
        if(strAObj[char] !== strBObj[char])
            return false
    }

    return true
}

console.log('finder', 'friend') //true
console.log('hello', 'buy') //true

//complexity speed: O(n * log(n))
//complexity memory: O(logn): inplace sort
const onelinerAnagram = (strA, strB) => [...strA.toLowerCase()].sort().toString() === [...strB.toLowerCase()].sort().toString();
