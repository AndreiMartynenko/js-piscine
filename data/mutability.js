
// Create three copies of the person object named clone1, clone2 and samePerson.
// Increase the age of person by one, and set its country to 'FR'.
// You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


// const clone1 = Object.assign({}, person);
// const clone2 = Object.assign({}, person);
// const samePerson = person;

// person.age = 78
// person.country= 'FR'

let clone1 = { ...person };
let clone2 = Object.assign({}, person);

let samePerson = person;

person.age += 1;
person.country = "FR";

if (person !== clone1) {
    samePerson = person;
}
