# Шейкерная сортировка
Шейкерная сортировка (Cocktail sort), она же сортировка перемешиванием, она же двунаправленная сортировка — 
по сути всего лишь оптимизированный алгоритм пузырьковой сортировки.

> Сложность O(n^2)

```javascript
function swap(arr, i, j) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}
function cocktailSort(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        right--;
        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            }
        }
        left++;
    }
    return arr;
}
```