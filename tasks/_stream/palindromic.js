/*
* A palindromic number (also known as a numeral palindrome or a numeric palindrome) is
* a number (such as 16461) that remains the same when its digits are reversed
*/

const inputStr1 = 'racecar' // true
const inputStr2 = 'table' // false
const inputStr3 = 'А роза упала на лапу Азора' // true

// String palindromic
const isPalindromicString = (str) => {
    const prepareStr = str.toLowerCase().replace(/\s/g, '')
    return prepareStr.split('').reverse().join('') === prepareStr
}

const isPalindromicStringImperative = (str) => {
    str = str.toLowerCase().replace(/\s/g, '')
    const middle = Math.floor(str.length / 2)
    for (let i = 0; i < middle; i++)
        if (str[i] !== str[str.length - i - 1])
            return false
    return true
}

const inputNum1 = 121 // true
const inputNum2 = -121 // false
const inputNum3 = 10 // true

// Number palindromic O(log n) P.S. Without convert number to string
const isPalindromicNumber = (num) => {
    if (num < 0 || num % 10 === 0) return false
    if (num < 10) return true

    let reverse = 0

    while (num > reverse) {
        reverse *= 10;
        reverse += num % 10
        num = ~~(num / 10)
    }

    return num === reverse || num === ~~(reverse / 10)
}

