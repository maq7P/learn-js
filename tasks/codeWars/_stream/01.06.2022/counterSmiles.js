//https://www.codewars.com/kata/583203e6eb35d7980400002a
let test = [";~D" , ":o>" , ";~)" , ":)" , ";~>" , ":(" , ";D"]
let validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]

const countSmileys = (arr, validSmileys) => {
	if ( arr.length === 0 )  {
		return 0;
	}
	let counter = 0;
	for (let face of arr) {
		if (validSmileys.includes(face)) {
			counter++;
		}
	}
	return counter;
}

countSmileys(test, validSmileys)