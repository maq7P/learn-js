/*
* 1) task of random shuffle array
* 2) algorithm implementation of "Algorithm Fisher-Yates shuffle"
* input: sorted array
* output: shuffle array
*/
const input = [1, 2, 3, 4, 5, 6, 7, 8]

// Direct method

// Memory complexity: O(n)
// Time complexity: O(n)
const shuffle = (arr) => {
    let shuffleArr = []
    const trackingPositions = {}
    while (shuffleArr.length < arr.length) {
        const random = Math.floor(Math.random() * arr.length)
        if (!trackingPositions[random]) {
            shuffleArr.push(arr[random])
            trackingPositions[random] = true
        }
    }
    return shuffleArr
}

// Algorithm Fisher-Yates shuffle

// Memory complexity: O(1)
// Time complexity: O(n)
const algorithmShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--){
        let tmp = arr[i]
        let random = Math.floor(Math.random() * (i + 1))
        arr[i] = arr[random]
        arr[random] =  tmp
    }
    return arr
}

