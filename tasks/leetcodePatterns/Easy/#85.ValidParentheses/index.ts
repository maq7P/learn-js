//https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const pattern: Record<string, string> = {
    "{": "}",
    "(": ")",
    "[": "]",
  }
  const stack: any = []

  for(let c of s){
    if(c === pattern[stack[stack.length - 1]]){
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  console.log(stack);
  

  return !stack.length
};

console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(){}}{"));


