//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
	if(n <= 3) return signature.slice(0, n);

	let res = [...signature];
	let first = 0;
	let second = 1;
	let third = 2;

	while(third < n -1){
		let next = res[first] + res[second] + res[third];
		res.push(next);
		first++;
		second++;
		third++;
	}

	return res
}

console.log(tribonacci([1,1,1],10))
console.log(tribonacci([0,0,1],10))
console.log(tribonacci([0,0,1],0))