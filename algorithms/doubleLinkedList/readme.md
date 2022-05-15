### Двусвязанный список
Двусвязный список - это структура связанных данных, которая состоит из набора последовательно-связанных записей, 
называемых узлами. Каждый узел содержит два поля, называемые ссылками, которые являются ссылками на предыдущий (previous) 
и последующий (next) узел.

![](https://hsto.org/r/w1560/webt/9z/q6/w4/9zq6w4tzi02yn6h1c8xhsr2a9tq.png)

```javascript
class Node{
	constructor(value, next = null, prev = null){
		this.value = value;
		this.next = next
    this.prev = prev
	}
}

class DoubleLinkedListNode {
	_tail = null;
	_head = null;
	_size = 0;

	append(value){
		const newNode = new Node(value);

		if (!this._size){
			this._head = newNode;
			this._tail = newNode;
			this._size++;

			return this
		}

		const prevNode = this._tail;
		
		prevNode.next = newNode;
		prevNode.prev = prevNode;
		this._tail = newNode;
		this._size++;

		return this;
	}

	prepend(value){
		const node = new Node(value);

		if (!this._size){
			this._head = node;
			this._tail = node;
			this._size++;

			return this
		}
		
		const oldHead = this._head;
		this._head = node;
		this._head.next = oldHead;
		oldHead.prev = this._head;

		return this
	}

	find(needFindVal){
		if (!this._head){
			return null
		}

		let cur = this._head;
		while (cur.next){
			if (cur.value === needFindVal){
				return cur
			}
			cur = cur.next
		}

		return null
	}
	
  //Нужно модифициорвать с использованием prev класса Node
	delete(value) {
		if (!this._head) {
			return null;
		}

		let deletedNode = null;
		let currentNode = this._head;

		while (currentNode) {
			if (currentNode.value === value) {
				deletedNode = currentNode;

				if (deletedNode === this._head) {
					this.head = deletedNode.next;

					if (this._head) {
						this._head.previous = null;
					}

					if (deletedNode === this._tail) {
						this.tail = null;
					}
				} else if (deletedNode === this._tail) {
					this.tail = deletedNode.previous;
					this.tail.next = null;
				} else {
					const previousNode = deletedNode.previous;
					const nextNode = deletedNode.next;

					previousNode.next = nextNode;
					nextNode.previous = previousNode;
				}
			}

			currentNode = currentNode.next;
		}

		return deletedNode;
	}


	toArr(){
		if (!this._head) {
			return []
		}
		let cur = this._head;
		let arr = [];

		while (cur){
			arr.push(cur.value);
			cur = cur.next;
		}

		return arr;
	}

	showAsArr(){
		console.log(this.toArr())

		return this;
	}

	get tail(){
		return this._tail
	}
	get head(){
		return this._head
	}
}

const doubleLinkedListNode = new DoubleLinkedListNode();

doubleLinkedListNode.append(1);
doubleLinkedListNode.append(2);
doubleLinkedListNode.append(3);
doubleLinkedListNode.append(1);
doubleLinkedListNode.showAsArr();
```

