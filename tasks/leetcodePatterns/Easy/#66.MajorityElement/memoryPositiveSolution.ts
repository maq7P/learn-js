
// 1. Сортировкой: Time Complexity O(nlogn), Time memory O(1)
// 2. Можно решить задачу , вырбрав рандомный элемент - вероятность попасть в нужный элемент 1/2
// количество сравнений: 1/2n + 1/4 * 2n + 1/8 * 3n + 1/16 * 4n + ... -> 2n -> n 
// по памяти O(1)
// https://afteracademy.com/blog/find-the-majority-element-in-an-array

function majorityElementWIthSort(nums: number[]): number {

  nums = nums.sort((a, b) => a- b)
  let i = 1, count = 1
  let len = nums.length

  while ( i < len){
    while ( i < len && nums[i] == nums[i-1]){
      i = i + 1
      count = count + 1
    }

    if (count > len / 2){
      return nums[i - 1]
    }

    count = 1
    i = i + 1
  }

  return NaN
};
