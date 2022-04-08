//https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

//5kyu

const isMerge = (s, part1, part2) => JSON.stringify(s.split("").sort()) === JSON.stringify((part1 + part2).split("").sort());

console.log(isMerge("codewars", "cdw", "oears")) // true
console.log(isMerge("xcyc", "xc", "yc")) // true
console.log(isMerge("Making progress", "Mak pross", "inggre")) // true
console.log(isMerge("codewars", "code", "code")) // false
console.log(isMerge("More progress", "More ess", "pro")) // false