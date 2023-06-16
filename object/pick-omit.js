/*
Create two functions which takes an object and a string or array of strings. 
They should return a new object which:

pick: contains only those keys which appear 
in the string or array of strings.
*/

const pick = (obj, keys) => {
    if (typeof keys === "string") { //Check if keys is a string
        keys = [keys]; // Convert keys to an array if it's a string
    }
    let newObj = new Object(); // Create a new empty object to store the result
    for (const key of keys) { // Loop through each key in the keys array
        if (obj.hasOwnProperty(key)) { // Check if obj has the key
            newObj[key] = obj[key]; // Add the key-value pair to the result object
        }
    }
    return newObj;

}

/*
omit: contains only those keys which do not match
the string, or do not appear in the array of strings.
*/

const ommit = (obj, keys) => {
    return Object.fromEntries( // Convert an array of key-value pairs back into an object
        Object.entries(obj).filter(([key]) => !keys.includes(key)) // Filter out keys that match those in the keys array
    );
};

/*
The Object.fromEntries() static method transforms 
a list of key-value pairs into an object.
*/



