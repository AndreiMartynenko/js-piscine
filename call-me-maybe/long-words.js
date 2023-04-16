
/*
Create three functions, which each accept an array as an argument.

longWords: returns true if every element of the array is a string with at least 5 characters.

oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
*/

// Function to check if every element in the array is a string with at least 5 characters
function longWords(arr) {
    return arr.every((word) => typeof word === 'string' && word.length >= 5);
  }
  
  // Function to check if at least one element in the array is a string with 10 or more characters
  function oneLongWord(arr) {
    return arr.some((word) => typeof word === 'string' && word.length >= 10);
  }
  
  // Function to check if there are no elements in the array which are strings with at least 7 characters
  function noLongWords(arr) {
    return !arr.some((word) => typeof word === 'string' && word.length >= 7);
  }
  
  /*
  These functions use the every and some array methods to iterate over the array and check each element against the given 
  condition. typeof word === 'string' ensures that we're only checking strings,
   and word.length checks the length of the string. 
   The longWords and oneLongWord functions return true or false based on the condition, 
   while noLongWords returns the opposite (!) of the condition.
  */


/*
This code defines three functions in JavaScript that operate on arrays of strings.

The first function longWords(arr) takes an array arr as its input and returns a boolean value. 
It checks whether every element of the array is a string with at least 5 characters. 
It uses the .every() method to iterate over every element of the array and check if it satisfies the condition. 
The .every() method returns true if the callback function passed to it returns true for every element in the array, and false otherwise. 
The callback function checks that each element is a string (typeof word === 'string') and that its length is at least 5 (word.length >= 5).

The second function oneLongWord(arr) takes an array arr as its input and returns a boolean value. 
It checks whether at least one element of the array is a string with 10 or more characters. 
It uses the .some() method to iterate over every element of the array and check if it satisfies the condition. 
The .some() method returns true if the callback function passed to it returns true for at least one element in the array, and false otherwise. 
The callback function checks that each element is a string (typeof word === 'string') and that its length is at least 10 (word.length >= 10).

The third function noLongWords(arr) takes an array arr as its input and returns a boolean value. 
It checks whether there are no elements in the array which are strings with at least 7 characters. 
It uses the .some() method to iterate over every element of the array and check if it satisfies the condition.
 The .some() method returns true if the callback function passed to it returns true for at least one element in the array, and false otherwise. 
 The callback function checks that each element is a string (typeof word === 'string') and that its length is at least 7 (word.length >= 7). 
 The final ! operator negates the result of the .some() method, so that the function returns true if there are no elements in the array that satisfy the condition, and false otherwise.
*/




