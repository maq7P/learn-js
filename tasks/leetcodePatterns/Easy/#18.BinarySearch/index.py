from multiprocessing.dummy import Array


def search(nums, target):
    left, right = 0, len(nums) - 1

    while (left <= right):
        mid = ((right - left) // 2 + left)

        if (target == nums[mid]):
            return mid

        if (target > nums[mid]):
            left = mid + 1
        else:
            right = mid - 1

    return -1


print(search([1, 2, 3, 23, 99, 222], 222))
