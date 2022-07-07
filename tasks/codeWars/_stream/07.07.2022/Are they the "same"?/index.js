//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
	if(array1 == null || array2 == null) return false;

	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);

	return array1
			.map(v => v * v)
			.every((v, i) => v === array2[i]);
}

console.log(comp([1,2,4], [1,4,16]))
console.log(comp([1,2,4], [1,4,164]))