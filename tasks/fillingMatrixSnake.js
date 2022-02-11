
//complexity time: O(n**2)
//complexity memory: O(1)
const fillMatrixSnake = (width, height) => {
    const matrix = new Array(height).fill().map(() => new Array(width).fill(""));

    let counter = 1;
    let startCol = 0;
    let endCol = width - 1;
    let startRow = 0;
    let endRow = height - 1;

    while(startCol <= endCol && startRow <= endRow){
        for(let i = startCol; i <= endCol; i++){
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++){
            matrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for(let i = endCol; i >= startCol; i--){
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            matrix[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return matrix
}

console.log(fillMatrixSnake(5,5));