//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
	const res = {};

	for(let i = 0; i < arr.length; i++){
		if(res[arr[i]]){
			res[arr[i]].count++;
		} else {
			res[arr[i]] = {
				count: 1,
				val: arr[i]
			}
		}
	}

	return Object.values(res).filter(item => item.count === 1)[0].val
}

console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);