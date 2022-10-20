//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

//faster 52% than other solution
function findNumbers3(nums: number[]): number {
  return nums.reduce((res, num) => {
    (Math.floor(Math.log10(num)) + 1) % 2 === 0 && (res++)
    return res
  }, 0)
};

