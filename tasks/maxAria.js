/* 

    We are given an array of numbers as input. Each number is a vertical line of a given height. 
    All lines are at a distance of 1 from each other. We need to find 2 lines (2 numbers) from this array, which, forming a "container", 
    will give the maximum possible amount of water. As an answer, you need to return the maximum "volume" of water for a given array of numbers.

*/
//input: [1,8,6,2,5,4,8,3,7]
//output: 49

// speed: O(n);
// memory: 1
const maxArea = (arr) => {
    let leftCoursor = 0;
    let rightCoursor = arr.length - 1;

    let maxValueArea = 0;

    for(let i = 0; i < arr.length; i++){
        if(leftCoursor > rightCoursor) break;

        let curValue = Math.min(arr[leftCoursor], arr[rightCoursor]) * (rightCoursor - leftCoursor);
        maxValueArea = Math.max(maxValueArea, curValue);

        arr[leftCoursor] < arr[rightCoursor] ? leftCoursor++ : rightCoursor--;
    }

    return maxValueArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([0,0,100])); // 0