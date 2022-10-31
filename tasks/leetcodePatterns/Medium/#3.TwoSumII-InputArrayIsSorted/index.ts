//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum2(numbers: number[], target: number): number[] {

  const hash: Record<string, number> = {}

  for(let i = 0; i < numbers.length; i++){
    if(hash[numbers[i]] !== undefined){
      return [hash[numbers[i]] + 1, i + 1]
    }

    hash[target - numbers[i]] =  i;
  }

  return []
};

console.log(twoSum2([2,7,11,15], 9));


