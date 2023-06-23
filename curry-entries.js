/*
You're going to create some curry functions, 
to apply to the object's entries.

Create defaultCurry, which curries two objects. 
It mergers the objects together. If the key exists 
in both objects, the value from the second object 
override the value from the first object.

Array.prototype.filter()
The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test 
implemented by the provided function.

Array.prototype.map()
The map() method creates a new array populated with the results of calling 
a provided function on every element in the calling array.

Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function 
on each element of the array, in order, passing in the return value from 
the calculation on the preceding element. The final result of running the 
reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the 
previous calculation". If supplied, an initial value may be used in its place. 
Otherwise the array element at index 0 is used as the initial value and 
iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum 
of all the elements in an array:

Object.entries()
The Object.entries() static method returns an array of a given object's 
own enumerable string-keyed property key-value pairs.

The Object.fromEntries() static method transforms a 
list of key-value pairs into an object.

What is 'Currying'?
https://stackoverflow.com/questions/36314/what-is-currying

*/

function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}
function mapCurry(func) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            res[func([key, obj2[key]])[0]] = func([key, obj2[key]])[1];
        }
        return res;
    };
}
function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}
function filterCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                res[key] = obj2[key];
            }
        }
        return res;
    };
}
function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}
function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}
function mapAverage(obj) {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores) {
        obj[key].averageScore = avgScores[key];
    }
    return obj;
}