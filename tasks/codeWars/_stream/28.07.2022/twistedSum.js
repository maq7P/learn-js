//https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

function twistedSum(n) {
	let res = 0;

	while(n > 0){
		const arrDigits =  n.toString().split("");
		for (let i = 0; i < arrDigits.length; i++) {
			res += +arrDigits[i]
		}
		n--;
	}

	return res;
}


//More elegant solution
function twistedSum2(n) {
	return n < 2 ? n : digits(n) + twistedSum(n-1);
}
function digits(n) {
	let sum = 0;
	while (n > 9) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	return sum + n;
}

console.log(twistedSum(3));  //6
console.log(twistedSum(10)); //46
console.log(twistedSum(11)); //48
console.log(twistedSum(12)); //51