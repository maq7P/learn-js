//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
	let arr = [];
	let multiple = [];

	for (let i = 0; i < number; i++) {
		arr.push(i);
	}

	for (let i = 0; i < arr.length; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multiple.push(i);
		}
	}

	const sumTotal = multiple.reduce((sum, num) => sum + num, 0);

	return sumTotal;
}