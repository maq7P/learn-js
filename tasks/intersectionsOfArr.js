'🥴Пересечение массивов'
//todo: довести

const a = [0, 1, 2, 3, 4, 9, 2, 9, 9999]
const b = [2, 3, 4, 5, 2, 2, 2, 2, 9, 9, 9999, 0]
const hashIntersection = new Map()

const arrToMap = (arr) => {
    const map = new Map()
    arr.forEach((item) => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1)
        } else {
            map.set(item, 1)
        }
    })
    return map
}
const aMap = arrToMap(a)
const bMap = arrToMap(b)
let newArr = []
for (const a of (aMap.size > bMap.size) ? aMap : bMap) {
    if (bMap.has(a[0]) && aMap.has(a[0])) {
        newArr.push(Math.min(aMap.get(a[1]), bMap.get(a[1])))
    }
}
console.log(newArr)