/*
Create a function named invert which takes an object 
and returns a new one with its keys and values inverted.
*/

function invert(obj) {
    let invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            invertedObj[value] = key;
        }
    }
    return invertedObj;
}

// Example usage
const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  const invertedObject = invert(myObject);
  console.log(invertedObject);