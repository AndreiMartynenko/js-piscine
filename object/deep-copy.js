// Create a function named deepCopy that copies objects and arrays recursively.


// Function to create a deep copy of an input object or array
function deepCopy(input) {
    // If the input is an array, create a new array and recursively deep copy each element
    if (Array.isArray(input)) {
        var output = []; // Create a new empty array
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]); // Recursively deep copy each element
        }
        return output; // Return the new array
    }
    // If the input is definitely an object (not an array or other types), create a new object and recursively deep copy each property
    else if (isDefinitelyAnObject(input)) {
        var output = {}; // Create a new empty object
        for (var key in input) {
            output[key] = deepCopy(input[key]); // Recursively deep copy each property
        }
        return output; // Return the new object
    }
    // If the input is neither an array nor an object, it's a primitive value (number, string, boolean, null, undefined), so return it as is
    else {
        return input;
    }
}

// Function to check if the input is definitely an object (not an array, function, null, or other types)
function isDefinitelyAnObject(input) {
    return (
        typeof input === "object" && // Check if the input is of type "object"
        !(typeof input === "function") && // Check if the input is not of type "function"
        !Array.isArray(input) && // Check if the input is not an array
        input !== null && // Check if the input is not null
        !(input instanceof RegExp) // Check if the input is not an instance of RegExp
    );
}
