//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(sentence){
	const sentenceArray = sentence.split(' ');
	let result = '';
	sentenceArray.map((str, i) => {
		if (str.length >= 5){
			sentenceArray[i] = str.split('').reverse().join('');
		} else {
			sentenceArray[i] = str;
		}
		result = sentenceArray.join(' ');
	});
	return result;
}