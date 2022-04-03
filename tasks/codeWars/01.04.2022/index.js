//https://www.codewars.com/kata/529bf0e9bdf7657179000008


//algorithm of solution:

// 1) Check each row for duplicates.
// 2) Check each column for duplicates.
// 3) Check each 3x3 sub grid for duplicates.
// 4) Return false if any duplicates are found, and true if no duplicates are found.
//
// The plan is as follows:
//
// Set up 3 arrays, each of which contain 9 arrays
// An array for the columns to contain all 9 columns
// An array for the rows to contain all 9 rows
// An array for the sub grids to contain all 9 sub grids
// Loop through the entire board and check each cell for a value. If the cell has a value add it to our appropriate row, column and sub grid arrays.
//
// Check each of our arrays for duplicate values. If there are duplicates, return false, if there are no duplicates, return true.

//matrix 9x9

const createArray = (count, fill) => new Array(count).fill(fill);

const isNumber = function isNumber(value)
{
	return typeof value === 'number' && isFinite(value);
}

function validSolution(board){
	const lenBoard = board.length;

	// const rows = createArray(lenBoard,  new Array(0));
	// const columns = createArray(lenBoard, new Array(0));
	// const boxes = createArray(lenBoard, new Array(0));
	const validateMatrix = [];
	const rows = [];
	const columns =[];
	const boxes =[];

	for (let i = 0; i < lenBoard; i++) {
		rows.push([]);
		columns.push([]);
		boxes.push([]);
		validateMatrix.push(i+1);
	}

	// FILL COL AND ROW
	for (let i = 0; i < lenBoard; i++) {
		for (let j = 0; j < lenBoard; j++) {
			const cell = board[i][j];
			if(isNumber(cell)) {
				rows[i].push(cell);
				columns[j].push(cell);

				let boxIndex = Math.floor((i / Math.floor(Math.sqrt(lenBoard)))) * 3 + Math.floor(j / Math.floor(Math.sqrt(lenBoard)));
				boxes[boxIndex].push(cell);
			}
		}
	}

	const isValidate = (matrix) => {
		let isValid = true;
		matrix
				.map(item => item.sort())
				.forEach((item, i) => {
					if(JSON.stringify(item) !== JSON.stringify(validateMatrix)){
						isValid =  false
					}
				})
		return isValid
	}

	return isValidate(columns) && isValidate(rows) && isValidate(boxes);
}

console.log(validSolution([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]
]))