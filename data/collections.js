
// Write a bunch of functions which converts data from one type to another:

// arrToSet: from Array to Set.
// arrToStr: from Array to string.
// setToArr: from Set to Array.
// setToStr: from Set to string.
// strToArr: from string to Array.
// strToSet: from string to Set.
// mapToObj: from Map to Object.
// objToArr: from Object to Array.
// objToMap: from Object to Map.
// arrToObj: from Array to Object.
// strToObj: from string to Object.
//Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.


function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.toString().replaceAll(",", "");
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    let res = "";
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
    set.forEach((value) => {
        res += value;
    });
    return res;
}

function strToArr(str) {
    return str.split("");
}

function strToSet(str) {
    return new Set(str.split(""));
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function objToArr(obj) {
    return Object.values(obj);
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(""));
}

function superTypeOf(value) {
    if (Array.isArray(value)) {
        return "Array";
    } else if (value instanceof Set) {
        return "Set";
    } else if (value instanceof Map) {
        return "Map";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "object") {
        return "Object";
    } else if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else if (typeof value === "boolean") {
        return "Boolean";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "function") {
        return "Function";
    }
}
