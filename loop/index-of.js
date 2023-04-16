
// Create 3 functions which accept an array to be searched, and a value to be matched.

// indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
// lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
// includes: which returns true if the value was found in the array, and false otherwise.
// Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().

function indexOf (arr, value, start) {
//null
    let i = 0
    if (start != undefined) {
        i = start
    }
    //loop through the array
    while (i < arr.length) {
        if (arr[i]== value ) {
            return i
        }
        i++
    }
    return -1
}

function lastIndexOf (arr, value, start) {

    // var upto = arr.length
    // if (start != null) {
    //     upto = start
    // }
    let ind = arr.length - 1
    if (start != undefined) {
        ind = start
    }
    for (let i = ind; i >= 0; i--) {
        if (arr[i]== value ) {
            return i
        }
    }
    return -1
}
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

function includes(arr, value) {
    let check = indexOf(arr, value)
    if (check == -1) {
        return false
    } else {
        return true
    }

}


