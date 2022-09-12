//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(arrA, arrB){
	let arr = arrB.join(" ");

	return arrA.filter(item => arr.search(item) !== -1 && item !== undefined ).sort()
}