/*
Дан сортированный по возрастанию массив элементов,
преобразуйте его в сбалансированное двоичное дерево поиска.
* */
class TreeNode {
	constructor(val){
		this.val = val
		this.left = null
		this.right = null
	}
}
class BinaryTree{
	constructor(){
		this.root = null
	}
	add(val){
		if(!this.root){
			this.root = new TreeNode(val)
		} else {
			let node = this.root
			let newNode = new TreeNode(val)

			while(node){
				if(val > node.val){
					if(!node.right) break
					node = node.right
				} else {
					if(!node.left) break
					node = node.left
				}
			}
			if(val > node.val){
				node.right = val
			} else node.left = val
		}
	}
	print(root = this.root){
		console.log(root.val)
		root.left && print(root.left)
		root.right && print(root.right)
	}
}
const convertSortedArrToBinaryTree = (sortedArr) => {
	if(sortedArr.length < 3){
		return new Error("Binary tree necessary tree node");
	}

	const binaryTree = new BinaryTree();

	let rootIdx = Math.floor(sortedArr.length / 2);
	let root = sortedArr[rootIdx];
	let leftSide = sortedArr.slice(0, rootIdx);
	let rightSide = sortedArr.slice(rootIdx, -1);

	if(sortedArr.length === 3){
		return new TreeNode(
					sortedArr[1],
					new TreeNode(sortedArr[0], null),
					new TreeNode(sortedArr[2], null)
			);
	}

	if(sortedArr.length === 4){
		return new TreeNode(
				sortedArr[1],
				new TreeNode(sortedArr[0], null),
				new TreeNode(sortedArr[2], sortedArr[3])
		);
	}

	if(sortedArr.length === 5){
		return new TreeNode(
				sortedArr[2],
				new TreeNode(sortedArr[1], sortedArr[0]),
				new TreeNode(sortedArr[2], sortedArr[3])
		);
	}

	return binaryTree.add(
			new TreeNode(
					root,
					convertSortedArrToBinaryTree(leftSide),
					convertSortedArrToBinaryTree(rightSide)
			)
	)
}

convertSortedArrToBinaryTree([1,2,3,4,5,6])