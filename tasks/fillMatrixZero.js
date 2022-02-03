/*  LeetCode — Set Matrix Zeros.

    We are given the original matrix filled with numbers. 
    It is necessary for all cells that contain 0 to reset the entire row and column in which such a cell is located. 
    Of the additional conditions, it is indicated that it is necessary to solve the problem with a constant memory O (1)
*/

// #1
// input: matrix = [[1,1,1], [1,0,1], [1,1,1]]
// output: [[1,0,1], [0,0,0], [1,0,1]]
// #2
// input: matrix = [[0,1,2,0], [3,4,5,2], [1,3,4,5]]
// output: [[0,0,0,0], [0,4,5,0], [0,3,4,0]]
// #3 (vertical vector)
// input: matrix = [[0], [3], [2], [1]]
// output: [[0,0,0,0], [0,4,5,0], [0,3,4,0]]
// #4 (horizontal vector)
// input: matrix = [1,2,3,0]
// output: [0,0,0,0]

// compexity speed: O(n*m)
// complexity memory: O(1)
const fillMatrixZero = (matrix) => {
    if(!(matrix[0] instanceof Array)){
        if(matrix.includes(0)){
            for(let i = 0; i < matrix.length; i++){
                matrix[i] = 0
            }
        }

        return matrix
    }

    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    let isCol = false;

    for(let i = 0; i < ROWS; i++){
        matrix[i][0] === 0 && (isCol = true);

        for(let j = 1; j < COLS; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }   

    for(let i = 1; i < ROWS; i++){
        for(let j = 1; j < COLS; j++){
            (matrix[i][0] === 0 || matrix[0][j] === 0) 
                && (matrix[i][j] = 0);
            
            
        }
    }  
    
    if(matrix[0][0] === 0){
        for(let j = 1; j < COLS; j++){
            matrix[0][j] = 0;
        }
    }

    if(isCol){
        for(let i = 1; i < ROWS; i++){
            matrix[i][0] = 0;
        }
    }

    return matrix
}

console.log(fillMatrixZero([[0,1,2,0], [3,4,5,2], [1,3,4,5]]));