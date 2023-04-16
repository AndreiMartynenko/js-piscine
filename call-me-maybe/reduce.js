
/*Create four functions:

fold that receives an array, a function and an accumulator, 
in this order, and applies the function in the elements of the array starting on the left.

foldRight that receives an array, a function and an accumulator, 
in this order, and applies the function in the elements of the array starting on the right.

reduce that works just like the method [].reduce when you don't specify an accumulator. 
The arguments should be an array and a function. 
The starting value of your accumulator must be the first value of the array. 
If your array is less than 1 argument you should throw an error.

reduceRight like reduce, from the last value to the first

*/

function fold(arr, func, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

function foldRight(arr, func, acc) {
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

function reduce(arr, func) {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
    }
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

function reduceRight(arr, func) {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
    }
    let acc = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        acc = func(acc, arr[i]);
    }
    return acc;
}
/*
fold: This function takes an array, a function, and an accumulator as arguments, 
and applies the function to the elements of the array from left to right, 
starting with the accumulator as the initial value. 
It returns the final value of the accumulator after all the function calls.

foldRight: This function is similar to fold, 
but it applies the function to the elements of the array from right to left, 
starting with the accumulator as the initial value.

reduce: This function works like the built-in reduce method of arrays, 
but without the option to specify an initial accumulator value. 
It takes an array and a function as arguments, 
and uses the first element of the array as the initial value of the accumulator. 
It then applies the function to each element of the array from left to right, 
updating the accumulator with the result of each function call.

reduceRight: This function is similar to reduce, 
but it applies the function to the elements of the array from right to left, 
starting with the last element of the array as the initial value of the accumulator.
*/