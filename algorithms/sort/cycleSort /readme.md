# Cycle sort 
Применяется в задачах, когда содержится множество от 1 до n
Сортировка проиховдится по индексу массива

> Сложность в {1, n} -> O(n^2)

```javascript
function cycleSort(arr){
	let checker = 0
  
  while(checker < arr.length){
		const sortIdx = arr[checker] - 1
		if(sortIdx === checker){
			checker++;
			continue;
    }
		
		[arr[sortIdx], arr[checker]] = [arr[checker], arr[sortIdx]]
  }
	
	return arr
}
```

