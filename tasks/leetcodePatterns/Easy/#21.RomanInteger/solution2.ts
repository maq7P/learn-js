const grades: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanToInt2(s: string) {
  let [prev, cur, temp, res] = [0, 0, 0, 0]

  while(temp < s.length){
    prev = cur
    cur = grades[s[temp]]

    if(cur > prev){
      res += cur - prev * 2
    } else {
      res += cur
    }

    temp++
  } 

  return res
}


console.log(romanToInt2("IX")); //9
console.log(romanToInt2("MCMXCIV")); //1994
console.log(romanToInt2("LVIII")); //58
console.log(romanToInt2("III")); //3