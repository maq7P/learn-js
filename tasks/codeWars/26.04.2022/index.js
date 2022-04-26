//https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
	const numToStr = num.toString();

	let dec = 10
	let res = "";
	for (let i = 0; i < numToStr.length; i++) {
		const cur = Number(numToStr[i])
		if(cur !== 0){
			if(i !== 0){
				res += " + "
			}
			res +=  cur * (10 ** (numToStr.length - i - 1))
		}
	}

	return res
}

console.log(expandedForm(900))

//
const expandedForm2 = n => n.toString()
		.split("")
		.reverse()
		.map( (a, i) => a * Math.pow(10, i))
		.filter(a => a > 0)
		.reverse()
		.join(" + ");