function wave(str){
	if(!str) return []

	const res = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if(char === " ") continue;

		res.push(String(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1)))
	}

	return res
}

//однострочник
var wave = w => [...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

console.log(wave('abcd'))
console.log(wave('hello world'))