/*
    The input is an array of intervals (from and to). For example, we are talking about the beginning and end of meetings. 
    At the output, you must return a new array of intervals, in which all time intervals occupied by meetings will be marked. 
    If any two meetings intersect, then the result should include one time interval with the earliest start and latest end of these two meetings. 
    Rallies are also considered to overlap if one starts exactly when the previous one ended.
*/

// input: [[1,3], [2,6], [8,10], [15,18]]
// output: [[1,6], [8,10], [15,18]]

const case1 = [[1,3], [2,6], [8,10], [15,18]];
const case2 = [[1,5], [2, 7]];
const case3 = [[1,3], [5, 7]];
const case4 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]];
const case5 = [[11,12]];

const mergeIntervals = (intervals) => {
    if(intervals.length < 2) return intervals;

    intervals.sort(([a, ], [b, ]) => a - b)

    const mergedInterval = [intervals[0]];

    for(let i = 0; i < intervals.length; i++){
        const recent = mergedInterval[mergedInterval.length - 1];
        const curInterval = intervals[i];

        if(recent[1] >= curInterval[0]){
            recent[1] = Math.max(recent[1], curInterval[1])
        } else {
            mergedInterval.push(curInterval)
        }
        
    }

    return mergedInterval
}
console.log(mergeIntervals(case1));
console.log(mergeIntervals(case2));
console.log(mergeIntervals(case3));
console.log(mergeIntervals(case4));
console.log(mergeIntervals(case5));
