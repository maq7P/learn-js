//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
	let counter = 0
	let temp = num

	while(temp > 10){
		temp = temp.toString()

		let curTemp = 1;
		for(let charNum of temp){
			curTemp *= +charNum
		}

		temp = curTemp
		counter++
	}

	return counter
}

console.log(persistence(25))