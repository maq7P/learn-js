//https://leetcode.com/problems/contains-duplicate/

//js решение
function containsDuplicate(nums: number[]): boolean {
	return [...new Set(nums)].toString() !== nums.toString()
}

//классическое решение
function containsDuplicateClassic(nums: number[]): boolean {
	const seen = {} as Record<number, boolean>

	for (let item in nums) {
		if(seen[item]){
			return true
		}

		seen[item] = true
	}

	return false
}

//true
console.log(containsDuplicate([1,2,3,4,4]))
console.log(containsDuplicateClassic([1,2,3,4,4]))

//false
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicateClassic([1,2,3,4]))