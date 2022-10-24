//https://leetcode.com/problems/can-place-flowers/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if(flowerbed.length === 1 && flowerbed[0] === 0) return 1 === n

  let canBePlanted = 0, checker = [flowerbed[0]], i = 1

  if(flowerbed[0] === 0 && flowerbed[1] === 0){
    canBePlanted++
    checker[0] = 1
    i = 2
  }
  
  for(;i < flowerbed.length; i++){            
    if(checker[checker.length - 1] === 0 
      && flowerbed[i] === 0
      && flowerbed[i + 1] !== 1){

      checker[checker.length - 1] = 1
      canBePlanted++
    } else {
      checker.push(flowerbed[i])
    }
  }

  return canBePlanted === n
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
console.log(canPlaceFlowers([0,0,1,0,1], 1));
console.log(canPlaceFlowers([0,0,1,0,0], 2));
