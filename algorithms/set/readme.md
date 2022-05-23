# Коллекция (значений) (Set)

Коллекция (множество) — одна из основных концепций математики: набор хорошо определенных и обособленных объектов. 
ES6 представил коллекцию, которая имеет некоторое сходство с массивом. Тем не менее, коллекция не допускает включения повторяющихся элементов и не содержит индексов.

Коллекция имеет следующие методы:

- values: вернуть все элементы в коллекции
- size: вернуть количество элементов 
- has: проверить, имеется ли элемент в коллекции 
- add: добавить элемент 
- remove: удалить элемент 
- union: вернуть область пересечения двух коллекций 
- difference: вернуть отличия двух коллекций 
- subset: проверить, является ли одна коллекция подмножеством другой

```javascript
class MySet {
	private collection = [];
	
	has(el){
		return (collection.indexOf(element) !== -1)
  }

	values(){
		return collection
  }

	size(){
		return collection.length
  }

	add(el){
		if(!this.has(el)){
			collection.push(el)
      
      return true
    }

		return false
  }

	del(el){
		if(this.has(el)){
			const idx = collection.indexOf(element)
			collection.splice(idx, 1)
      
			return true
    }

		return false
  }

	union(otherUnion){
		const setUnion = new MySet()

		for(let el of otherUnion.values){
			setsUnion.add(el)
		}
		
		for(let el of this.values){
			setsUnion.add(el)
    }
		
		return setsUnion
  }

	intersection(otherUnion){
		const setIntersection = new MySet()

		for(let el of otherUnion.values){
			if(this.has(el)){
				setIntersection.add(el)
      }
		}
		
		return setIntersection
  }

	difference(otherUnion){
		const setDifference = new MySet()

		for(let el of otherUnion.values){
			if(!this.has(el)){
				setDifference.add(el)
			}
		}
		
		return setDifference
  }

	subset(otherUnion){
		for(let el of this.values){
			if(!otherUnion.has(el)){
				return false
      }
    }
		
		return true
  }
}
```

