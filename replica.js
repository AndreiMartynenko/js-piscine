// Create a function named replica that allows you to deep assign the values of all properties from one or more objects to a target object.

// Create an empty object named "is"
var is = {};

// Add a property "arr" to the "is" object with a function that checks if a given value is an array
is.arr = (n) => Array.isArray(n);

// Add a property "obj" to the "is" object with a function that checks if a given value is an object
is.obj = (n) =>
  typeof n === 'object' &&             // Check if the value is of type "object"
  !is.fun(n) &&                       // Ensure it is not a function
  !is.arr(n) &&                       // Ensure it is not an array
  n !== null &&                       // Ensure it is not null
  !(n instanceof RegExp);             // Ensure it is not a regular expression

// Add a property "fun" to the "is" object with a function that checks if a given value is a function
is.fun = (n) => typeof n === 'function';

// Define a function named "replica" that takes a target object and one or more source objects
function replica(target, ...sources) {
  // Iterate over each source object
  sources.forEach((source) => {
    // Iterate over each key in the source object
    Object.keys(source).forEach((key) => {
      // Check if the value associated with the current key in the source object is an object
      if (is.obj(source[key])) {
        // If the target object does not have the key or the value associated with the key is not an object, create an empty object as the target's property
        if (!target.hasOwnProperty(key) || !is.obj(target[key])) {
          target[key] = {};
        }
        // Recursively call the "replica" function to copy the nested properties from the source object to the target object
        replica(target[key], source[key]);
      } else {
        // If the value associated with the current key in the source object is not an object, directly assign it to the target object
        target[key] = source[key];
      }
    });
  });
  // Return the modified target object after all the properties have been copied
  return target;
}
