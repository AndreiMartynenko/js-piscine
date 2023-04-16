
//Create the function currify that will curry any functions put as argument.

function currify(func) {
    const arity = func.length;
  
    return function curried(...args) {
      if (args.length < arity) {
        return function partiallyApplied(...moreArgs) {
          return curried(...args.concat(moreArgs));
        };
      } else {
        return func(...args);
      }
    };
  }

  function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = currify(add);
  const addOne = curriedAdd(1);
  const addTwo = addOne(2);
  const result = addTwo(3); // returns 6
  