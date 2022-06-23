//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(arr, n) {
	const cashRegister = Array.from({ length: n }, (n) => 0)

	for (let i = 0; i < arr.length; i++) {
		const cur = arr[i];

		cashRegister[0] += cur;
		cashRegister.sort((a, b) => a- b)
	}

	return cashRegister[cashRegister.length - 1]
}

console.log(queueTime([2,2,3,3,4,4], 2))
console.log(queueTime([1,4,10,2,20], 3))
// console.log(queueTime([], 1))
// console.log(queueTime([1,2,3,4,5], 100))