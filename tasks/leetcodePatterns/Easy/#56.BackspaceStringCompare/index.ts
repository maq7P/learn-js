//https://leetcode.com/problems/backspace-string-compare/

function backspaceCompare(s: string, t: string): boolean {
  let stackC: string[] = []
  let stackT: string[] = []
  
  for(let c of s){
    if(c === "#"){
      stackC.pop()
    } else stackC.push(c)
  }

  for(let c of t){
    if(c === "#"){
      stackT.pop()
    } else stackT.push(c)
  }

  return stackC.join("") === stackT.join("")
};

console.log(backspaceCompare("ab#c", "ad#c") === true);
console.log(backspaceCompare("ab##", "c#d#") === true);
console.log(backspaceCompare("a#c", "b") === false);
