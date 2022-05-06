function towerBuilder(n) {
	const EMPTY = " ";
	const BRICK = "*";

	let temp = n - 1;
	let res = [];
	for(let i = 0; i < n; i++){
		res.push(EMPTY.repeat(temp) + BRICK.repeat((i * 2) + 1) + EMPTY.repeat(temp));
		temp--;
	}

	return res
}


//однострочник
const towerBuilder2 = n =>
		[...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1))

console.log(towerBuilder(10))