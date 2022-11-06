//https://leetcode.com/problems/license-key-formatting/

function licenseKeyFormatting(s: string, k: number): string {
  let res = ""

  for(let char of s.split("-").join("").split("").reverse()){
    if((res.length + 1) % (k + 1) === 0){
      res += "-"
    }
    res += char.toUpperCase()
  }

  return res.split("").reverse().join("")
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
