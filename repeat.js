
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


/*
In this implementation, we initialize an empty string 
repeatedString to store the result of repeating string. 
We also initialize a counter variable to keep track of 
how many times we've repeated string.
We then enter a while loop that runs num number of times. 
On each iteration, we append string to repeatedString 
using the += operator and decrement counter by 1.
Finally, we return the fully repeated string.
*/