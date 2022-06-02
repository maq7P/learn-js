//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const arr_en_len = arr_en.length;
const isLetter = (symbol) => /[A-Z]/ig.test(symbol);

function rot13(message){
	let res = ""
	for(let word of message){
		if(isLetter(word)){
			const isUpper = arr_EN.indexOf(word) >= 0
			const idx = isUpper ? arr_EN.indexOf(word) : arr_en.indexOf(word);
			const nextIdx = idx + 13 < arr_en_len
					? (idx + 13)
					: (idx + 13 - arr_en_len)

			res += isUpper ? arr_EN[nextIdx] : arr_en[nextIdx];

		} else {
			res += word
		}
	}

	return res
}

console.log(rot13("Grfg"))
console.log(rot13("sm7n"))


//simple solution
function rot13Simple(message) {
	const code = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const rot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
	return message.replace(/[a-z]/gi, c => rot13[code.indexOf(c)])
}