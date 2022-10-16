const cache: Record<number, number> = {}

function tribonacciRecursive(n: number): number {
  if(n === 0) return 0
  if(n === 1) return 1
  if(n === 2) return 1

  const getWithCache = (n: number) => {
    return cache[n] ? cache[n] : (cache[n] = tribonacciRecursive(n))
  }
  
  return getWithCache(n - 3) + getWithCache(n - 2) + getWithCache(n - 1)
};

console.log(tribonacciRecursive(25));