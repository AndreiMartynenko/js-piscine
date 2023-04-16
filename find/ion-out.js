

// Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. 
// The words should be returned without the 'ion' part.

// function ionOut(str) {
//   const words = str.split(' ');
//   const ionWords = words.filter((word, index) => {
//     return (word.includes('ion') && words[index - 1] && words[index - 1].endsWith('t'));
//   });
//   const result = ionWords.map((word) => {
//     return word.replace('ion', '');
//   });
//   return result;
// }

const ionOut = (str) => {
    const pattern = /\w*tion\b/g;  // define a regular expression pattern that matches words ending with 'tion' preceded by a word ending with 't'
    let temp = str.match(new RegExp(pattern));  // use the match method to find all occurrences of the pattern in the input string
    if (temp == null) return [];  // if no matches are found, return an empty array
    return temp.map((x) => x.slice(0, -3));  // remove the last three characters (i.e., 'ion') from each matched word and return the resulting array
}

/*
The ionOut function takes a single string argument.
The function defines a regular expression pattern using the RegExp constructor. 
The pattern matches any word containing the string 'tion' preceded by a word ending with 't'. 
The \w* part matches any number of word characters before 'tion', and the \b character matches a word boundary.

The match method is called on the input string using the regular expression pattern as an argument. 
This returns an array of all matches found in the input string.

If no matches are found, the function returns an empty array.

If matches are found, the map method is called on the array of matches. 
This applies a transformation function to each matched word, which removes the last three characters (i.e., 'ion') from the word using the slice method. The resulting array of modified words is returned.
 */




