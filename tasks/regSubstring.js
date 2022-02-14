/*
it is necessary to write function that would remove any 
duplication of substrings from 1, 2, 3 
consecutive characters from a string
*/



const str = 'abababababa';

// with reg exp
const zip = str => str.replace(/([a-z]{1,3})\1+/g, '$1');


const regSubstringDelete = () => {

}

console.log(zip(str))