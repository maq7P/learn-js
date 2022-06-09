//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

const maxSubarraySum = (arr) => {
	if(!arr.length) return [];

	let maxSum = -Infinity
	let curCum = 0
	for(let i = 0; i < arr.length; i++){
		curCum = Math.max(arr[i], curCum + arr[i])
		maxSum = Math.max(curCum, maxSum)
	}

	return maxSum
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, -4]))