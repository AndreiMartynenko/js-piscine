
/*
Create a map function that takes an array as the first argument, 
a function as second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, 
a function as second, and that works like the method .flatMap
*/

function map(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i], i, arr));
    }
    return result;
  }

/*
The map function takes two arguments: an array arr, 
and a function func that will be applied to each element of the array. 
It creates an empty array result, and then iterates through each element of arr, 
calling func with three arguments: the current element, its index, and the entire array. 
The result of func is then pushed to result, and once all elements have been processed, 
result is returned.
*/

function flatMap(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const mapped = func(arr[i], i, arr);
      if (Array.isArray(mapped)) {
        result.push(...mapped);
      } else {
        result.push(mapped);
      }
    }
    return result;
  }

/*
The flatMap function takes the same two arguments as map, 
but the func function is expected to return an array. 
The function creates an empty array result, and then iterates through each element of arr, 
calling func with the same three arguments as map. 
If the result of func is an array, its elements are spread into result using the ... syntax. 
If the result is not an array, it is simply pushed to result. 
Once all elements have been processed, result is returned.
*/


  