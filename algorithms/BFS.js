/* 
    write a function that will display all the primitive values ​​of an object
*/

const obj = {
    a: {
        l: {
            u: 8
        },
        b: 1
    },
    c: {
        d: 2,
        e: {
            f: 7
        }
    },
    j: 4
};

//BFS 
const logBFS = (obj) => {
    const queue = [obj];
    const res = [];

    while(true){
        const obj = queue.shift();

        for(let key in obj){
            if(!obj.hasOwnProperty(key)) continue;
            
            const val = obj[key];
            if(isPrimitive(val)){
                res.push(val);
            } else {
                queue.push(val)
            }
        }

        if(queue.length === 0) return res;
    }
}

console.log(logBFS(obj));