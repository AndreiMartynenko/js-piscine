// Create a function named isPositive that takes a number as a argument, returning true if the number is strictly positive, and false otherwise.
// Create a function named abs that takes a number as an argument and returns its absolute value. You must make your own implementation. 
// You must not use Math.abs().

// The Math.abs() static method returns the absolute value of a number.

function isPositive(number) {
   if (number > 0) {
    return true
   } else {
    return false
   }
}

function abs(number) {
    if (number >= 0) {
        return number
    } else {
        return number * -1
    }

}
