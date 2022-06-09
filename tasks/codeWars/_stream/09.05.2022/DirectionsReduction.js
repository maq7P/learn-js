//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){

	const directions = {
		"NORTH": "SOUTH",
		"SOUTH": "NORTH",
		"EAST": "WEST",
		"WEST": "EAST"
	}

	const hash = {
		"NORTH": 0,
		"SOUTH": 0,
		"EAST": 0,
		"WEST": 0
	}

	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]]++;
	}

	console.log(hash)
	for (let i = 0; i < arr.length; i++) {
		const direction = arr[i];
		const oppositeDirection = directions[direction];

		if(hash[oppositeDirection] > 0){
			delete arr[i];
			hash[direction]--;
		}

	}
	return arr.filter(item => !!item)

}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))