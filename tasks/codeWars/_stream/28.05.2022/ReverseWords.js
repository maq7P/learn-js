//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
* */

function reverseWords(str) {
	return str.split(" ")
			.map(item => item.split("").reverse().join(""))
			.join(" ")
}

console.log(reverseWords("This is an example!"))