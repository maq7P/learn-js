# Связанный список
> O(1) - вставка/удаление в начало/конец/если знаем место
> O(n) - вставка в произвольное место, если не знаем место
> O(n) - поиск

```javascript
class Node{
	constructor(value, next = null){
		this.value = value;
		this.next = next
	}
}

class LinkedListNode {
	_tail = null;
	_head = null;
	_size = 0;

	append(value){
		const newNode = new Node(value);

		if (!this._size){
			this._head = newNode;
			this._size++;
			this._tail = newNode;

			return this
		}

		const prevNode = this._tail;
		prevNode.next = newNode;


		this._tail = newNode;
		this._size++;

		return this
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

	delete(needDelVal){
		if (!this._head) {
			return null
		}

		let cur = this._head;
		let prev = null;
		let deletedNode = null;

		while (cur){
			if(cur.value === needDelVal && !prev){
				deletedNode = this._head;
				if(!this._head.next){
					this._head = null;
					this._tail = null;

					return deletedNode;
				} else {
					const next = cur.next;
					this._head = next;
					cur = next;

					continue;
				}
			}
			if(cur.value === needDelVal && prev){
				deletedNode = cur;
				prev.next = cur.next || null;
				cur = cur.next;
				this._size--;

				continue;
			}

			prev = cur;
			cur = cur.next;
			this._size--;
		}

		return deletedNode
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

const linkedListNode = new LinkedListNode();

linkedListNode.append(1).append(10).showAsArr();
linkedListNode.delete(1);
linkedListNode.showAsArr();
```
