//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
	let res = "";
	for (let i = 0; i < A.length; i++) {
		res ^= A[i]
	}
	return res
}