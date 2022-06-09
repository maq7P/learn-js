
//Complexity memory O(n)
//Complexity speed O(n log n)
function topThreeWords(text) {
	const txtToArr = text.trim().split(" ");
	const popular = {};

	for(let i = 0; i < txtToArr.length; i++ ){
		let cur = txtToArr[i];

		cur = cur.toLowerCase().replace(/[^a-z\d']/g, "");

		if(!cur || cur === "'"){
			continue
		}

		!popular[cur] ?  (popular[cur]  = 1) : popular[cur] += 1;
	}

	const mostPopular = [];
	const mostPopularNums =
			Object.values(popular).sort((a,b) => b - a).slice(0,3)

	mostPopularNums.forEach(num => {
		for(let el in popular){
			const cur = popular[el];

			if(cur === num && !mostPopular.includes(el)){
				mostPopular.push(el);
				break;
			}
		}
	})

	return mostPopular
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance  in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords("  //wont won't won't"))
console.log(topThreeWords("a a c b b"))
console.log(topThreeWords("  , e   .. "))
console.log(topThreeWords("  ...  "))
console.log(topThreeWords("   '  "))


//more elegant solution
function topThreeWords2(text) {
	let words = {}
	text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
		let c = words[match] || 0
		words[match] = ++c
	})
	return Object
			.keys(words)
			.sort(function(a,b){return words[b]-words[a]})
			.slice(0,3)
}