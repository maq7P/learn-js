/*
* Maze
* have: [[1,0, 0], [0, 0, 0], [0, 0, 0]]
* input: start, end
* output: Is there a path through the maze
* P.S. Zero - is free path
*
 */


//input: {x: 3, y: 0}, {x: 5, y: 5}
//output: true

/* maze example:
[
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
]
* */

const checkPath = (maze, start, end) => {
    if (maze[start.x][start.y] === 0 || maze[end.x][end.y] === 0) return false

    let minPositions, maxPositions;
    if (start.y < end.y) {
        minPositions = start
        maxPositions = end
    } else {
        minPositions = end
        maxPositions = start
    }

    let cursor = minPositions.x
    for (let i = minPositions.y; i <= minPositions.y; i++) {

        if (minPositions.y !== maxPositions.y && maze[i + 1][cursor] === 0) {
            continue;
        }

        if(cursor === 0){
            while(cursor === 0){
                cursor++
            }
        }
    }
}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}))