// Create some functions, which each take a string as an argument:
// cutFirst: returns the string with the first 2 characters removed.
// cutLast returns the string with the last 2 characters removed.
// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.
// keepFirst returns only the first 2 characters.
// keepLast returns only the last 2 characters.
// keepFirstLast returns the first 2 characters, and the last 2 characters.


function cutFirst (str) {
    return str.slice(2)
}

function cutLast (str) {
    return str.slice(0, (str.length - 2))
}

function cutFirstLast (str) {
    return str.slice(2, (str.length - 2))
}

function keepFirst (str) {
    return str.slice(0,2)
}
 function keepLast (str) {
    return str.slice(-2)
 }

//  function keepFirstLast(str) {
//     let firstTwo = str.slice(0,2);
//     let lastTwo = str.slice(-2);
//     return firstTwo + lastTwo;
// }

 function keepFirstLast(str) { 
  //Empty string to store result
   let result = ''
    //add first to values to the string
    result = str.slice(0, 2)

    switch (str.length) {
        case 2:
            return result;
        case 3:
            return result + str[2]
        default:
            return result + str.slice(-2)
    }
    
}

//console.log(keepFirstLast("Hello World"))