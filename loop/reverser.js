//Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.

function reverse(input) {
    if (typeof input === "string") {
        let res = "";
        for (let i = input.length - 1; i >= 0; i--) {
            res += input[i];
        }
        return res;
    } else if (Array.isArray(input)) {
        let res = [];
        for (let i = input.length - 1; i >= 0; i--) {
            res.push(input[i]);
        }
        return res;
    }
}