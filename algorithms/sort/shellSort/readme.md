# Сортировка Шелла
алгоритм сортировки, являющийся усовершенствованным вариантом сортировки вставками. 
Идея метода Шелла состоит в сравнении элементов, стоящих не только рядом, но и на 
определённом расстоянии друг от друга. Иными словами — это сортировка вставками с предварительными «грубыми» проходами

![](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

> Сложность O(n^2)

```javascript
function ShellSort(A)
{
    var n = A.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
          while (k >= i && A[k-i] > t)
           { A[k] = A[k-i]; k -= i; }
          A[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}
```