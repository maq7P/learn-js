//https://leetcode.com/problems/assign-cookies/

function findContentChildren(g: number[], s: number[]): number {

  const sortG: number[] = g.sort((a, b) => a - b)
  const sortS: number[] = s.sort((a, b) => a - b)
  
  let iG = 0, iS = 0, count = 0

  while(iS <= sortS.length){
    if(sortS[iS] >= sortG[iG]){
      count++
      iG++
      sortG.unshift()
    }
    iS++
  }

  return count
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([10,9,8,7], [5,6,7,8]));
