function shiftedDiff(first,second){
	if(first.length !== second.length){
		return -1
	}

	let counter = 0;
	for (let i = 0; i < first.length; i++) {
		if(first.slice(first.length - i, first.length) + first.slice(0, first.length - i) === second){
			return counter
		}
		counter++;
	}

	return -1
}

/*
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
* */
console.log(shiftedDiff("coffee", "eecoff"))