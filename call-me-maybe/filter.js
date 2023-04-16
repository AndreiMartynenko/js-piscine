/*
Create the following functions, which each take an array as the first argument, 
and a function as the second argument.

filter: that works like the [].filter method.

reject: that works like the reject function from lodash.

partition: that works like the partition function from lodash.
*/


function filter(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (func(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  function reject(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!func(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  function partition(array, func) {
    let truthy = [];
    let falsy = [];
    for (let i = 0; i < array.length; i++) {
      if (func(array[i], i, array)) {
        truthy.push(array[i]);
      } else {
        falsy.push(array[i]);
      }
    }
    return [truthy, falsy];
  }

/*
The filter function loops through each element in the array and passes it to the func function. 
If func returns true for an element, that element is added to the result array. 
Finally, the result array is returned.

The reject function is similar to filter, 
but it adds an element to the result array only if func returns false for that element.

The partition function separates an array into two arrays - 
one containing elements for which func returns true, 
and the other containing elements for which func returns false. 
These two arrays are returned as a single array.
 */