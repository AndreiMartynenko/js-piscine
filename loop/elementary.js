// Create 3 functions which each take (a, b) as arguments:
// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.

function multiply(a, b) {
    // TODO what if times is zero
    // TODO what if times is negative
    var number = a;
    for (var i = 1; i <b; i++)
    a += number; //increments itself
    return a;
}
console.log(multiply(-5, 5))

// const multiply = (a, b) => {
//     // check if a and b are negative
//     const aSign = Math.sign(a)
//     const bSign = Math.sign(b)

//     //make a and b absolute values
//     a = Math.abs(a)
//     b = Math.abs(b)

//     //Calculate the multiplied value
//     var res = 0
//     for (let i = 0; i < a; i++) {
//         res += b
//     }
//     if (aSign != bSign) {
//         return parseFloat(-res)
//     } else {
//         return parseFloat(res)
//     }
// }

function divide(a, b) {
   if (b === 0) {
    throw 'Division by zero is undefined: ';
  }
  var sign = 1;
  if (a < 0) {
    a = -a;
    sign = -sign;
  }
  if (b < 0) {
    b = -b;
    sign = -sign;
  }
  var result = 0;
  while (a >= 0) {
    a -= b;
    result++;
  }
  return (result - 1) * sign;
}
console.log(divide(0, -6))

// const divide = (a, b) => {
//     // check if a and b are negative
//     const aSign = Math.sign(a)
//     const bSign = Math.sign(b)

//     //make a and b absolute values
//     a = Math.abs(a)
//     b = Math.abs(b)

//     let div = 0
//     let i = 0
//     while (i < a) {
//         i += b
//         div++
//     }
//     div--

//     if (aSign != bSign) {
//         return parseFloat(-div)
//     } else {
//         return parseFloat(div)
//     }
// }
// console.log(divide(0, -6))

function modulo(a, b) {
    let stepOne = divide(a, b)
    let stepTwo = multiply(stepOne, b)
    let stepThree = a - stepTwo
    return stepThree
  }
//   var output = modulo(35, 6);
//   console.log(output);
