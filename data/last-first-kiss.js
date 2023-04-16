
// Create 3 functions:
// first: that takes an array or a string and returns its first element or character.
// last: that takes an array or a string and return its last element or character.
// kiss: that takes an array or string, and returns an array of 2 elements. The returned array should contain the last and first elements or characters, in that order.


function first(arg) {
    var firstelement = arg[0]
    return firstelement
}

function last(arg) {
    var lastelement = arg[arg.length - 1]
    return lastelement
}

function kiss(arg) {
    var firstelement = first(arg)
    var lastelement = last(arg)
    var together = [lastelement, firstelement]
    return together
}

console.log(kiss([1, 2, 3, 4, 5, 6]))