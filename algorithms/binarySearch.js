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




//По имени вывести номер с помощью бинарного поиска
const d = [
    { name: 'Alex Bowman', number: '48-2002' },
    { name: 'Aric Almirola', number: '10-1001' },
    { name: 'Bubba Wallace', number: '23-1111' },
    { name: 'Chase Elliott', number: '9-9900' },
    { name: 'Denny Hamlin', number: '11-0022' },
    { name: 'John Logano', number: '22-2299' },
    { name: 'Kevin Harvick', number: '4-1154' },
    { name: 'Kyle Busch', number: '18-3002' },
    { name: 'Kyle Larson', number: '5-2234' },
    { name: 'Matt Dibenedetto', number: '21-1102' }
];

function findNumberByName(phonebook, target) {
    let left = 0;
    let right = phonebook.length - 1;

    while (left <= right) {
        const mid = Math.round((right - left) / 2) + left;
        const curName = phonebook[mid].name.toLowerCase();
        const curNum = phonebook[mid].number;

        if (curName === target.toLowerCase()) {
            return curNum
        }

        if (target.toLowerCase() > curName) {
            left = mid + 1
        }
        if (target.toLowerCase() < curName){
            right = mid - 1
        }

    }

    return null
}

console.log(findNumberByName(d, 'Chase Elliott'))
