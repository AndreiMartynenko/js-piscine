

const escapeStr = "\` \" \' \\ \/"
const SimpleArr = [4, '2']
const SimpleObj = {
    str: 'Adam',
    num: 35,
    bool: true,
    undef: undefined
}
const SimplyNested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'Adam',
        num: 35,
        bool: true
    }
} 

const arr = Object.freeze(SimpleArr);
const obj = Object.freeze(SimpleObj);
const nested = Object.freeze(SimplyNested);

/*The Object.freeze() static method freezes an object. 
Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, 
existing properties cannot be removed, 
their enumerability, configurability, writability, or value cannot be changed, 
and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
*/

const deepFreeze = obj => {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
};

deepFreeze(nested)



























