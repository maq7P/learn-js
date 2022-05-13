/*
* Вы на первой ступеньке лестницы длинной в n ступенек, вы можете передвигаться таким способом, наступить на следующую ступеньку, или перешагнуть через одну.
* При этом на каждой ступеньке вы платите какое-то количество денег. Стоимость первой ступеньки также учитывается.
* Ваша цель — подняться на последнюю ступеньку, заплатив как можно меньше денег.
Решите это упражнение, используя динамическое программирование.
*
* */

function tollStaircase(stairs){
	let weight = 0;
	for (let i = 0; i < stairs.length; i++) {
		const thisStair = stairs[i];
		const nextStair = stairs?.[i + 1];

		if(nextStair && nextStair <= thisStair){
			weight += nextStair;
			if(i > 0) i++;
			continue;
		}

		weight += thisStair
	}

	return weight
}

const tollStaircase2 = (steps) => {
	if(steps.length < 2) return steps

	let first = steps[0];
	let second = steps[1] + steps[0];

	for (let i = 2; i < steps.length; i += 1) {
		const current = Math.min(first, second) + steps[i];
		first = second;
		second = current;
	}

	return second;
};

// console.log(tollStaircase([1, 13, 17, 2, 8, 7, 19, 6]))
// console.log(tollStaircase([1, 13, 17, 2, 8, 7, 19, 6].reverse()))
console.log(tollStaircase2([3,1,2,4]))
console.log(tollStaircase([3,1,2,4]))
// console.log(tollStaircase2([92, 92, 93, 92, 92, 92, 93, 93]))
// console.log(tollStaircase2([92]))