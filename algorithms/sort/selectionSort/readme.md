# Сортировка выбором

За каждый проход по массиву выбрать минимальный элемент (для сортировки по возрастанию) и поменять его местами с первым элементом в еще не отсортированном участке массива, тем самым уменьшив длину этого участка на один, и так до тех пор пока не будут отсортированы все элементы.

![](https://miro.medium.com/max/200/1*8guImFhbPKA4Q9k84sNaaA.gif)

```javascript
const arr = Array(100000).fill(null).map(item => Math.floor(Math.random() * 2000 - 1000));

// time complexity O(n**2)
const selectionSort = (arr) => {
    for(let n = 0; n < arr.length; n++){
        let indexMin = i;

        for(let i = 0; i < arr.length - (n + 1); i++){
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }

        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return arr
}

```
