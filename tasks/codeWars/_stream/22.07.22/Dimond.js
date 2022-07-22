//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(val){
	let y, w, shape = '';

	for(y = 0; y < val * 2 - 1; y++) {
		w = y < val ? y : val * 2 - y - 2;
		shape += Array(val - w).join(' ') + Array(w + 1).join('* ') + '*\n';
	}

	return shape;
}