//https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript

function deepCompare(o1, o2) {
	if(Number.isNaN(o1) && Number.isNaN(o2)){
		return true
	}

	if(typeof o1 !== typeof o2){
		return false
	}

	if(typeof a !== "object" || a === null || b === null){
		return a === b
	}

	if(Object.keys(o1).length !== Object.keys(o2).length){
		return false
	}

	for(const key of Object.keys(o1)){
		if(!deepCompare(o1[key], b[key])){
			return false
		}
	}

	return true
}

console.log()