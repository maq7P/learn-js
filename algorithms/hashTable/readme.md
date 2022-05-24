# Hash Table

Хеш-таблица — это структура данных, которая строится по принципу ключ-значение. Из-за высокой скорости поиска значений по ключам, она используется в таких структурах, как Map, Dictionary и Object. Как показано на рисунке, хеш-таблица имеет hash function, преобразующую ключи в список номеров, которые используются как имена (значения) ключей. Время поиска значения по ключу может достигать O(1). Одинаковые ключи должны возвращать одинаковые значения — в этом суть функции хэширования.

![](https://hsto.org/r/w1560/webt/bb/hg/og/bbhgogykaxr4ccp1k5i09ltkmok.png)

```javascript
//Simple hash function
function hash(string, max) {
	let hash = 0
	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i)
	}
	return hash % max
}

class HashTable {
	private storage = [];
	private storageLimit = 4;
	
	get storage(){
		return this.storage
  }
	get storageLimit(){
		return this.storageLimit
	}
	
	public add(key, value){
		let index = hash(key, storageLimit)
		
		if (!storage[index]) {
			storage[index] = [
				[key, value]
			]
		} else {
			let inserted = false
      
			for (let i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					storage[index][i][1] = value
					inserted = true
				}
			}
			if (!inserted) {
				storage[index].push([key, value])
			}
		}
	}

	public remove(key){
		let index = hash(key, storageLimit)
    
		if (storage[index].length === 1 && storage[index][0][0] === key) {
			delete storage[index]
		} else {
			for (let i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					delete storage[index][i]
				}
			}
		}
	}
	
	public takeVal(key){
		let index = hash(key, storageLimit)
    
    if(!storage[index]) 
			return undefined
    
    for(let i = 0; i < storage[index].length; i++){
			if(storage[index][i][0] === key){
				return storage[index][i][1]
      }
    }
  }
	
	get show(){
		let presentation = "";
		
		if(!storage.length)
			return "Empty data"
    
		for(let i = 0; i < storage.length; i++){
			if(!storage[i].length) continue;
			
			for(let j = 0; j < storage[i].length; j++){
				presentation += `${storage[i][0]} : ${storage[i][1]}` + '\n'
      }
    }
		
		return presentation
  }
}
```