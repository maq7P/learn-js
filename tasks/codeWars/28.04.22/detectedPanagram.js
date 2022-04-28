//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
	string = string.toLowerCase();
	let template = "abcdefghijklmnopqrstuvwxyz";

	return template.split("").every(function(x){
		return string.indexOf(x) !== -1;
	});
}

//regexp solution
function isPangramRexExp(string) {
	return (string.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26;
}

isPangram("The quick brown fox jumps over the lazy dog")