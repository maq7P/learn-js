# Простая реализация бинарного дерева поиска
##### Вставка/удаление - O(log2n)
##### Поиск - O(log2n)

### Простая реализация (с использованием конечных автоматов реализация [тут](https://github.com/maq7P/learn-js/tree/main/topics/Iterators/binaryTree))
```javascript
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

			while(cur){
				if(val > cur.val){
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
class TreeNode {
	constructor(val){
		this.val = val
    this.left = null
    this.right = null
  }
}
```