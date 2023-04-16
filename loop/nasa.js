// Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:
// Convert numbers which are divisible by 3 to "NA".
// Convert numbers which are divisible by 5 to "SA".
// Convert numbers which are divisible by 3 and 5 to "NASA".

function nasa(N) {
    let store = [];
    for (let i = 1; i <= N; i++){
        store.push(i)
    }
    // Loop through store 
    for (let j = 0; j <= store.length; j++) {
        if ((store[j] % 3 == 0) && (store[j] % 5 == 0)) {
            store[j] = "NASA"
        } else if (store[j] % 3 == 0) {
            store[j] = "NA"
        } else if (store[j] % 5 == 0) {
            store[j] = "SA"
        }
    }

    let res = ''
    for (let k = 0; k < store.length; k++){
        res += store[k] 
        if (k != store.length-1) {
            res += ' '
        }
        
    }
    return res
}
