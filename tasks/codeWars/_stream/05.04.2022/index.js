//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

//my solution
function sumIntervals(intervals) {
	const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])

	const mergedInterval = [intervals[0]];
	for(let i = 1; i < sortedIntervals.length; i++){
		const recent = mergedInterval[mergedInterval.length - 1];
		const curInterval = sortedIntervals[i];

		if(recent[1] >= curInterval[0]){
			recent[1] = Math.max(recent[1], curInterval[1])
		} else {
			mergedInterval.push(curInterval)
		}
	}

	return mergedInterval.reduce((acc, interval) => {
		return acc + interval[1] - interval[0]
	}, 0)
}

console.log(sumIntervals([
	[1,2],
	[6, 10],
	[11, 15]
]))


//very elegant solition
function sumIntervals2(xs) {
	let ys = xs.sort(([a,b], [c,d]) => a-c);
	let m = -Number.MAX_VALUE;
	let res = 0;
	for (let [a,b] of ys) {
		m = Math.max(m, a);
		res += Math.max(0, b-m);
		m = Math.max(m, b);
	}
	return res;
}