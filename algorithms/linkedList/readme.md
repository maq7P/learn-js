# Связанный список
> O(1) - вставка/удаление в начало/конец/если знаем место
> O(n) - вставка в произвольное место, если не знаем место
> O(n) - поиск

```javascript
class LinkedList {
	constructor() {
		this.size = 0
		this.root = null
  }
	
	add(value){
		if(this.size === 0) {
			this.root = new Node(value)
			this.size++
			return true
    }
		let node = this.root
		while(node.next){
			node = node.next
    }
		let newNode = new Node(value)
    node.next = newNode
    this.size++
  }
	get size(){
		return this.size
  }
	toArr() {
		let result = []
    let node = this.root
    while(node) {
			result.push(node.value)
      node = node.next
    }
		
		return result
  }
}

class Node {
	constructor(value) {
		this.value = value
    this.next = null
  }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.size
console.log(list.toArr())
```