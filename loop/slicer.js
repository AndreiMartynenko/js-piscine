
// Create a function named slice that works like Array.slice() and String.slice().
// It takes 3 arguments:
// string or array to process.
// starting index.
// optional ending index.


function slice(arr, start, end) {
    //     let result = [];
    //    let from = Math.max(start, 0);
    //    let to = Math.min(end);

    //     if ((!end) || (end > arr.length)) {
    //         for (let i = from; i < arr.length; i++) {
    //             result.push(arr[i]);
    //         }
    //     } else {
    //         for (let i = from; i < to; i++) {
    //             result.push(arr[i]);
    //         }
    //     }
    //     return result;
    if (start < 0) {
        start = arr.length + start
    }
    if ((end < 0) && (end != null)) {
        end = arr.length + end
    }
    let upto = arr.length
    if (end != null) {
        upto = end
    }
    // The Array.isArray() static method determines whether the passed value is an Array.
    //true if value is an Array; otherwise, false. false is always returned if value is a TypedArray instance.
    if (Array.isArray(arr)) {

        //create an empty slice to return the new value
        let res = [];
        //Loop through the array until the end, with i as num initially
        for (let i = start; i < upto; i++) {
            // Combines two or more arrays.
            // This method returns a new array without modifying any existing arrays.
            res.push(arr[i])
        }
        return res

    } else {
        let res = '';
        //Loop through the array until the end, with i as num initially
        for (let i = start; i < upto; i++) {
            res += arr[i]
        }
        return res
    }
}