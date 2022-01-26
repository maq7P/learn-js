/*
    function which help with ignoring request when it often then needed
    http://xandeadx.ru/blog/javascript/956
*/

function throttle<ARGS = any, RETURNS = any>(
    func: (...args: ARGS[]) => RETURNS,
    wait: number,
    options: {
      leading?: boolean;
      trailing?: boolean;
    } = {},
  ) {
    let savedThis: typeof func | null,
      savedArgs: typeof func.arguments | null,
      result: RETURNS;
  
    let timeout: NodeJS.Timeout | null = null;
    let previous = 0;
  
    return function (this: typeof func, ...args: typeof func.arguments) {
      const now = Date.now();
  
      !previous && options.leading === false && (previous = now);
  
      const remaining = wait - (now - previous);
  
      savedThis = this;
      savedArgs = args;
  
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(savedThis, savedArgs);
        !timeout && (savedThis = savedArgs = null);
      }
  
      if (!timeout && options.trailing !== false) {
        timeout = setTimeout(() => {
          previous = options.leading ? Date.now() : 0;
          timeout = null;
          result = func.apply(savedThis, savedArgs);
          !timeout && (savedThis = savedArgs = null);
        }, remaining);
      }
  
      return result;
    };
  }
  
  export default throttle;