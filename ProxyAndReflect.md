# Proxy и Reflect

Объект Proxy «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно обрабатывать) разные действия с ним,
например чтение/запись свойств и другие. Далее мы будем называть такие объекты «прокси».

- target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
- handler – конфигурация прокси: объект с «ловушками» («traps»): методами, которые перехватывают разные операции, например, ловушка get – для чтения свойства из target, ловушка set – для записи свойства в target и так далее.

Обычно при чтении из массива несуществующего свойства возвращается undefined, но мы обернём обычный массив в прокси, который перехватывает операцию чтения свойства из массива и возвращает 0, 
если такого элемента нет:

```javascript

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (нет такого элемента)

```

Тоже самое для слоавря
```javascript
dictionary = new Proxy(dictionary, {
  get(target, phrase) { 
    if (phrase in target) { 
      return target[phrase]; 
    } else {
      return phrase;
    }
  }
});
```

# Валидация с ловушкой «set»

Ловушка set срабатывает, когда происходит запись свойства.

```javascript
let numbers = [];

numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
alert("Длина: " + numbers.length); // 2

numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)

alert("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");
```

Для перехвата пустого объекта с помощью ownKeys нужно переопределить дескриптор
```javascript
let user = { };

user = new Proxy(user, {
  ownKeys(target) { // вызывается 1 раз для получения списка свойств
    return ['a', 'b', 'c'];
  },

  getOwnPropertyDescriptor(target, prop) { // вызывается для каждого свойства
    return {
      enumerable: true,
      configurable: true
      /* ...другие флаги, возможно, "value: ..." */
    };
  }

});
alert( Object.keys(user) ); // a, b, c
```




