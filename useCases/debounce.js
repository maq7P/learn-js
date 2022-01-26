/*
* function which help with delay for action
*/

const debounce = (fn, delay = 200) => {

    let timeout = null;
    const curTime = new Date().getTime();

    return function(...args) {
        const fnCall = () => {
            fn.apply(this, args)
        }

        clearTimeout(timeout);

        timeout = setTimeout(fnCall, delay);
    }
}