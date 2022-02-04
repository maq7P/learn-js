/* LeetCode
    According to the conditions of the problem: 
    it is necessary to calculate the number of islands in the matrix. An island is 
    considered to be units (1) that are next to each other horizontally and vertically. 
    Matrix cells with zeros are considered water.
*/

const grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0'],
]; // 1
const grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1'],
]; // 3
const grid3 = [
    ['1','1','0','0','1'],
]; // 2

//complexity memory O(1);
//compexity speed O(n*m)
const numberOfIslands = (matrix) => {
    if(matrix.length === 0) return 0;

    let counter = 0;
    let rowsCount = matrix.length;
    let colsCount = matrix[0].length;

    const markNeighbour = (matrix, row, col) => {
        matrix[row][col] = 'fill';

        if(matrix[row][col - 1] === '1'){
            markNeighbour(matrix, row, col - 1)
        }

        if(matrix[row][col + 1] === '1'){
            markNeighbour(matrix, row, col + 1)
        }

        if(matrix[row - 1]?.[col] === '1'){
            markNeighbour(matrix, row - 1, col)
        }

        if(matrix[row + 1]?.[col] === '1'){
            markNeighbour(matrix, row + 1, col)
        }
    }

    for(let row = 0; row < rowsCount; row++){
        for(let col = 0; col < colsCount; col++){
            if(matrix[row][col] === '1') {
                counter++;
                markNeighbour(matrix, row, col)
            }


            
        }
    }
    return counter
}

console.log(numberOfIslands(grid1));
console.log(numberOfIslands(grid2));
console.log(numberOfIslands(grid3));