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