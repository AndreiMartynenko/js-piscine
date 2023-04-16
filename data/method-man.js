
// Write 5 functions:

// words: that takes a string, splits it by spaces, and returns an array of those substrings.
// sentence: that takes an array of strings, and joins them with spaces to return a single string.
// yell: that takes a string and returns it in upper case.
// whisper: that takes a string and returns it in lower case, surrounded by *.
// capitalize: that takes a string and transforms it so that the first character is upper case, and the subsequent characters are lower case.

//The split() method splits a string into an array of substrings
function words(str) {
    return str.split(" ");
}

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.

function sentence(arr) {
    let arg = arr.join(" ");
    return arg
}

//The toUpperCase() method converts a string to uppercase letters.
//The toUpperCase() method does not change the original string.

function yell(str) {
    return str.toUpperCase();
}

//The toLowerCase() method converts a string to lowercase letters.
//The toLowerCase() method does not change the original string.

function whisper(str) {
    let arg = str.toLowerCase()
    let together = '*' + arg + '*';
    return together
}

//The charAt() function returns the character at a given position in a string.
//This function slices a given string from a specified “start” position until the specified “end” position.
function capitalize(str) {
    let firstelement = str.charAt(0).toUpperCase();
    let other = str.slice(1).toLowerCase();
    let together = firstelement + other;
    return together

}