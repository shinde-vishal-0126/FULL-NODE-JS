/*
# polyfill of Bind() method 
1. it also belongs to function prototype
2. 

*/

Function.prototype.myBind = function (context = {}, ...args) {
  // First, check if 'this' is a function
  // Bind can only be called on functions, so this ensures it's callable
  if (typeof this !== "function") {
    throw new Error(this + " are not callable"); // Throw an error if 'this' is not a function
  }

  // this is assign a function to property of context object.
  // Store the reference of the function in a temporary property on the context object
  // This allows us to call the function with the specified context 
//   so bind this function explicitly with given object
  context.fun = this;

  // Bind method returns a new function with the specified 'this' context
  // This new function can be called later with additional arguments
  return function (...next) {
    // Call the original function using the context and both sets of arguments
    context.fun(...args, ...next);
  };
};

let car = {
  color: "red",
  company: "Ferrari",
};

function purChanCar(currency, price) {
  console.log(
    `i have punchedCar ${this.company} car with color ${this.color} and price are ${currency} ${price}`
  );
}

//   const newFunction = purChanCar.bind(car,"$",90)
//   newFunction();

const newFunction = purChanCar.myBind(car);
newFunction("$", 90);
