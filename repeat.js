
/*
Create a function named repeat that takes a string and a number as arguments, 
and returns the string repeated as many times as the number describes. 
It should function like String.repeat(), but of course you must make your own.
*/

function repeat(string, number) {
    let stringToRepeat = "";
    let counter = number;
    while (counter > 0) {
        stringToRepeat += string
        counter--;
    }
    return stringToRepeat
}
console.log(repeat("Hello", 5))