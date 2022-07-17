//https://www.codewars.com/kata/58dea43ff98a7e2124000169/train/javascript

//need solution for big numbers
function divideStrings(a,b) {
	return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
}