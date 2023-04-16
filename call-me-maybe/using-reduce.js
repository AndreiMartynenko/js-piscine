/*

Create the following functions:

Your solutions must use reduce.

adder: accepts an array of numbers, and returns the sum as a number.

sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

funcExec: accepts an array of functions and executes them using reduce, returning the result.

Each function may accept an optional argument, which should be the initial value for the function's execution.

*/

// function adder(arr, initial){
//     if (isNaN(initial)) initial = 0
//     return arr.reduce((prev, curr) => prev + curr, initial)
// }

function adder(arr, initial = 0) {
    return arr.reduce((acc, cur) => acc + cur, initial);
}
function sumOrMul(arr, initial) {
    if (isNaN(initial)) initial = 0

    return arr.reduce((prev, curr) => {
        if ((curr % 2) == 0) {
            prev *= curr
        } else {
            prev += curr
        }
        return prev
    }, initial)
}

function funcExec(arr, initial) {
    if (isNaN(initial)) initial = 0

    return arr.reduce((prev, curr) => {
        return curr(prev)
    }, initial)
}

/*
 
The code defines three functions that use the reduce() method to perform specific operations on an array of numbers.

The adder() function takes an array of numbers and an optional initial value, which defaults to 0 if not provided. 
It then uses reduce() to add up all the numbers in the array, starting from the initial value if provided.

The sumOrMul() function takes an array of numbers and an optional initial value, which defaults to 0 if not provided. 
It then uses reduce() to perform a different operation on each element of the array based on whether the element is even or odd. 
If the element is even, it multiplies it with the accumulated value so far (prev), and if it's odd, it adds it to the accumulated value. 
The function returns the final accumulated value after all the operations are performed.

The funcExec() function takes an array of functions and an optional initial value, which defaults to 0 if not provided. 
It then uses reduce() to execute each function in the array, passing the accumulated value (prev) as an argument to each function. 
The function returns the final accumulated value after all the functions are executed.

 */


