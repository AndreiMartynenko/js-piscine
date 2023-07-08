/*
Create two functions that will work like _.throttle from lodash.

throttle: don't worry about the options.
opThrottle: implement the trailing and leading options.
*/

// Throttles the execution of a function by limiting the number of times it can be called within a specific time interval.
function throttle(fn, delay) {
    let last = 0;
    return function () {
        const now = +new Date();
        if (now - last > delay) {  // Check if enough time has passed since the last execution
            fn.apply(this, arguments);  // Call the original function with the provided arguments
            last = now;  // Update the last execution time to the current time
        }
    };
}

// Enhanced throttling function that provides additional options for controlling the behavior.
function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    return function () {
        const now = +new Date();
        if (!last && leading === false) {
            last = now;  // Set the initial last execution time if leading is set to false
        }
        if (now - last > delay) {  // Check if enough time has passed since the last execution
            if (timer) {
                clearTimeout(timer);  // Clear any pending timer
                timer = null;
            }
            fn.apply(this, arguments);  // Call the original function with the provided arguments
            last = now;  // Update the last execution time to the current time
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);  // Call the original function with the provided arguments
                last = +new Date();  // Update the last execution time to the current time
                timer = null;
            }, delay);
        }
    };
}
