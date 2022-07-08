//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
	if(k === 0 || k > strarr.length) return ""

	const strarrCount = strarr
			.map((item, idx) => ({count: item.length, idx }))
			.sort((a, b) => b.count - a.count)
			.splice(0, k)


	let res = ""
	for (let i = 0; i < strarrCount.length; i++) {
		res += strarr[strarrCount[i].idx]
	}

	return res
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))