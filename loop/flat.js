
//Create a function named flat that works like Array.flat(), except its first argument is the array.

function flat(arr, depth) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (depth === 0) {
        return arr;
    }
    if (depth === undefined) {
        depth = 1;
    }
    return arr.reduce((acc, cur) => {
        return acc.concat(flat(cur, depth - 1));
    }, []);
}
