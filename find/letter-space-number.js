
//Create a function named letterSpaceNumber that accepts a string; 
//returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, 
//and is not followed by any letter.

function letterSpaceNumber (string) {
    // let array = [];
    // const regex = /[a-Az-Z]/g;
    // const check = string.match(regex)
    // for (let i = 0; i < string.length; i ++)
    // if (string[i] === regex
    // array.push([i])
    // return array
    const regex = /[a-zA-Z]\s\d(?![0-9a-zA-Z])/g
    if (string.match(new RegExp(regex)) == null) {
        return []
    }
    return string.match(new RegExp(regex))
}
console.log(letterSpaceNumber("Hello World"))

// All instances of numbers
// /(?:^|\|)[0-9]+(\.[0-9]+)?/
