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
				node.right = newNode
			} else node.left = newNode
		}

		return this
	}
	print(root = this.root){
		console.log(root.val)
		root?.left && print(root.left)
		root?.right && print(root.right)
	}
}
const convertSortedArrToBinaryTree = (sortedArr) => {

	const binaryTree = new BinaryTree();

	if (sortedArr.length === 1) return binaryTree.add(sortedArr[0]);
	if (sortedArr.length === 0) return binaryTree.add(null);

	let rootIdx = Math.floor(sortedArr.length / 2);
	let root = sortedArr[rootIdx];
	let leftSide = binaryTree.add(convertSortedArrToBinaryTree(sortedArr.slice(0, rootIdx)));
	let rightSide = binaryTree.add(convertSortedArrToBinaryTree(sortedArr.slice(rootIdx, -1)));

	return binaryTree
}

// const binaryTree = new BinaryTree();
// console.log(binaryTree.add(5))
// console.log(binaryTree.add(10))
// console.log(binaryTree.add(20))




//Simple implement
function BinaryTreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

const sortedArrayToBST = (nums) => {
	//базовые случаи
	if (nums.length === 1) return new BinaryTreeNode(nums[0]);
	if (nums.length === 0) return null;

	//создаём вершину
	let centerIdx = Math.floor(nums.length/2);
	let root = new BinaryTreeNode(nums[centerIdx]);

	//устанавливаем левую вершину на центр левого поддерева
	let leftSubtree = nums.slice(0,centerIdx);
	root.left = sortedArrayToBST(leftSubtree);

	//устанавливаем правую вершину на центр правого поддерева
	let rightSubtree = nums.slice(centerIdx+1,nums.length);
	root.right = sortedArrayToBST(rightSubtree);

	return root;
};

console.log(sortedArrayToBST([1,2,3,4,5,6]))

const binaryTree = new BinaryTree();
binaryTree.add(3)
binaryTree.add(2)
binaryTree.add(1)
binaryTree.add(5)
binaryTree.add(4)
binaryTree.print()
