```javascript
const mergeArrays = (leftArr, rightArr) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];
    const rightElement = rightArr[rightIndex];
    if (leftElement < rightElement) {
      result.push(leftElement);
      leftIndex += 1;
    } else {
      result.push(rightElement);
      rightIndex += 1;
    }
  }
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) { // Если длина меньше или равна 1, то массив отсортирован
    return arr;
  }

  // Разделяем на два массива
  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex, arr.length);

  // Рекурсивно сортируем два массива
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Выполняем слияние двух отсортированных массивов
  return mergeArrays(leftSorted, rightSorted);
};

console.log(mergeSort([4, 5, 0, 1])); // [0, 1, 4, 5]
```