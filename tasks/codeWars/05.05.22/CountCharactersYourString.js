function count(str) {
	return str.split("").reduce((acc, c) => {
		acc[c] ? (acc[c]++) : (acc[c] = 1)

		return acc
	}, {})
}

console.log(count("aaaabc"))