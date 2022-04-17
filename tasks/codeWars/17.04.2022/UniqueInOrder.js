//https://www.codewars.com/kata/54e6533c92449cc251001667

let uniqueInOrder=function(iterable){
	let total = []

	const iterator = iterable[Symbol.iterator]();
	iterator.next();

	for(let el of iterable){
		if(iterator.next().value !== el){
			total.push(el)
		}
	}

	return total
}

uniqueInOrder('AAAABBBCCDAABBB')
console.log('______')
uniqueInOrder([1,2,3])