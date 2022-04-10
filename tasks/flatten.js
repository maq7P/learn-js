/* Плоский массив
Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов.
В результате должны получить новый одномерный массив.
*/

function flatten(array) {
	const res = [];

	for (let i = 0; i < array.length; i++) {
		const cur = array[i];

		if (Array.isArray(cur)) {
			const recursiveFlat = flatten(cur);

			for (let j = 0; j < recursiveFlat.length; j++) {
				res.push(recursiveFlat[j])
			}

		} else {
			res.push(cur)
		}
	}

	return res
}

const test1 = [[1,'32131231',3], [2,3,4]]
const test2 = [[[[[[[2]]]]]]]
const test3 = [[[[[[[2]]]]]], [[[3]]]]
const test4 = [[]]
const test5 = [];
const test6 = [[1], [2,3], [[[4]]]]

console.log(flatten(test2));