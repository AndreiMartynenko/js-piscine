/*
Create these functions which receive an array and a function each. Each element will return true if

every: every element in the array respects the condition of the function.
some: that returns true if at least one element in the array respects the condition of the function.
none: that returns true if none of the elements in the array respects the condition of the function.
The use of [].every and [].some is forbidden for this exercise.
*/

function every(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
      if (!condition(arr[i])) {
        return false;
      }
    }
    return true;
  }
  
  function some(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        return true;
      }
    }
    return false;
  }
  
  function none(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        return false;
      }
    }
    return true;
  }
  




/*
These functions take an array and a condition function as parameters. 
The every function returns true if every element in the array satisfies the condition, 
the some function returns true if at least one element satisfies the condition, 
and the none function returns true if none of the elements satisfy the condition.

The functions use a for loop to iterate over the array 
and check each element against the condition. 
If an element satisfies the condition, some returns true immediately, 
none returns false immediately, and every continues checking the remaining elements. 
If an element does not satisfy the condition, every returns false immediately, 
some continues checking the remaining elements, 
and none continues checking the remaining elements.

Note that in the every and none functions, the ! operator 
is used to check if an element does not satisfy the condition. 
This is because the functions return true if every or none of the 
elements satisfy the condition, respectively.

*/