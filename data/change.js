
// get: a function that takes a key and returns the corresponding value from the sourceObject.
// set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value.

function get(key) {
    return sourceObject[key]
}

function set(key, value) {
    sourceObject[key] = value
    return sourceObject[key]
    //return value
}


/*

The backticks (` `) indicate that this is a template literal, 
which allows you to embed expressions in a string by wrapping them in ${}.

${key} and ${value} are the expressions that are being interpolated into the string. 
They will be replaced with the values of the key and value variables at runtime.
`:` is a string literal that is included in the template literal to separate 
the key and value variables.
${} is a syntax used in JavaScript template literals to embed expressions inside a string. It allows you to easily concatenate variables, functions, and expressions with a string, making the code more readable and concise.

The `${}` syntax is used to enclose the expression to be interpolated. 
The expression inside the `${}` can be a variable, function, 
or any valid JavaScript expression. 
The expression will be evaluated at runtime and the resulting value will be 
interpolated into the string.

const name = "John";
console.log(`Hello, ${name}!`);

const x = 5;
const y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}.`);



*/