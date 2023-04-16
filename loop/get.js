
// Create a function named get which takes two arguments:
// src: an object.
// path: a string representing a path.
// Your function will return the value at the given path in the src object.


function get (src, path) {
    path = path.split(".")
    for (let i = 0; i < path.length; i++){
        // src: an object 
        src = src[path[i]]
        if (src == null) {
            return undefined
        }
    }
    return src
}