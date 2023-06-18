/*The objective of this exercise is to merge objects 
into a new object depending on the values type.
*/
// function fusion(...objects) {
//     //The function initializes an empty object called mergedObj.
//     const mergedObj = {};
//     objects.forEach(obj => {
//         for (const [key, value] of Object.entries(obj)) {
//             if (typeof value === "string") {
//                 mergedObj[key] = mergedObj[key] ? '${mergeObj[key]} ${value}' : value;
//             } else if (Array.isArray(value)) {
//                 mergedObj[key] = mergedObj[key] ? mergedObj[key].concat(value) : value;
//             }
//             else if (typeof obj[key] === "number") {
//                 mergedObj[key] = (mergedObj[key] || 0) + obj[key];
//             } else {
//                 mergedObj[key] = obj[key];
//             }
//         }
//     });
//     return mergedObj;
// }
function fusion(obj1, obj2) {
    // Check if the types of obj1 and obj2 are different
    if (typeof obj1 !== typeof obj2) {
      return obj2; // If they are different, return obj2
    }
  
    // Check if obj1 is an array
    if (Array.isArray(obj1)) {
      return obj1.concat(obj2); // If obj1 is an array, concatenate it with obj2 and return the result
    }
  
    // Check if obj1 is a string
    if (typeof obj1 === 'string') {
      return obj1 + ' ' + obj2; // If obj1 is a string, concatenate it with a space and obj2, and return the result
    }
  
    // Check if obj1 is a number
    if (typeof obj1 === 'number') {
      return obj1 + obj2; // If obj1 is a number, add it to obj2 and return the result
    }
  
    // Check if obj1 and obj2 are objects
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      let result = {}; // Create an empty object to store the fused result
  
      // Iterate over keys in obj1
      for (let key in obj1) {
        if (key in obj2) {
          // If the key exists in both obj1 and obj2, recursively call fusion on their values
          result[key] = fusion(obj1[key], obj2[key]);
        } else {
          // If the key only exists in obj1, assign its value to the result
          result[key] = obj1[key];
        }
      }
  
      // Iterate over keys in obj2
      for (let key in obj2) {
        if (!(key in obj1)) {
          // If the key only exists in obj2 (not in obj1), assign its value to the result
          result[key] = obj2[key];
        }
      }
  
      return result; // Return the fused object
    }
  
    return obj2; // If none of the above conditions match, return obj2
  }
  