# Ошибки и исключения

###Виды ошибок

- EvalError
  Создаёт экземпляр, представляющий ошибку, возникающую в глобальной функции
```javascript
  try {
	  const obj;
	  for(let i = 0; i < 1e10; i++){
			obj[Math.random()] = Math.random();
    }
  } catch (e) { console.log(e.stack) }
```

- SyntaxError
  Создаёт экземпляр, представляющий синтаксическую ошибку, возникающую при разборе исходного кода в функции eval().
```javascript
  try {
	  eval('1++0');
  } catch (e) { console.log(e.stack) }
```

- ReferenceError
  Создаёт экземпляр, представляющий ошибку, возникающую при разыменовывании недопустимой ссылки.
```javascript
  try {
	  bla();
  } catch (e) { console.log(e.stack) }
```

- TypeError
  Создаёт экземпляр, представляющий ошибку, возникающую при недопустимом типе для переменной или параметра.
```javascript
  try {
	null.f();
} catch (e) {
	console.log(e instanceof TypeError); // true
	console.log(e.message);              // "null has no properties" - null не имеет свойств
	console.log(e.name);                 // "TypeError"
	console.log(e.fileName);             // "Scratchpad/1"
	console.log(e.lineNumber);           // 2
	console.log(e.columnNumber);         // 2
	console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
```

- RangeError
  Объект RangeError представляет ошибку, возникающую, когда значение не входит в множество или выходит за диапазон допустимых значений.
```javascript
var check = function(num) {
  if (num < MIN || num > MAX) {
    throw new RangeError('Параметр должен быть между ' + MIN + ' и ' + MAX);
  }
};

try {
  check(500);
}
catch (e) {
  if (e instanceof RangeError) {
    // Обработка ошибки диапазона
  }
}
```
- URIError
  Создаёт экземпляр, представляющий ошибку, возникающую при передаче в функции encodeURI() или decodeURI() недопустимых параметров.

