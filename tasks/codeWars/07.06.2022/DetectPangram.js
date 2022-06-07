//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
	return Object.keys(string.split("").reduce((acc, char) => {
		if(/[a-z]/i.test(char)){
			acc[char] ? acc[char]++ : (acc[char] = 1)
		}
		return acc
	}, {})).length === 26
}

//однострочник
const isPangramOneLine = (string) => (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) //true
console.log(isPangram("This is not a pangram.")) //false