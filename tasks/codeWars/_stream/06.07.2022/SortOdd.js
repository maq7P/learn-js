//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
	const oddArr = array
			.filter(item => item % 2)
			.sort((a, b) => a - b)

	let counter = 0;
	return array.map((item) => {
		if(Math.abs(item % 2) === 1){
			const odd = oddArr[counter];
			counter++;
			return odd;
		}
		return item
	})
}

function sortArrayWithShift(array) {
	const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
	return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
console.log(sortArray([7, 1]))
console.log(sortArray([-1, -3, 5, 3, 2, 8, 1, 4]))