# Поиск в ширину в графе
```javascript

//Реализация графа

// ключи - это вершины
// значения - пути из этих вершин
const graph = {}

graph.a = ['b', 'c']
graph.b = ['f']
graph.с = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

//Проверяет, если ли путь из вершины в вершину и высчитывает кратчайший путь в однонапрваленом графе
function breadthSearch(graph, start, end) {
	let queue = [start]
  
  while(queue.length > 0){
	  const cur = queue.shift()
    const el = graph[cur]
    
    !el && (el = [])
    
    if(el.includes(end)){
			return true
    } else {
			queue = [...queue, ...el]
    }
    
  }
}


```

### Этот же граф можно записать с помощью матрицы смежности
```javascript
/*
* ^ a b c d e f g
* a 0 1 1 0 0 0 0
* b 0 0 0 0 0 1 0   
* c 0 0 0 1 1 0 0
* d 0 0 0 0 0 1 0
* e 0 0 0 0 0 1 0
* f 0 0 0 0 0 0 1
* g 0 0 0 0 0 0 0
* */
const matrix = [
		[0, 1, 1, 0, 0, 0, 0],
  	[0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0]
]
```
