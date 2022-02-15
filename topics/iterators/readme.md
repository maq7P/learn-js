##### value - любое значение; next - функция, вызывающая следующее значенеи; done - флаг завершения.
```javascript
const a = {
	a: 1,
	b: 2
}

const b = [1,2,3];

// {value, done}
// {next() {}}
//function objToIter(obj) {
//
//}

//function arrToIter(obj) {
//
//}

//const aIter = arrToIter(a);
const aIter = a[Symbol.iterator]();

for(let el = aIter.next(); !el.done; el = aIter.next()){
	//какие-то действия
}
// цикл выше индентичен этому

/*
for of также смотрит итератор ли, поэтому можно сразу передавать итерируемую струкутуру
String, Array, Set, Map

	for(const el of a)
*/
for(const el of a[Symbol.iterator]()){
	// действия
}
```

### Реализация конечного автомата
##### Если итерироваться с по класическому ассоциативному массиву (объекту), то в JS в нём нужно реалищовывать собственный итератор.

> error: Uncaught TypeError: {(intermediate value)} is not iterable

```javascript
	const a = {
		a: 1,
		b: 2,
		
		[Symbol.iterator]() {
			let cursor = 0;
			const keys = Object.keys(this);
			
			return {
				next: () => {
					const curCursor = cursor;
					cursor++;
					
					return {
						value: this[keys[curCursor]],
						done: curCursor >=  keys.length
					}
				}
			}
		}
	}
```