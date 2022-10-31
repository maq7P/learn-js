//https://leetcode.com/problems/flipping-an-image/

function flipAndInvertImage(image: number[][]): number[][] {
  for(let i = 0; i < image.length; i++){


    for(let j = 0; j < image[i].length; j++){
      const left = j
      const right = image[i].length - 1 - j
      
      if(left > right) break;
      
      [image[i][left], image[i][right]] = [image[i][right], image[i][left]]
    }

    for(let j = 0; j < image[i].length; j++){
      image[i][j]  = image[i][j] == 0 ? 1 : 0
    } 
  }

  return image
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
