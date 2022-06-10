/*

we have a rectangular brick wall made of bricks. All bricks are the same height, but can be detected. 
Each row can always have a different number of different bricks, but the width of all rows of bricks will be the same.
If you draw a vertical line along the wall, then such a line will cover such and such a number of bricks. 
A significant number of bricks must be found that can span such a vertical line. 
It is important to note that if a line passes through the junction of two bricks, then this is not considered an intersection. 
One more thing - we cannot draw a line from one side of the wall - the line must be exactly inside the part of the wall.

input: [[1,2,2,1], [3,1,2], [1,3,2], [2,4], [3,1,2], [1,3,1,1]]
output: 2

*/

// memory O(m)
// speed O(n*m)

const wall = [[1,2,2,1], [3,1,2], [1,3,2], [2,4], [3,1,2], [1,3,1,1]];

const leastBricks = (wall) => {
    let map = {}
    let max = 0;

    for(let i = 0; i < wall.length; i++){
        let sum = 0;
        for(let j = 0; j < wall[i].length - 1; j++){
            sum += wall[i][j];
            map[sum] = map[sum] ? map[sum] + 1 : 1;
            max = Math.max(map[sum], max)
        }
    }

    return wall.length - max
}
leastBricks(wall)