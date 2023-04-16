// Create a function named sign that takes one number argument; returning 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0.
// You must not just use Math.sign, make your own.
// Create a function named sameSign that takes 2 numbers as arguments and returns true if they both have the same sign, or false otherwise.

function sign (arg) {
    if (arg > 0) {
        return 1
    } else if (arg == 0) {
        return 0
    } else {
        return -1
    }
}

function sameSign (arg1, arg2) {
    let num1 = sign(arg1);
    let num2 = sign(arg2);
    if (num1 == num2) {
        return true
    } else {
        return false
    }
    //return sign(arg1) === sign(arg2);


}