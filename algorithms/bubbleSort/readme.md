### Соритровка пузырьком

![](https://miro.medium.com/max/474/1*YdnJ16FXjwlwS8S4tqvx7g.jpeg)

```javascript
const arr = Array(100000).fill(null).map(item => Math.floor(Math.random() * 2000 - 1000));

// time complexity O(n**2)
const bubbleSort = (arr) => {
    for(let n = 0; n < arr.length; n++){
        for(let i = 0; i < arr.length - (n + 1); i++){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }

    return arr
}

bubbleSort(arr);
```