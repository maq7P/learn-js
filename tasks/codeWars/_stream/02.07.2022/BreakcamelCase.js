//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function breakCamelCase(string) {
	return string
			.split("")
			.map(character => {
				if(character === character.toUpperCase()){
					return " " + character
				} else {
					return character
				}
			})
			.join("")
}

function breakCamelCaseWithRegExp(string) {
	return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(breakCamelCase("sdaKadsadK"))

