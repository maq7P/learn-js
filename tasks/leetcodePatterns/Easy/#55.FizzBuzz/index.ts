//https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
  const res = []

  for(let i = 1; i <= n; i++){
    const isFizzBuzz =  i % 3 === 0 && i % 5 === 0
    const isFizz =  i % 3 === 0
    const isBuzz =  i % 5 === 0

    isFizzBuzz && res.push("FizzBuzz")
    !isFizzBuzz && isFizz && res.push("Fizz")
    !isFizzBuzz && isBuzz && res.push("Buzz")

    !isFizz && !isBuzz && res.push(i.toString())
  }

  return res
};