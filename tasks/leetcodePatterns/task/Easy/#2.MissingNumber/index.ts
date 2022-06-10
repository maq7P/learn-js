//https://leetcode.com/problems/missing-number/

/*
* Для решения этой задачи нужна формула суммы арифмитической прогрессии
* Sn = (a1 + an) * n / 2
* */
function missingNumber(nums: number[]): number {
 return nums.length * (nums.length + 1) / 2 - nums.reduce((acc, el) => acc += el, 0)
}

//2
console.log(missingNumber([3,0,1]))
//2
console.log(missingNumber([0,1]))
//8
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
//0
console.log(missingNumber([1, 2]))