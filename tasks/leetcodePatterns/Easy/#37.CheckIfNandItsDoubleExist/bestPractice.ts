function checkIfExistBestPractice(arr: number[]): boolean {
  const seen = new Set()
  
  for(const num of arr){
    if(seen.has(num * 2) || seen.has(num / 2)){
      return true
    }
    seen.add(num)
  }

  return false
}

console.log(checkIfExist([10,2,5,3,0]));
console.log(checkIfExist([0, 0]));
console.log(checkIfExist([0]));