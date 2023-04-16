// Create a function named repeat that takes a string and a number as arguments,
// and returns the string repeated as many times as the number describes.
// It should function like String.repeat(), but of course you must make your own.

function repeat (string, number) {
    var repeatedString = "";
    while (number > 0) {
      repeatedString += string;
      number--;
    }
    return repeatedString;
  }
console.log(repeat("Hello", 5))

function repeatInt(num, number) {
  var repeatedNum = int;
  while(number > 0) {
    repeatedNum + num;
    number --;
  }
  return repeatedNum;
}
console.log(repeat(10, 5))