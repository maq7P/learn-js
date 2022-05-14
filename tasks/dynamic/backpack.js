/* 
Задача о рюкзаке - дано множество предметов с весом и стоимостью, 
необходимо набить рюкзак максимальной стоимостью, вес рюкзака ограничен.

Реализуйте функцию, которая находит максимальную стоимость рюкзака, 
используйте динамическое программирование.
*/

const items = [{
        weight: 6,
        cost: 30
    },
    {
        name: 'headphones',
        weight: 1,
        cost: 20
    },
    {
        name: 'book',
        weight: 4,
        cost: 20
    },
    {
        name: 'phone',
        weight: 3,
        cost: 15
    },
];

function knapsack(items, maxCapacity) {
    // создаем матрицу
    const matrix = Array(items.length + 1).fill(0).map(() => Array(maxCapacity + 1).fill(0));

    // обходим строки
    for (let i = 1; i <= items.length; i += 1) {
        // обходим столбцы
        for (let j = 1; j <= maxCapacity; j += 1) {
            if (items[i - 1].weight > j) {
                matrix[i][j] = matrix[i - 1][j];
            } else {
                const prev = matrix[i - 1][j];
                const byFormula = items[i - 1].cost + matrix[i - 1][j - items[i - 1].weight];
                matrix[i][j] = Math.max(prev, byFormula);
            }
        }
    }

    return matrix[items.length][maxCapacity];
};

knapsack(items, 9); // 55