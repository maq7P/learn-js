//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
	let ns = 0, ew = 0;

	if(walk.length === 10){
		for (let i of walk) {
			if (i === 'n') ns += 1;
			if (i === 's') ns -= 1;
			if (i === 'e') ew += 1;
			if (i === 'w') ew -= 1;
		}
	}
	else
		return false

	return ns === 0 && ew === 0;
}