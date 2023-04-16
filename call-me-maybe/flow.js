/*
Create the function named flow that will act like the _.flow([funcs]) from lodash.
*/

// function flow(...funcs) {
//     return function(...args) {
//       let result = funcs[0].apply(this, args);
//       for (let i = 1; i < funcs.length; i++) {
//         result = funcs[i].call(this, result);
//       }
//       return result;
//     };
//   }


  /*
  This function takes any number of functions as arguments, 
  and returns a new function that will execute those functions in sequence. 
  The new function will take any number of arguments, 
  which will be passed to the first function in the sequence. 
  The result of each function will be passed as an argument 
  to the next function in the sequence.
  */

//   function flow(...funcs) {
//     return function(arg) {
//       return funcs.reduce((result, func) => func(result), arg);
//     }
//   }

// function flow(...funcs) {
//     return function(...args) {
//       return funcs.reduce((result, func) => [func.call(null, ...result)], args)[0];
//     }
//   }
  
  

//   function addOne(num) {
//     return num + 1;
//   }
  
//   function double(num) {
//     return num * 2;
//   }
  
//   const addOneThenDouble = flow(addOne, double);
  
//   console.log(addOneThenDouble(5)); // 12
  
  /*
  In this example, we define two functions addOne and double. 
  We then use the flow function to create a new function addOneThenDouble 
  that will first call addOne on its argument, 
  and then call double on the result of that. 
  When we call addOneThenDouble(5), we get the result 12, 
  which is what we would expect if we first add 1 to 5 (resulting in 6), 
  and then double that (resulting in 12).
  */

//   function add(a, b) {
//     return a + b;
//   }
  
//   function double(n) {
//     return n * 2;
//   }
  
//   const flowFunc = flow(add, double, double);
//   const result = flowFunc(2, 3); // returns 20

/*
In this example, we define two functions add and double, 
and then create a new function flowFunc using flow. 
This new function applies add, double, and double to 
its arguments in that order, so calling flowFunc(2, 3) 
is equivalent to calling double(double(add(2, 3))), which returns 20.
*/



const flow =
    (funcArr) => {
        return (...elem) => {
            let args = elem.slice()
        
            funcArr.forEach(element => {
                if (Array.isArray(args)) {
                    args = element(...args)
                } else {
                    args = element(args)
                }
            
            });
            return args
        }
    }

/*
Here's a breakdown of how the code works:

'const flow = (funcArr) => { ... }': This declares a new function called 
'flow' using arrow function syntax. The function takes a single parameter, 
'funcArr', which is an array of functions.

'return (...elem) => { ... }:' This returns a new function that accepts 
any number of arguments using the rest parameter syntax (...elem). 
This new function will be returned by the 'flow' function and 
can be called with any number of arguments.

'let args = elem.slice()': This creates a copy of the arguments passed 
to the new function using the slice method. 
This is done to ensure that the original arguments 
are not modified during the function calls.

'funcArr.forEach(element => { ... })': This iterates over each function 
in 'funcArr' using the forEach method, 
and applies each function to the arguments 'args'.

'if (Array.isArray(args)) { ... }': This checks if the result of the 
previous function call is an array. 
If it is, then the next function in 'funcArr' is applied 
to the array elements using the spread syntax (...args).

'else { ... }': If the result of the previous function call is not an array, 
then the next function in 'funcArr' is applied to the single value of 'args'.

'return args': Finally, the result of the last function call is 
returned as the result of the new function created by 'flow'.

*/