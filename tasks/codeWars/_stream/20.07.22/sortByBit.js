//https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr) {
	const getCountBits = str => str
			.toString(2)
			.split("")
			.filter(el => el === "1")
			.length

	console.log(getCountBits(9))
	return arr.sort((a, b) => {
		if(getCountBits(a) === getCountBits(b)){
			return (getCountBits(a) + a.length) - (getCountBits(b) + b.length)
		} else {
			return getCountBits(a) - getCountBits(b)
		}
	})
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))