//https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

//TODO: temporary need
function isPrime(num) {
	if(num < 2) return false;
	if(num === 2) return true;

	let temp = Math.ceil(Math.sqrt(num));

	while(temp > 1){
		if(num % temp === 0){
			return false
		}
		temp -= 1
	}

	return true
}

console.log(isPrime(17))

