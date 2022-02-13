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

const res1 = [];

const isPrimitive = (el) => typeof el === 'string' 
|| typeof el === 'number' 
|| el === null
|| el === undefined;

//DFS (можно с помощью стека также)
const logDFS = (obj) => {
    if(isPrimitive(obj)){
        res1.push(obj);
    } else {
        for(let key in obj){
            if(!obj.hasOwnProperty(key)) continue;
            logDFS(obj[key]);
        }
    }

}

console.log(logDFS(obj));
console.log(res1);
