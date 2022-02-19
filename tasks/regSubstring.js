/*
it is necessary to write function that would remove any 
duplication of substrings from 1, 2, 3 
consecutive characters from a string
*/



const str = 'abababababa';

// with reg exp
const zip = str => str.replace(/([a-z]{1,3})\1+/g, '$1');


const regSubstringDelete = (str) => {
    if(/[^a-z]/.test(str)){
        return new Error('Строка содержит запрещенные символы');
    }

    const arr = Array.from(str);

    let res = "";
    let tmp = "";

    for(let i = 0; i < arr.length; i++){
        const groups = [
            arr[i],
            arr.splice(i, i + 2).join(''),
            arr.splice(i, i + 3).join(''),
        ];


        let groupI = 0;

        const hasNextSameGroup = () => {
            const nextGroups = [
                arr[i + 1],
                arr.splice(i + 2, i + 4).join(''),
                arr.splice(i + 3, i + 6).join(''),
            ];

            for(let i = groups.length; i--;){
                if(groups[i] === nextGroups[i]){
                    groupI = i
                    return true
                }
            }

            return false
        }

        const hasPrevSameGroup = () => {
            const nextGroups = [
                arr[i - 1],
                arr.splice(i - 4, i - 2).join(''),
                arr.splice(i - 6, i - 3).join(''),
            ];

            for(let i = groups.length; i--;){
                if(groups[i] === nextGroups[i]){
                    return true
                }
            }

            return false
        }

        if(hasNextSameGroup()){
            if(tmp !== "" && tmp !== groups[groupI]){
                res += tmp
            }

            tmp = groups[groupI];
            i += tmp.length * 2 - 1;

            continue;
        }

        if(tmp !== ""){
            res += tmp;

            const next = tmp.length - 1;
            tmp = "";

            if(hasPrevSameGroup()){
                i += next;

                continue;
            }
        }

        res += arr[i];
    }

    res += tmp;
    return res;
}

console.log(zip(str));
console.log(regSubstringDelete(str));