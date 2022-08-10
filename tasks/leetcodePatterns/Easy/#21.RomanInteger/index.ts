//https://leetcode.com/problems/roman-to-integer/
//TODO: re

const GRADES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function romanToInt(s: string): number {
  let result = 0, current, previous = 0;

  for (const char of s.split("").reverse()) {
    current = +GRADES[char as keyof typeof GRADES];

    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }

  return result
};

console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("III"))