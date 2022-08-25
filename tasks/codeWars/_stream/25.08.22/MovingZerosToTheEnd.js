//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
	const zeros = arr.filter((elm) => elm === 0).length;
	const result = arr.filter((elm) => elm !== 0);

	for (let i = 0; i < zeros; i += 1) {
		result.push(0);
	}

	return result;
}