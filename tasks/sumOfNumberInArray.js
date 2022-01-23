/*
* How define two number which together get to specified sum
* input: array of number, sum number
* output: array of indexes
*/

const data = [1, 2, 3, 4, 23, 3, 55, 1, 1]

// SUM of 2

// Time complexity: O(n^2)
// Memory complexity: O(1)
const sumOfTwo1 = (arr, target) => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return result.push([i, j])
            }
        }
    }

    return []
}

// Time complexity: O(n)
// Memory complexity: O(n)
const sumOfTwo2 = (arr, target) => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i]

        if (obj[diff] && obj[diff] !== i) {
            return [i, obj[diff]]
        }
    }

    return []
}

// SUM of 3
// results have to uniq arrays
// Time complexity: O(n^2)
const sumOfTwo3 = (nums, target) => {
    const result = []

    if (nums.length < 3) {
        return result
    }

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;

        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])

                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k-1]) k--
                j++
                k--
                continue;
            }

            if (sum < target) {
                j++
                continue;
            }
            if (sum > target) {
                k--
                continue;
            }

        }
    }
    return result
}
console.log(sumOfTwo3(data, 4))
