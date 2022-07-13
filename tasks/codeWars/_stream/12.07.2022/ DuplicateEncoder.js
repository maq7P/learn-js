//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
	const letterCount = {};
	const letters = word.toLowerCase().split('');

	for(let i =0; i < letters.length; i++){
		letterCount[letters[i]] = (letterCount[letters[i]] || 0) + 1;
	}

	return letters.map((letter) =>letterCount[letter] === 1 ? '(' : ')').join('');
}
