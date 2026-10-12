/*
# polyfill of the apply() method
1. it belong to prototype of function 
2. context is an object 

*/
Function.prototype.myApply = function (context = {}, args = []) {
  // Check if 'this' is a function, as myApply can only be called on functions
  if (typeof this !== "function") {
    throw new Error(this + " is not callable"); // Throw an error if 'this' is not a function
  }

  // Check if args is an array
  if (!Array.isArray(args)) {
    throw new Error("Please provide the arguments as an array"); // Throw an error if args is not an array
  }

  // Assign the function (which 'this' refers to) to a property on the context object
  // i.e object borrow the method (or put the function inside the context to call with provided this value )
  // This allows us to call the function with the provided context
  context.fun = this;

  // Call the function using the context object and the arguments array
  // The function will execute with 'context' as 'this', and 'args' as the parameters
  const result = context.fun(...args);

  // Remove the temporary 'fun' property from the context object
  // This cleanup is important to avoid polluting the context object
  delete context.fun;

  // Return the result of the function call
  return result;
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

purChanCar.myApply(car, ["$", 90]);
