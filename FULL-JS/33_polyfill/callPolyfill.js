/*
# polyfill of the call method.
1. its belongs to the prototype of function

*/
Function.prototype.myCall = function (context = {}, ...args) {
  // Default Context: If no context is provided, a default empty object {} is used to avoid errors.
  // Check if 'this' is a function, as myCall can only be called on functions
  if (typeof this !== "function") {
    throw new Error(this + " is not callable"); // Throw an error if 'this' is not a function
  }
  // Assign the function (which 'this' refers to) to a property on the context object
//   so here we have insert function inside the context and try to call this function.
  // This allows us to call the function with the provided context
  context.fun = this;
  // then next we need to used the argument 
  // Call the function using the context object and the provided arguments
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

purChanCar.myCall(car, "$", 90);
