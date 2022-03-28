const cacheFunction = (cb) => {
	const cache = {}

	return function(n){
		if(cache[n]){
			return cache[n]
		}
		const res = cb(n)
		cache[n] = res

		return res
	}
}

const factorial = (val) => {
	let result = 1

	while(val > 1){
		result *= val
		val--;
	}

	return result
}

console.log(cacheFunction(factorial(5)))
console.log(cacheFunction(factorial(5)))
console.log(cacheFunction(factorial(54)))
console.log(cacheFunction(factorial(54)))