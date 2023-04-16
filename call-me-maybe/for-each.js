

// Create a function named forEach which takes an array as the first argument, 
// a function as the second argument, and that works like the Array.prototype.forEach method.


function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
/*
This code defines a function forEach that takes two arguments: an array arr and a callback function callback. 
The purpose of the forEach function is to iterate over each element of the array and execute the callback 
function on each element.

The for loop iterates over each element of the array using an index i. 
The loop condition is i < arr.length, so the loop will execute for as many elements 
as there are in the array.

Within the loop body, the callback function is called with three arguments: 
the current element of the array (arr[i]), the index of the current element (i), 
and the original array (arr). This is achieved using the syntax callback(arr[i], i, arr).

The callback function itself is not defined in this code snippet. 
Instead, it is passed as an argument to the forEach function when it is called. 
The callback function can be defined elsewhere in the code and can perform 
any operation on the current element of the array that is passed to it.

Overall, the forEach function provides a simple way to iterate over the elements 
of an array and execute a callback function on each element, which can be useful for a 
wide variety of programming tasks.
*/