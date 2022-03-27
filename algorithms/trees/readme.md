# Дерево
> Дерево — связный граф, не содержащим циклы.

### Рекурсивный и итеративный обход дерева
```javascript
const tree = [
	{
		v: 5,
		c: [
			{
				v:10,
				c: [
					{
						v:11,
					}
				]
			},
			{
				v:7,
				c: [
					{
						v:5,
						c: [
							{
								v:1
							}
						]
					}
				]
			}
		]
	},
	{
		v: 5,
		c: [
			{
				v:10
			},
			{
				v:15
			}
		]
	}
]

const recursive = (tree) => {
	let sum = 0;
	tree.forEach(node => {
		sum += node.v
		if(node.c){
			sum += recursive(node.c)
		}
	})

	return sum
}

const iteration = (tree) => {
	if(!tree.length){
		return 0
  }
  
	let sum = 0;
	let stack = [];
	tree.forEach(node => stack.push(node))
  
  while(stack.length > 0){
		const node = stack.pop();
		sum += node.v
		if(node.c){
			node.c.forEach(child => stack.push(child))
    }
  }
  
  return sum
	
}
```