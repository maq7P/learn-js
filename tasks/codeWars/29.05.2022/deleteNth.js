//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
	const hash = {}
	const res = []

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];

		!hash[item] ? (hash[item] = 1) : hash[item]++

		if(hash[item] && hash[item] <= n){
			res.push(item)
		}
	}

	return res
}

//short
const deleteNth2 = (a, x) => {
	let m = {}
	return a.filter( v => (m[v] = m[v]+1||1) <= x )
}

console.log(deleteNth([20,37,20,21], 1))
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))