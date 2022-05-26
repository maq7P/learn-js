//https://www.codewars.com/kata/5376b901424ed4f8c20002b7/train/javascript

// Найти ближайшие точки по заданным координатам точек
/*
  1  2  3  4  5  6  7  8  9
1
2    . A
3                . D
4                   . F
5             . C
6
7                . E
8    . B
9                   . G
* */
const points = [
	[2,2], // A
	[2,8], // B
	[5,5], // C
	[6,3], // D
	[6,7], // E
	[7,4], // F
	[7,9]  // G
];

//p between points
const getDistance = (p1, p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)


//Решение в O(N**2) // не пройдет на больших данных
function closestPair(points) {
	const closest = {
		points: [points[0], points[1]],
		dist: getDistance(points[0], points[1])
	};

	for (let i = 0; i < points.length - 1; i++) {
		const pairI = points[i];

		for (let j = i + 1; j < points.length; j++) {
			const pairIJ = points[j];
			const curDistance = getDistance(pairI, pairIJ)
			console.log(pairI, pairIJ, curDistance)
			if(curDistance < closest.dist){
				closest.points = [pairI, pairIJ]
				closest.dist = curDistance
			}
		}
	}

	return closest.points
}

console.log(closestPair(points))