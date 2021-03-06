# Перебираемые объекты

Перебираемые (или итерируемые) объекты – это концепция, которая позволяет использовать любой объект в цикле for..of.

Конечно же, сами массивы являются перебираемыми объектами. Но есть и много других встроенных перебираемых объектов, например, строки.

Если объект не является массивом, но представляет собой коллекцию каких-то элементов, то удобно использовать цикл for..of для их перебора, так что давайте посмотрим, как это сделать.

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
> Конечный автомат - это некторое математическое устройство, у которого есть вход и выход, некоторое состояние которое меняется , в зависимости от предыдущего состояния.

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

### Реализация конечного автомата для объекта range
```javascript

let range = {
	from: 1,
	to: 5,

	[Symbol.iterator]() {
		this.current = this.from;
		return this;
	},

	next() {
		// ...она возвращает объект итератора:
		// 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
		return {
			current: this.from,
			last: this.to,

			// 3. next() вызывается на каждой итерации цикла for..of
			next() {
				// 4. он должен вернуть значение в виде объекта {done:.., value :...}
				if (this.current <= this.last) {
					return { done: false, value: this.current++ };
				} else {
					return { done: true };
				}
			}
		};
  	}
}

// теперь работает!
for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}
```

### Реализация конечного автомата для (пример лампы)
```javascript
function *Switcher(){
	try {
		let state = 0;

		while(true){
			++state === 5 && (state = 0)

			state = yield state
		}
	} catch(e){
		if(e === 'boom'){
			//какая-то логика
    }
  }
}

const switcher = Switcher();
switcher.next() // {value: 1, done: false}
switcher.next() // {value: 2, done: false}
switcher.next() // {value: 3, done: false}
switcher.next() // {value: 4, done: false}
switcher.next() // {value: 5, done: false}
switcher.next() // {value: 0, done: false}
switcher.next(3) // {value: 3, done: false} //можно пробрасывать и yeild будет читать то, что в next

switcher.throw('boom');
```



### Реализация async/await с помощью генератора
```javascript
function* fetchSomething(){
	try {
		const a = yield fetch('url1');
		const b = yield fetch('url2');

		return [a, b]
	} catch {
		return []
  }
}

function executer(iter, value) {
	const res = iter.next(value);
	const promise = Promise.resolve(res.value);
	
	if(res.done){
		return promise;
  }

	return promise.then(
    (val) => executer(iter, val), 
    (err) => {
			const res = iter.throw(err)
      
      if(res.done){
				return res.value
      }
			
			return executer(iter, res.value)
		})
}

executer(fetchSomething())
    .then((val) => {
      console.log(cal)
    })
    .catch()
    .finally()
```
### Асинхронный forEach` с помощью генератора
```javascript
function* _forEach(iter, fn){
	let
      time = Date.now();
	for (const el of iter) {
		fn(el);
		
		if(Date.now() - time > 300) {
			yield;
			time = Date.now();
    }
  }
}
//Тот же executer только в ф-ией sleep внутри
const forEach = (...args) => executer(_forEach(...args));

forEach(new Array(1e8), console.log).then() 
```
