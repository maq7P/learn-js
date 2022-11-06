//https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

function spiralize (n) {
  if(n < 1) return []

  const matrix = new Array(n).fill().map(() => new Array(n).fill(0))

  const FILL = 1;

  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  while(startCol <= endCol && startRow <= endRow){
    for(let i = startCol; i <= endCol; i++){
      if(matrix?.[startRow + 1]?.[i] !== FILL && matrix?.[startRow]?.[i + 1] !== FILL){
        matrix[startRow][i] = FILL
      }
    }
    startRow++

    for(let i = startRow; i <= endRow; i++){
      if(matrix?.[i + 1]?.[endCol] !== FILL && matrix?.[i]?.[endCol - 1] !== FILL){
        matrix[i][endCol] = FILL
      }
    }
    endCol--

    for(let i = endCol; i >= startCol; i--){
      if(!endCol ? matrix[endRow][i - 1] !== FILL : matrix[endRow][i - 1] !== FILL && matrix[endRow - 1][i] !== FILL){
        matrix[endRow][i] = FILL
      } else startCol++
    }
    endRow--

    startRow++
    for(let i = endRow; i >= startRow; i--){
      if(matrix?.[i - 1]?.[startCol] !== FILL && matrix?.[i]?.[startCol + 1] !== FILL){
        matrix[i][startCol] = FILL;
      }
    }
    startCol++
    endCol--
    endRow--

  }

  matrix.forEach(row => console.log(JSON.stringify(row)))
  return matrix
}

spiralize(34);
// console.log(JSON.stringify(spiralize(5)));

// 00000
// ....0
// 000.0
// 0...0
// 00000

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000