/*
Create a function named all that works like Promise.all
but with objects (instead of arrays).

The Promise.all() static method takes an iterable of promises 
as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises 
fulfill (including when an empty iterable is passed), 
with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.
 */
async function all(objs = {}) {
    var res = {};
    if (Object.keys(objs).length === 0) return {};
    for (let key in objs) {
        res[key] = await objs[key];
    }
    return res;
}