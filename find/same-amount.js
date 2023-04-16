// Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. 
// Your function should return a boolean.
// The objective is to confirm that the regular expressions match the string the same number of times.

function sameAmount(str, regexOne, regexTwo) {
    console.log(str, regexOne, regexTwo)

    // const matchCount1 = (str.match(regexOne) || []).length;
    // const matchCount2 = (str.match(regexTwo) || []).length;
    // return matchCount1 === matchCount2;

    const matches1 = (str.match(new RegExp(regexOne, 'g')) || []);
    const matches2 = (str.match(new RegExp(regexTwo, 'g')) || []);
    return matches1.length === matches2.length;
}

const str = "ababab";
const regexOne = /a/g;
const regexTwo = /b/g;
console.log(sameAmount(str, regexOne, regexTwo)); // true

// Explanation

/*
The sameAmount function takes in three parameters: str, regexOne, and regexTwo. These parameters represent a string and two regular expressions.

The match method is called on the input string str with the first regular expression regexOne as the argument. This method returns an array of matches, or null if there are no matches. 
The new RegExp constructor is used to create a new regular expression object from the regexOne parameter, and the 'g' flag is passed as the second argument to perform a global search.

The || [] operator is used to provide an empty array as the default value if the match method returns null. This is necessary because trying to access the length property of null would result in an error.

The same process is repeated for the second regular expression regexTwo.

The length property of matches1 and matches2 is compared to check if they have the same number of matches. If they do, the function returns true. Otherwise, it returns false.

The function uses the strict equality operator === to compare the lengths of matches1 and matches2. This ensures that both the values and the data types of the two operands are the same.

Overall, this function checks if both regular expressions match the input string the same number of times, and returns a boolean value accordingly.

*/

