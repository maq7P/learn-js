//https://www.codewars.com/kata/5426d7a2c2c7784365000783

//4kyu

/*
ГЕНЕРИТЬ ВСЕ ВАРИАНТЫ С ПРОВЕРКОЙ

let output = [];

function checkParanthesis(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      output.push(str[i]);
      count++;
    } else if (str[i] === ")") {
      if (output.pop() !== "(") {
        count++
      }
    }
    console.log(count);
  }
  return output.length;
}

checkParanthesis('()))')

* */
class Bracket {
	constructor(n) {
		this.size = n;
		this.el = {
			'open': '(',
			'close': ')'
		}
		this.brackets = this._generateBracketsDefault();
	}

	_generateAllParentheses(){
		const brackets = [];

		for(let i = 0; i < this.size; i++){
			this.brackets.push(this.el)
		}

		return brackets
	}
//n = 4 --> 8
// ()()()()
// (())()()
// (()())()
// (()()())
// ()(())()
// ()(()())
// ()()(())
// (((())))
//
// n = 5 --> 12
// ()()()()()
// (())()()()
// (()())()()
// (()()())()
// (()()()())
// ()(())()()
// ()(()())()
// ()(()()())
// ()()(())()
// ()()(()())
// ()()()(())
// ((((()))))

	//n = 0 --> 0
	//n = 1 --> 1
	//n = 2 --> 2
	//n = 3 --> 4
	//n = 4 --> 8
	//n = 5 --> 12





	/*

	((((
	((()
	(())
	()))
	))))
	())(
	(
	* */
}

function balancedParens(n) {
	const brackets = new Bracket(n);



	return [];
}

console.log(balancedParens(4));