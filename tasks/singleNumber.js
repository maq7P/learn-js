/*
    The conditions of the task allow: an array is given with a number, in it all numbers are repeated 2 times, except for one number. He must be found. There is one more remark: 
    it is necessary to solve this problem in linear time
*/

// time complexity: O(n)
// memory complexity: O(n)
const singleNumber = (arr) => {
    const hash = {};
    let result = NaN;

    for(let i = 0; i < arr.length; i++){
        hash[arr[i]] = hash[arr[i]] ? ++hash[arr[i]] : 1;
    }   

    const keys = Object.keys(hash);
    for(let key of keys){
        hash[key] === 1 && (result = key);
    }

    return result;
}

singleNumber([4,1,2,2,1]);

// time complexity: O(n)
// memory complexity: O(n)
const singleNumber2 = (nums) => {
    const uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];

        if(!uniq.has(cur)){
            uniq.add(cur);
            uniqSum += cur;
        }

        numSum += cur;
    }

    return uniqSum * 2 - numSum
}   

console.log(singleNumber2([4,1,2,2,1]));

// time complexity: O(n)
// memory complexity: O(n)
const singleNumber3 = (nums) => 
    Array.from(new Set(nums)).reduce((acc, el) => acc + el, 0) * 2 - nums.reduce((acc, el) => acc + el, 0)

console.log(singleNumber3([4,1,2,2,1]))