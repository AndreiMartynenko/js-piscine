/*
Create a verydisco.mjs script that :

takes the 1st argument from the command 
line (after the program name)
makes it very disco:
cut each word from this argument 
in 2 (rounded up),
re-compose a word by concatenating 
the chunks in the other order
display the result in console
If the argument passed is a sentence, 
each word of the sentence must be "very disco".

For example:

discovery would print verydisco (🕺🏼) in console.
Node is awesome would print deNo si omeawes in the console.
*/

// #!/usr/bin/env node
/*
This line specifies the shebang (#!) line at the top of the script, 
which tells the operating system what interpreter to use to run the script. 
In this case, we're using node as the interpreter.
 */
// Get the first argument from the command line
const input = process.argv[2];
/*
This line retrieves the first command line argument passed to the script 
after the program name (process.argv[0] is the program name, 
process.argv[1] is the path to the script file, and process.argv[2] 
is the first argument).
*/
// Define a function that splits a word into two chunks and reorders them
function veryDiscoWord(word) {
  const halfLength = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, halfLength);
  const secondHalf = word.slice(halfLength);
  return secondHalf + firstHalf;
}
/*
This block of code defines a function called veryDiscoWord 
that takes a string argument word and splits it into two chunks 
(the second chunk may be longer if the length of word is odd). 
The function then concatenates the second chunk with the first chunk 
in reverse order and returns the resulting string.
 */
// Define a function that applies the "very disco" transformation to a sentence
function veryDiscoSentence(sentence) {
  return sentence.split(" ").map(veryDiscoWord).join(" ");
}
/*
This block of code defines a function called veryDiscoSentence 
that takes a string argument sentence and applies the veryDiscoWord 
function to each word in the sentence 
(by first splitting the sentence into words using the .split(" ") method 
and then mapping each word to its "very disco" 
version using veryDiscoWord and the .map() method). 
Finally, the function joins the transformed words back into a string 
with spaces using the .join(" ") method and returns the resulting string.
*/
// Determine if the input is a word or a sentence
if (input.includes(" ")) {
  // Input is a sentence
  console.log(veryDiscoSentence(input));
} else {
  // Input is a word
  console.log(veryDiscoWord(input));
}
/*
This block of code checks if the input string input contains a space 
(which indicates that it's a sentence) using the .includes() method. 
If it's a sentence, it calls the veryDiscoSentence function and logs 
the transformed sentence to the console using console.log(). 
Otherwise, if it's a single word, it calls the veryDiscoWord 
function and logs the transformed word to the console using console.log().
*/