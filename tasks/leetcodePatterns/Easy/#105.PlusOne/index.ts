
//https://leetcode.com/problems/plus-one/submissions/862272418/
//re
const plusOne = (digits: any) => {
  let str = digits.join("");
  const count = BigInt(str) + BigInt(1);

  const sNumber = count.toString();

  while(digits.length>0){
    digits.pop();
  }

  for (let i = 0, len = sNumber.length; i < len; i++) {
    digits.push(+sNumber.charAt(i));
  }

  return digits;
};