//TODO: Not resolved
//https://www.codewars.com/kata/5518a860a73e708c0a000027

const groupMod1 = {
	1: 1,
	5: 5,
	6: 6,
	0: 0
}
const groupMod2 = {
	4: {
		0: 4,
		1: 6
	},
	9: {
		0: 9,
		1: 1
	}
}
const groupMod4 = {
	2: {
		0: 2,
		1: 4,
		2: 8,
		3: 6
	},
	3: {
		0: 3,
		1: 9,
		2: 7,
		3: 1
	},
	7: {
		0: 7,
		1: 9,
		2: 3,
		3: 1
	}
}

class GroupMod {
	constructor(as) {
		this.as = as
		console.log('this.as: ', this.as)
		this.number = this.as[0]
		this.degree = 0
		this.#sum()
	}

	#sum(){
		for (let i = 1; i < this.as.length; i++) {
			this.degree += this.as[i]
		}
	}
	// get isValid(){
	// 	if(this.as.length === 0){
	// 		return 1
	// 	}
	// 	const number = this.as[0];
	// 	const endDigitOfNumber = number % 10;
	//
	// 	if(this.as.length === 1){
	// 		return endDigitOfNumber
	// 	}
	//
	// 	for (let i = 1; i < this.as.length; i++) {
	// 		if(this.as[i] === 0){
	// 			return 1
	// 		}
	// 	}
	// }

	get lastDigitOfNumber() {
		return this.number % 10
	}

	get checkLastDigit(){
		new Error("checkLastDigit is necessarily filed")
		return typeof Number
	}
}

class GroupMod1 extends GroupMod {
	mod = 1;
	static pattern = {
		1: 1,
		5: 5,
		6: 6,
		0: 0
	};

	get checkLastDigit(){
		return GroupMod1.pattern[this.lastDigitOfNumber]
	}
}

class GroupMod2 extends GroupMod {
	mod = 2;
	static pattern = {
		4: {
			0: 4,
			1: 6
		},
		9: {
			0: 9,
			1: 1
		}
	};

	get checkLastDigit(){
		return GroupMod2.pattern[this.lastDigitOfNumber][this.degree % this.mod]
	}
}

class GroupMod4 extends GroupMod {
	mod = 4;
	static pattern = {
		2: {
			0: 2,
			1: 4,
			2: 8,
			3: 6
		},
		3: {
			0: 3,
			1: 9,
			2: 7,
			3: 1
		},
		7: {
			0: 7,
			1: 9,
			2: 3,
			3: 1
		}
	};

	get checkLastDigit(){
		return GroupMod4.pattern[this.lastDigitOfNumber][this.degree % this.mod]
	}
}

class GroupModFactory extends GroupMod {
	constructor(as) {
		super(as);
		this.context = null

		this.init();
	}

	init(){
		console.log(Object.keys(GroupMod4.pattern))
		if(Object.keys(GroupMod4.pattern).includes(this.lastDigitOfNumber.toString())){
			this.context = new GroupMod4(this.as);
		}
		if(Object.keys(GroupMod2.pattern).includes(this.lastDigitOfNumber.toString())){
			this.context = new GroupMod2(this.as);
		}
		if(Object.keys(GroupMod1.pattern).includes(this.lastDigitOfNumber.toString())){
			this.context = new GroupMod1(this.as);
		}
	}

	get lastDigitAfterConstruction(){
		console.log(this.context.checkLastDigit)
		return this.context.checkLastDigit
	}

}

const lastDigit = (as) => {

	const groupModFactory = new GroupModFactory(as);
	return groupModFactory.lastDigitAfterConstruction;

}

console.log(lastDigit([3, 4, 2]))
