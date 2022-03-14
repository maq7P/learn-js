# Генераторы и обход бинарного дерева

> Бинарное дерево — это иерархическая структура данных, в которой каждый узел имеет значение (оно же является в данном случае и ключом) и ссылки на левого и правого потомка

- Родитель имеет два потомка;
- Левый потомок меньше правого;

![](https://habrastorage.org/r/w1560/files/772/ac8/a1e/772ac8a1ed9c4abb862c036a2113a196.png)

### Написание конечного автомата для бинарного дерева
```javascript
const Node = (value, left, right) => ({
	value, 
	left,
	right,

	[Symbol.iterator]() {
		let state = 'center';
		let cursor = null;

		return {
			//итератор - это перечислимый объект, который возваращет сам себя
			[Symbol.iterator]() {
				return this
			}
			next: () = >{
				if(state === 'center'){
					state = 'left';

					return {
						value: this.value,
						done: false
					}
				}

				if(state === 'left'){
					if(this.left == null){
						state = 'right';
					} else {
						cursor = cursor || this.left[Symbol.iterator]();

						const res = cursor.next();

						if(res.done){
							cursor = null;
							state = 'right';

						} else {
							return res;
						}
					}
				}

				if(state === 'right'){
					if(this.right == null){
						state = 'over';

					} else {
						cursor = cursor || this.right[Symbol.iterator]()
						return cursor.next();
					}
				}

				return {
					value: undefined,
					done: true
				}
			}
		}
	}
});

const tree = Node(
	2,
	Node(1, Node(0), Node(5)),
	Node(6,  Node(3), Node(8, Node(5), Node(33)))
);

for(const el of tree){
	console.log(el)
}
```

> Генераторы - это удобная фабрика создания конечных автоматов

```javascript
function* iter(obj) {
	for(let key in obj){
		yield {
			value: obj[el],
			done: false
		}
	}

	yield {
		value: undefined,
		done: true
	}
}

const a = iter({a: 1, b: 2});
//{value: 1, done: false}
a.next();
//{value: 2, done: false}
a.next();
//{value: undefined, done: true}
a.next();
```

### Написание конечного автомата для бинарного дерева с помощью генератора
```javascript
const Node = (value, left, right) => ({
	value, 
	left,
	right,

	*[Symbol.iterator]() {
		yield this.value

		if(this.left != null){
			for(const el of this.left){
				yield el
			}
			/*
				можно заменить на:
				yield* this.left
			*/
		}

		if(this.right != null){
			for(const el of this.right){
				yield el 
			}
			/*
				можно заменить на:
				yield* this.left
			*/
		}
	}
});

const tree = Node(
	2,
	Node(1, Node(0), Node(5)),
	Node(6,  Node(3), Node(8, Node(5), Node(33)))
);

for(const el of tree){
	console.log(el)
}

console.log(...tree) // 2 1 0 5 6 3 8 5 33
```

- Итератор - это объект, который предоставляет универсальный API обхода какой либо сущности
- Перечислимый объект - это объект у которого есть итератор
- Итераторый определены по умолчанию у большенства коллекций в JS
- Можно объявлять и переопределять собственный итераторы
- У простого объекта по умолчанию итератора нет
- Для написания итераторов удобно использовать ф-ии генераторы
- Генератор - это ф-ия, которая возвращает итератор и внутри которой можео использовать операторы yield и yield*
- Для обхода перечислимых объектов появился новый цикл for of
- Spread оператор работает с итераорами обрабатываемых структур
