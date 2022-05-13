const denominations = [1, 5, 10, 50, 100, 1000, 2000, 5000];

const items = [
	{ name: 'pack', weight: 30, cost: 30 },
	{ name: 'phone', weight: 33, cost: 25 },
	{ name: 'book', weight: 20, cost: 22 },
	{ name: 'auto', weight: 10, cost: 20 },
	{ name: 'pony', weight: 8, cost: 17 },
	{ name: 'horse', weight: 15, cost: 15 },
	{ name: 'toy', weight: 5, cost: 12 }
];

function knapsack(items, weight){
	let tempWeight = weight;
	const res = [];

	for (let i = 0; i < items.length; i++) {
		const item = items.sort((a, b) => b - a)[i];

		if(item.weight <= tempWeight){
			tempWeight -= item.weight;
			res.push(item.name)
		}
		
	}

	return res.sort()
}

console.log(knapsack(items, 121))