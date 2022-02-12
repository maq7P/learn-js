function fibonacci(num) {
    const result = [0, 1];
  
    for(let i = 2; i <= num; i++) {
    
      const prevNum1 = result[i - 1];
      const prevNum2 = result[i - 2];
      result.push(prevNum1 + prevNum2);
    }
  
    return result[num];
  }
  
  console.log(fibonacci(7));
  
  
  function fibonacciShort(num) {
    let a = 1,
        b = 1;
    
    for (let i = 3; i <= num; i++) {
        [a,b] = [b,a + b];
    }
    return b;
  }
  console.log(fibonacciShort(7));
  
  
  function fibonacciRecursion(num) {
    if(num < 2) {
      return num;
    }
  
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
  }
  
  console.log(fibonacciRecursion(7));