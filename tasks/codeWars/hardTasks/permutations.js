//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

function permutations(string) {
	if(string.length === 1){
		return [string]
	}

	const dictionary = [];



	return [];
}

console.log(permutations("a"), ["a"]);
console.log(permutations("ab"), ['ab', 'ba']);
console.log(permutations("aabb"), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
