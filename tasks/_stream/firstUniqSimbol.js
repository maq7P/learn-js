const firstUniqSymbol = (s) => {
    const hashMap = {}
    const arrS = (s.split(''))
    for (let i = 0; i < arrS.length; i++) {
        if (hashMap[arrS[i]]) {
            hashMap[arrS[i]] += 1
        } else {
            hashMap[arrS[i]] = 1
        }
    }
    let sum = 0
    let flag = false
    console.log('hashMap: ', hashMap)
    for (let key in hashMap) {
        if (hashMap[key] === 1) {
            flag = true
            break;
        }
        if (hashMap[key] > 1) {
            sum += hashMap[key]
        }
    }
    return flag ? sum : -1
}
console.log(firstUniqSymbol('hhggg'))