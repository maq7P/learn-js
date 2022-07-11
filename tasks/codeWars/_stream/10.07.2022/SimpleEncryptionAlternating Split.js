//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
	if(n <= 0 || !text) return text;

	const first = text.split("").filter((item, idx) => idx % 2 === 1);
	const second = text.split("").filter((item, idx) => idx % 2 === 0);

	return encrypt(first.concat(second).join(""), n - 1);
}

function decrypt(encryptedText, n) {
	if(n <= 0 || !encryptedText) return encryptedText;

	let res = [];

	const mid = encryptedText.length / 2;
	const first = encryptedText.split("").splice(mid);
	const second = encryptedText.split("").splice(0, mid);

	for (let i = 0; i < encryptedText.length; i++) {
			res.push(first[i]);
			res.push(second[i]);
	}

	return decrypt(res.join(""), n - 1)
}

console.log(decrypt("This is a test!", 0))
console.log(decrypt("hsi  etTi sats!", 1))
console.log(decrypt("012345", 1))
console.log(decrypt("This is a test!", 4))
console.log(decrypt("hsi  etTi sats!", 1))