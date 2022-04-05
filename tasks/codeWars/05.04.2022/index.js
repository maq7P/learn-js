//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

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