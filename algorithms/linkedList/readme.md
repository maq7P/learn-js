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
  	find(value) {
	  // Если нет head значит список пуст.
	  if (!this.head) {
	    return null;
	  }

	  let currentNode = this.head;

	  // Перебираем все узлы в поиске значения.
	  while (currentNode) {
	    // Если указано значение, пробуем сравнить его по значению.
	    if (value !== undefined && currentNode.value === value) {
	      return currentNode;
	    }

	    // Перематываем на один узел вперед.
	    currentNode = currentNode.next;
	  }

	  return null;
	}
	
	reverse() {
	  let currNode = this.head;
	  let prevNode = null;
	  let nextNode = null;

	  while (currNode) {
	    nextNode = currNode.next;
	    currNode.next = prevNode;
	    
	    prevNode = currNode;

	    currNode = nextNode;
	  }

	  this.tail = this.head;

	  this.head = prevNode;

	  // Возвращаем список.
	  return this;
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
  deletedNode(){
    if(!this.head){
        return null;
    }
    // if only one node in the list
    if(!this.head.next){
        this.head = null;
        return;
    }
   let previous = this.head;
   let tail = this.head.next;
   
   while(tail.next !== null){
       previous = tail;
       tail = tail.next;
   }
   
   previous.next = null;
   return this.head;
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
