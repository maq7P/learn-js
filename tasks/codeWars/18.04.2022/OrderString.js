//https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
	if(!words){
		return ""
	}

	const arrWords = words.split(" ");

	let num = [];
	arrWords.forEach(item => {
		for (let sym of item){
			Number(sym) && num.push({
				item,
				sortId: +sym
			})
		}
	})

	return num
			.sort((a,b) => a.sortId - b.sortId)
			.map(({item}) => item)
			.join(' ')
}

//with regExp
function orderWithRegExp(words){

	return words.split(' ').sort(function(a, b){
		return a.match(/\d/) - b.match(/\d/);
	}).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))


