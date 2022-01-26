/*
    function which help with ignoring request when it often then needed
    http://xandeadx.ru/blog/javascript/956
*/

const throttle = (fn, wait) => {
    let isThrottle = false;
    let savedArgs, savedThis;

    return function wrapper(...args){

        if(isThrottle){
            savedArgs = args;
            savedThis = this;

            return;
        }

        fn.apply(this, args);

        isThrottle = true;

        setTimeout(() => {
            isThrottle = false;

            if(savedArgs){
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, wait)
    }
}