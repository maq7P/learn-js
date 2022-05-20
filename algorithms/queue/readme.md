### Очередь с O(1) сложностью операций

Данную задачу можно реализовать как минимум двумя способами:
  - С помощью hash-table
  - С помощью LinkedList
  ### С помощью hash-table
```javascript
class Queue {
	#storage = {}
	#last = 0
	#first = 0

	enqueue(item) {
		this.#storage[this.#last] = item
		this.#last++
	}

	dequeue() {
		if(this.size === 0) return new Error("empty data")

		const val = this.#storage[this.#first]
		delete this.#storage[this.#first]
		this.#first++

		return val
	}

	get size() {
		return this.#last - this.#first
	}
	
	getIndex(idx) {
		return #storage[idx]
	}
}
```
### С помощью LinkedList
```javascript
class LinkedList {
	#len = 0
  #head = 0
  #tail = 0
	
  add(val){
		const node = {
			val,
      next: null
    }
		
		if(this.#len === 0){
			this.#head = node
    } 
		
		this.#tail = node
		this.#len++
		
		
  }
	
	removeFirts(){
		if(this.#len === 0){
			return new Error("empty data")
		}

		const val = this.#head.val
		this.#head.val = this.#head.val.next
		this.#len-- 
    
    return val
	}
	
	size(){
		return this.#len
  }
}

class Queue extends LinkedList{
	  constructor(){
			super()
    }

	dequeue(item){
			return super.add(item)
  }
	
	enqueue(){
		  return super.removeFirts()
  }
	
	get size(){
			return super.size()
  }
}
```

```javascript
class Deque {
    constructor() {
        this.front = this.back = undefined;
    }
    addFront(value) {
        if (!this.front) this.front = this.back = { value };
        else this.front = this.front.next = { value, prev: this.front };
    }
    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.front = this.front.prev).next = undefined;
        return value;
    }
    peekFront() { 
        return this.front && this.front.value;
    }
    addBack(value) {
        if (!this.front) this.front = this.back = { value };
        else this.back = this.back.prev = { value, next: this.back };
    }
    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.back = this.back.next).back = undefined;
        return value;
    }
    peekBack() { 
        return this.back && this.back.value;
    }
}

// demo
let deque = new Deque;
console.log(deque.peekFront()); // undefined
deque.addFront(1);
console.log(deque.peekBack()); // 1
deque.addFront(2);
console.log(deque.removeBack()); // 1
deque.addFront(3);
deque.addFront(4);
console.log(deque.peekBack()); // 2
deque.addBack(5);
deque.addBack(6);
console.log(deque.peekBack()); // 6
console.log(deque.removeFront()); // 4
console.log(deque.removeFront()); // 3
console.log(deque.removeFront()); // 2
console.log(deque.removeFront()); // 5
console.log(deque.removeFront()); // 6
console.log(deque.removeFront()); // undefined
```
