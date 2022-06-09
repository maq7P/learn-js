

function HighestScoringWord(str){
	const strToArr = str.split(" ");
	let max = {
		num: 0,
		el: strToArr[0]
	}

	strToArr.forEach(word => {
		let symbolsSum = 0
		for (let ch of word){
			symbolsSum += ch.charCodeAt() - 96;
		}

		if(symbolsSum > max.num){
			max.num = symbolsSum;
			max.el = word
		}
	});

	return max.el
}

function high1(s){
	let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
	return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log(HighestScoringWord('take me to semynak'))