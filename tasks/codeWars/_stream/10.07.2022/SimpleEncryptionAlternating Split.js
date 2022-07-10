//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
	if(n <= 0) return text;

	const first = text.split("").filter((item, idx) => idx % 2 === 1);
	const second = text.split("").filter((item, idx) => idx % 2 === 0);

	return first.concat(second).join("");
}

//TODO: overthinking
function decrypt(encryptedText, n) {
	if(n <= 0 || !encryptedText) return encryptedText;


}

console.log(decrypt(encrypt("0123456789")))