//https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript

//Sort binary tree by levels
//BFS
class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left  = left;
		this.right = right;
	}
}

function treeByLevels (rootNode) {
	if(!rootNode || rootNode?.value === null) return [];

	const stack = [rootNode];
	const sortBinaryTree = [];

	console.log(stack.length)
	while(stack.length){
		const cur = stack.shift();
		sortBinaryTree.push(cur?.value);

		cur?.left && (stack.push(cur.left));
		cur?.right && (stack.push(cur.right));
	}



	return sortBinaryTree;
}

const test1 = new Node(null);
const test2 = new Node(
		10,
		new Node(
				15,
				new Node(20),
				new Node(7)
		),
		new Node(8,
				new Node(10),
				new Node(4)
		)
);
const test3 = new Node(
		10,
		new Node(
				15,
				new Node(20),
				new Node(7)
		),
		new Node(8,
				new Node(10),
				new Node(4)
		)
);
const test4 = new Node(0);
const test5 = new Node(
		2,
		new Node(
				8,
				new Node(1),
				new Node(3)
		),
		new Node(
				9,
				new Node(4),
				new Node(5)
		)
);

console.log(treeByLevels(null))