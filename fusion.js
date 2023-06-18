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
    if (typeof obj1 !== typeof obj2) {
      return obj2;
    }
  
    if (Array.isArray(obj1)) {
      return obj1.concat(obj2);
    }
  // string with adding a space
    if (typeof obj1 === 'string') {
      return obj1 + ' ' + obj2;
    }
  
    if (typeof obj1 === 'number') {
      return obj1 + obj2;
    }
  
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      let result = {};
      for (let key in obj1) {
        if (key in obj2) {
          result[key] = fusion(obj1[key], obj2[key]);
        } else {
          result[key] = obj1[key];
        }
      }
      for (let key in obj2) {
        if (!(key in obj1)) {
          result[key] = obj2[key];
        }
      }
      return result;
    }
  
    return obj2;
  }
  