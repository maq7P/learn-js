//https://www.codewars.com/kata/5519a584a73e70fa570005f5

class Primes {
	static * stream() {
		// replace this with your solution
		for(let p of [2,3,5,7,11,13,17,19,23,29, 31]) {
			yield p;
		}
	}
}

function verify (from_n, ...vals) {
	const stream = Primes.stream()
	for(let i=0; i<from_n; ++i) stream.next()
	for(let v of vals) console.log(stream.next().value, v)
}

verify(0,2,3,5,7,11,13,17,19,23,29)

