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
//Если объект очень глубокий , мы можем заполнить стек и возникенет stack overfllow
const logDFSRecursive = (obj) => {
    if(isPrimitive(obj)){
        res1.push(obj);
    } else {
        for(let key in obj){
            if(!obj.hasOwnProperty(key)) continue;
            logDFSRecursive(obj[key]);
        }
    }

}

console.log(logDFSRecursive(obj));
console.log(res1);

//DFS с помощью стека
//Стек находится в куче, предоставляемой Array, что является динмисческой памятью 
//    => не возникнет проблемы stask overfllow
const logDFSStask = (obj) => {
    const stack = [intoIter(obj)];
    const res = [];

    while(stack.length > 0){
        const iter = stack.pop();

        for(let val of iter){
            if(isPrimitive(val)){
                res.push(val);

            } else {
                stack.push(iter);
                stack.push(intoIter(val));
                break;
            }
        }

    }

    function intoIter(obj){
        return Object.values(obj).values()
    }

    return res;
}

console.log(logDFSStask(obj));