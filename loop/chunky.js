// Create a function named chunk which accepts an array and an integer representing a size.
// Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.
// If the array cannot be split evenly, the last sub-array will contain the remaining elements.



const chunk = (arr, int) => {
    let temp = [];
    let res = [];
    let add = int-1

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])

        if ((i == add) || (i == arr.length - 1)) {
            res.push(temp)
            temp = [];
            add += int
        }
    }
    return res
}