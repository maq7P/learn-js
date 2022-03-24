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

const binarySearchRecursive1 = (nums, target, idx = 0) => {
    if(!nums.length) return -1
    if(nums.length === 1 && nums[0] === target) return idx

    const curPosition = Math.floor(nums.length / 2)

    if(nums[curPosition] === target)
        return curPosition + idx

    if(target > nums[curPosition])
        return binarySearchRecursive1(nums.slice(curPosition + 1), target, curPosition + 1 + idx)
    else
        return binarySearchRecursive1(1nums.slice(0, curPosition), target, idx)
}

//Без slice
const binarySearchRecursive2 = (nums, target, start = 0, end = nums.length - 1) => {
    const mid = Math.floor((start + end) / 2)
    const el = nums[mid]
    if(el === target){
        return mid
    }

    if(el < target) return binarySearchRecursive2(nums, target, mid + 1, end)
    else return binarySearchRecursive2(nums, target, start, mid - 1)
}

console.log(binarySearchRecursive2([1,2,3,4,50,60,70, 1004, 2000], 60));
