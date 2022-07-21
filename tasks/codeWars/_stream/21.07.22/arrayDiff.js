//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
	return a.filter(x => !b.includes(x))
			.concat(b.filter(x => !a.includes(x)));
}

console.log(arrayDiff([1,2], [1]))