// O(log(n))
// binary search
// array need to be sorted

const arr = [-1,2,4,10, 20,40,56,100, 200, 1234, 23233, 232455, 13414122];

const binarySearch = (nums, target) => {
    let left = 0
    let right = nums.length - 1

    while(left <= right){
        mid = Math.round((right-left) / 2) + left;

        if(nums[mid] === target){
            return nums[mid]
        }

        if(nums[mid] > target){
            left = mid + 1;
        }

        if(nums[mid] < target){
            right = mid - 1;
        }
    }

    return -1
}
