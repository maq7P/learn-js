```javascript
class Stack {
	constructor(){
		this.stack = new LinkedList();
  }
	push(value){
		this.stack.append(value);
		
		return this.stack.size;
  }
	pop(){
		return this.stack.delete(this.stack.tail.value);
  }
	isEmpty(){
		return !!this.stack.size;
  }
	peak(){
		return this.stack.tail;
  }
}
stack.push(1);
stack.peek(); // 1
stack.pop(); // 1
stack.pop(); // null
stack.isEmpty(); // true
```