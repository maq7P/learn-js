const pillars = [0,1,0,2,1,0,1,3,2,1,2,1];


//complexity time O(N)
//complexity memory O(N)
const tappingRainWater = (pillars) => {
    const maxLeft = {};
    const maxRight = {};
    const pillarInfo = {
        source: {},
        maxLeft: {},
        maxRight: {},
        volume: {}
    }
    let temp = 0;
    for(let i = 0; i < pillars.length; i++){
        const cur = pillars[i];
        pillarInfo.source[i + '-' + cur] = cur;
        pillarInfo.maxLeft[i + '-' + cur] = temp;
        temp < cur && (temp = cur)
    }
    temp = 0;

    for(let i = pillars.length - 1; i > 0; i--){
        const cur = pillars[i];

        pillarInfo.maxRight[i + '-' + cur] = temp;
        temp < cur && (temp = cur)
    }

    for(key in pillarInfo.source){
        const curMin = Math.min(pillarInfo.maxLeft[key], pillarInfo.maxRight[key]) - pillarInfo.source[key];
        pillarInfo.volume[key] = curMin > 0 ? curMin : 0;
    }

    let res = 0;
    for(key in pillarInfo.volume){
        res += pillarInfo.volume[key];
    }

    return res;
}

console.log(tappingRainWater(pillars));

// Решение за константой по памяти; алгоритмом с двумя указателями
//complexity time O(N)
//complexity memory O(1)
const pil2 = [4,2,0,3,2,5]; //9


const tappingRainWater2 = (pillars) => {
    const pillarsLen = pillars.length - 1;
    
    let maxLeft = pillars[0];
    let maxRight = pillars[pillarsLen];

    let left = 0;
    let right = pillarsLen - 1;
    let total = 0;

    while(left <= right){
        if(maxLeft <= maxRight){
            const cur = pillars[left];

            maxLeft = Math.max(maxLeft, cur);
            total += maxLeft - cur
            left++;
        } else {
            const cur = pillars[right];

            maxRight = Math.max(maxRight, cur);
            total += maxRight - cur;
            right--;
        }
    }

    return total
}
console.log(tappingRainWater2(pil2));
