function rotate(matrix, direction) {
	const mtxLen = matrix.length;

	if(!matrix || !mtxLen){
		return;
	}

	let rotate = [];

	for (let i = 0; i < matrix[0].length; i++) {
		rotate.push([])
	}

	console.log('rotate: ', rotate)
	for (let i = 0; i < mtxLen; i++) {
		//TODO: Не работает не прямоугольной матрице
		const rowLen = matrix[i].length;

		for (let j = 0; j < matrix[0].length; j++) {
			console.log(rowLen - i)
			direction === "counter-clockwise"
				&& rotate[rowLen - i - 1].push(matrix[j][i])
			direction === "clockwise"
				&& rotate[i].push(matrix[rowLen - j - 1][i])
		}

	}
	console.log(rotate)
}
//
// rotate([
// 			[1, 2, 3],
// 			[4, 5, 6],
// 			[7, 8, 9]
// 		]
// , 'counter-clockwise')

rotate([
			[1,2,3],
			[4,5,6],
			[7,8,9],
			[10,11,12]
		]
, 'counter-clockwise')