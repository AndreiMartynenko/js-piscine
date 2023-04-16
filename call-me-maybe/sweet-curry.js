/*
Create the following functions with the "currying" process. Those functions should accept only one argument each.

mult2: that multiplies two numbers.
add3: that adds three numbers.
sub4: that subtracts four numbers.
*/

// mult2: that multiplies two numbers.
const mult2 = x => y => x * y;

// add3: that adds three numbers.
const add3 = x => y => z => x + y + z;

// sub4: that subtracts four numbers.
const sub4 = w => x => y => z => w - x - y - z;

/*
These functions are implemented as arrow functions with the currying technique, 
where each function takes only one argument at a time and returns a new function 
that takes the next argument until all the arguments are received.
*/