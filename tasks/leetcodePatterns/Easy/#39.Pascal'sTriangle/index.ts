//https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
  let triangle = [[1], [1,1]]

  if(numRows === 1) return [triangle[0]]
  if(numRows === 2) return triangle

  for(let i = 3; i <= numRows; i++){
    const prevLine = triangle[i - 2]
    const middlePart = []

    for(let j = 1; j < prevLine.length; j++){
      const curSum = prevLine[j - 1] + prevLine[j]
      middlePart.push(curSum)
    }
    triangle.push([1, ...middlePart, 1])
  }

  return triangle
};

console.log(generate(5));

//solution with biomenal coefficient https://www.geeksforgeeks.org/pascal-triangle/
