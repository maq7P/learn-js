//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
	text = text.toLowerCase()
	const duplicates = {}

	for(let char of text){
		duplicates[char] ? duplicates[char]++ : (duplicates[char] = 1)
	}

	return Object.keys(duplicates).reduce((acc, key) => duplicates[key] > 1 ? ++acc : acc, 0)
}

function duplicateCountRegExp(text){
	return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount("aabbcde"), duplicateCountRegExp("aabbcde"));
console.log(duplicateCount("abcde"), duplicateCountRegExp("abcde"));
console.log(duplicateCount("acxaztybcde"), duplicateCountRegExp("acxaztybcde"));
console.log(duplicateCount("AAVbB"), duplicateCountRegExp("AAVbB"));