/*
Let's buy groceries.

You have a grocery cart with some items you need. 
The item's name is the key, and the value will 
represent nutrition facts per 100 grams.

Create 3 functions that work like 
the .filter, .map and .reduce array methods, 
for the values in your grocery cart object. 
You can see their function names and how they 
work in the examples.
*/

// small database with nutrition facts, per 100 grams
// In this exercise this is used for testing purposes only
// prettier-ignore
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
// function that works like the .filter array method
function filterValues(cart, callback) {
    const filteredDB = {};
    for (const [itemName, value] of Object.entries(cart)) {
      if (callback(value)) {
        filteredDB[itemName] = value;
      }
    }
    return filteredDB;
  }
  // function that works like the .map array method
  function mapValues(cart, callback) {
    const mappedDB = {};
    for (const [itemName, value] of Object.entries(cart)) {
      mappedDB[itemName] = callback(value);
    }
    return mappedDB;
  }
  // function that works like the .reduce array method
  const reduceValues = (obj, cond, start) => {
    if (start === undefined) start = 0
    let val = start
    Object.keys(obj).forEach(key => {
        console.log
        val = cond(val, obj[key])
    })
    return val
}