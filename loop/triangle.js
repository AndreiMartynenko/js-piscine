
/*Create a function named triangle that takes a string and a number as arguments. 
Your function will return a string representing a triangle.
The string will denote the characters which construct the triangle, 
and the number denotes its height.
*/
function triangle (str, num){
    let res = ''
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            res += str
            if ((j == i - 1) && (i != num)) {
                res += '\n'
            }
        }
    }
    return res
}

console.log(triangle("Hi", 8))