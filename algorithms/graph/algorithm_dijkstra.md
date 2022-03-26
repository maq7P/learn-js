# Алгоритм Дейкстры
Находит кратчайшие пути от одной вершины до всех остальных

> Каждой вершине из V сопоставим метку — минимальное известное расстояние от этой вершины до a.
Алгоритм работает пошагово — на каждом шаге он «посещает» одну вершину и пытается уменьшать метки.
Работа алгоритма завершается, когда все вершины посещены.
> ### Инициализация.
> Метка самой вершины a полагается равной 0, метки остальных вершин — бесконечности. 
Это отражает то, что расстояния от a до других вершин пока неизвестны.
Все вершины графа помечаются как непосещённые.
> ### Шаг алгоритма.
> Если все вершины посещены, алгоритм завершается.
В противном случае, из ещё не посещённых вершин выбирается вершина u, имеющая минимальную метку.
Мы рассматриваем всевозможные маршруты, в которых u является предпоследним пунктом. Вершины, в которые ведут рёбра из u, назовём соседями этой вершины. Для каждого соседа вершины u, кроме отмеченных как посещённые, рассмотрим новую длину пути, равную сумме значений текущей метки u и длины ребра, соединяющего u с этим соседом.
Если полученное значение длины меньше значения метки соседа, заменим значение метки полученным значением длины. Рассмотрев всех соседей, пометим вершину u как посещённую и повторим шаг алгоритма.

```javascript
const graph = {}

graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

const BIG_NUMBER = 10000000000;

function shortPath(graph, start, end) {
	const costs = {}
	const processed = []
	let neighbors = {}
  
	Object.keys(graph).forEach(node => {
		if (node !== start) {
			let value = graph[start][node]
			costs[node] = value || BIG_NUMBER
		}
	})
  
	let node = findNodeLowestCost(costs, processed)
	while (node) {
		const cost = costs[node]
		neighbors = graph[node]
		Object.keys(neighbors).forEach(neighbor => {
			let newCost = cost + neighbors[neighbor]
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost
			}
		})
		processed.push(node)
		node = findNodeLowestCost(costs, processed)
	}
	
	return costs
}


function findNodeLowestCost(costs, processed) {
	let lowestCost = BIG_NUMBER
	let lowestNode;
	
	Object.keys(costs).forEach(node => {
		let cost = costs[node]
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost
			lowestNode = node
		}
	})
  
	return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));
```