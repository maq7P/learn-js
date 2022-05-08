function sumDigPow(a, b) {
	const res = [];

	for(let i = a; i <= b; i++){
		const temp = String(i)
				.split("")
				.reduce((acc, el, index) => {
					acc += Number(el) ** (index + 1);
					return acc
				}, 0)

		if(temp === i){
			res.push(i)
		}
	}


	return res
}



//moc fast solution
function sumDigPow2(a, b) {
	return [1,2,3,4,5,6,7,8,9,89,135,175,518,598,1306,1676,2427,2646798].filter(item => (item >= a) && (item <= b ))
}

console.log(sumDigPow(0, 10000))