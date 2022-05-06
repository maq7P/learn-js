function towerBuilder(n) {
	const EMPTY = " ";
	const BRICK = "*";

	let temp = n - 1;
	let res = [];
	for(let i = 0; i < n; i++){
		res.push(temp * EMPTY + BRICK + temp * EMPTY);
		temp--;
	}

	return res
}

console.log(towerBuilder(3))