/*
# polyfill of promise.




  Constructor myPromise :

1. executor: The executor function is passed when creating a new promise. It receives resolve and reject functions as arguments.
2. onResolved and onRejected: These are placeholders for the callbacks passed to .then() and .catch().

3. isFulfilled and isRejected: Flags to indicate whether the promise has been resolved or rejected.

4 isCalled: Ensures the callbacks are only called once.
5 value and error: Store the resolved value or rejected error if handlers are not yet registered.

1 then Method
Registers a callback to handle the resolved value.
If the promise is already resolved, calls the handler immediately.
Returns the same promise object to enable chaining.

2 catch Method
Registers a callback to handle the rejected error.
If the promise is already rejected, calls the handler immediately.
Returns the same promise object to enable chaining.

3 resolve Function
Invokes the success callback if registered.
Otherwise, stores the value and marks the promise as fulfilled.

4 reject Function
Invokes the failure callback if registered.
Otherwise, stores the error and marks the promise as rejected.

5 executor Call
Immediately calls the executor with resolve and reject.
Wraps the call in a try-catch to handle any synchronous errors.

Example Usage
Creates a new myPromise and simulates an asynchronous operation using setTimeout.
Resolves the promise with a value after a delay.
Chains .then() and .catch() to handle the resolved value or errors.




*/

// # promise constructor having execution function and this execution function having the 2 argument like resolve and reject
// to consume the promise we have to used .then() for resolved promise adn .catch () for the reject promise

// here we have to create new instances of the myPromise
function myPromise(executer) {
  var onResolve; // onResolve is variable defined to hold callback for the resolve case
  var onReject; // onReject is variable defined to hold the callback for reject case

  //   This variable are just defined for it is fulField ro rejected (i.e track if resolve, or reject is call or not )
  let isFulField = false;
  let isRejected = false;
  // used to store resolve value
  let value;
  // used to store reject value
  let error;

  //   it is used to track the call handlers like onResolve, onReject call or not .
  let isCalled = false;

  // # 1 this.then = function(callback): This is the then method of anonymous function, which allows you to register a callback function that will be executed when the promise is successfully resolved
  this.then = function (callback) {
    // 2. here we have to assign callback to the onResolve so onResolve is callback function now
    // 3. onResolve so it can be called later when the promise is resolved.

    onResolve = callback;

    // if the promise is already resolved and the callback has not called yet it immediately call the callback with the resolved value
    if (isFulField && !isCalled) {
      //  isCalled = true; onResolve(value);: This sets the flag isCalled to true  and calls the onResolve callback with the resolved value (value).
      isCalled = true;
      onResolve(value);
    }

    // Allow chaining by returning the same promise object
    return this;
  };

  // # 1 this.catch = function(callback): This is the catch method or function, which allows you to register a callback function to handle any errors or rejections from the promise.
  this.catch = function (callback) {
    // 2. here we have to assign callback to the onReject so onResolve is callback function
    // 3.onReject to be called later if the promise is rejected.
    onReject = callback;
    // If the promise was already rejected, call the handler immediately
    // if the promise are rejected and the callback has not been called yet , then it immediately call the callback with rejected error

    if (isRejected && !isCalled) {
      isCalled = true;
      // isCalled = true; onReject(error);: This sets the flag isCalled to true and calls the onReject callback with the rejection error (error).
      onReject(error);
    }

    // Allow chaining by returning the same promise object
    return this;
  };

  // # so here we have defined resolve function  handle the successful async operation with resulting value.
  function resolve(value) {
    // in synchronous code it check if the onResolve is function or not if not then store value to the value and mark as fulField
    if (typeof onResolve === "function" && !isCalled) {
      isCalled = true;
      onResolve(value);
    } else {
      isFulField = true;
      value = value;
    }
  }

  // # so here we have to defined reject function to handle the failed async operation. with it error
  function reject(error) {
    // in synchronous case it check if the onReject is function or not if it is not function then send value to the catch. block.
    if (typeof onReject === "function" && !isCalled) {
      isCalled = true;
      onReject(error);
    } else {
      error = error;
      onReject = true;
    }
  }

  // so here we have defined executer function with tack to argument like resolve, reject
  // for error handling purpose we have to defined in the try and catch block
  try {
    // Immediately invoke the executor function with resolve and reject
    executer(resolve, reject);
  } catch (e) {
    // If an error occurs in the executor, reject the promise
    console.log(error);
  }
}

let promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("success");
    } else {
      reject("failed");
    }
  });
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// # previous repo explanation

/*


  // =======================================================================================================================================
// # polyfill of promise
// =======================================================================================================================================
function myPromise(executor) {
  // Variables to store success and failure handlers
  let onResolved; // Will hold the callback for the resolve case
  let onRejected; // Will hold the callback for the reject case
  let isFulfilled = false; // Tracks if resolve has been called
  let isRejected = false; // Tracks if reject has been called
  let isCalled = false; // Prevents multiple calls to handlers
  let value; // Stores the resolved value
  let error; // Stores the rejected error


//   this.then = function(callback): This is the then method, which allows you to register a function (callback) that will be executed when the promise is successfully resolved.

// onResolve = callback;: The callback passed into then is stored in the variable onResolve so it can be called later when the promise is resolved.
// if(isFulField && !isCalled): If the promise has already been resolved (isFulField is true) and the callback hasn't been called yet (isCalled is false), it immediately calls the callback with the resolved value.
// isCalled = true; onResolve(value);: This sets the flag isCalled to true to prevent the callback from being invoked multiple times, and calls the onResolve callback with the resolved value (value).

// - Method to register the resolve handler
  this.then = function (callback) {
    // Assign the callback to onResolved
    onResolved = callback;
    // If the promise was already fulfilled, call the handler immediately
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolved(value);
    }
    // Allow chaining by returning the same promise object
    return this;
  };


  // this.catch = function(callback): This is the catch method, which allows you to register a function (callback) to handle any errors or rejections from the promise.
  // onReject = callback;: The callback passed into catch is stored in the variable onReject to be called later if the promise is rejected.
  // if(isNotFulField && !isCalled): If the promise has been rejected (isNotFulField is true) and the callback hasn't been called yet (isCalled is false), it immediately calls the callback with the rejection error.
  // isCalled = true; onReject(error);: This sets the flag isCalled to true and calls the onReject callback with the rejection error (error).
  // - Method to register the reject handler
  this.catch = function (callback) {
    // Assign the callback to onRejected
    onRejected = callback;
    // If the promise was already rejected, call the handler immediately
    if (isRejected && !isCalled) {
      isCalled = true;
      onRejected(error);
    }
    // Allow chaining by returning the same promise object
    return this;
  };


// function resolved(val): This function is called when the promise is resolved, and it takes a value (val) as an argument.
// if(typeof onResolve === 'function' && !isCalled): If the onResolve callback is defined and hasn't been called yet, it calls onResolve(val) with the resolved value (val), and sets isCalled to true to avoid multiple calls.
// else { value = val; isFulField = true; }: If the onResolve callback is not defined, it stores the resolved value in value and marks the promise as fulfilled by setting isFulField to true.
// - Resolve function to handle successful async operation
  function resolve(result) {
    // If there's a registered success handler and it hasn't been called yet
    if (typeof onResolved === "function" && !isCalled) {
      onResolved(result);
      isCalled = true;
    } else {
      // If no handler is registered yet, store the result
      value = result;
      isFulfilled = true;
    }
  }

// - for finally block 
//this.finally = function(callback): This is the finally method, which allows you to register a function (callback) that will always be executed when the promise is settled, whether resolved or rejected.
// onFinally = callback;: The callback passed into finally is stored in the variable onFinally to be called later.
// if(isCalled){ onFinally(); }: If the promise is already settled (isCalled is true), it immediately calls the onFinally callback.









// function rejected(err): This function is called when the promise is rejected, and it takes an error (err) as an argument.

// if(typeof onReject === 'function' && !isCalled): If the onReject callback is defined and hasn't been called yet, it calls onReject(err) with the rejection error (err), and sets isCalled to true.

// else { error = err; isNotFulField = true; }: If the onReject callback is not defined, it stores the rejection error in error and marks the promise as rejected by setting isNotFulField to true.



  // Reject function to handle failed async operation
  function reject(err) {
    // If there's a registered failure handler and it hasn't been called yet
    if (typeof onRejected === "function" && !isCalled) {
      onRejected(err);
      isCalled = true;
    } else {
      // If no handler is registered yet, store the error
      error = err;
      isRejected = true;
    }
  }

  // Immediately invoke the executor function with resolve and reject
  try {
    executor(resolve, reject);
  } catch (err) {
    // If an error occurs in the executor, reject the promise
    reject(err);
  }
}

// Example usage
const newPromise = new myPromise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve(2); // Pass the resolved value to the promise
  }, 1000);
})
  .then((res) => {
    console.log("Resolved value:", res); // Logs: Resolved value: 2
  })
  .catch((error) => {
    console.log("Error:", error); // Handles any errors (not applicable in this example)
  });

//   Constructor myPromise :

//1. executor: The executor function is passed when creating a new promise. It receives resolve and reject functions as arguments.
//2. onResolved and onRejected: These are placeholders for the callbacks passed to .then() and .catch().
//3. isFulfilled and isRejected: Flags to indicate whether the promise has been resolved or rejected.
//4 isCalled: Ensures the callbacks are only called once.
//5 value and error: Store the resolved value or rejected error if handlers are not yet registered.

//1 then Method
// Registers a callback to handle the resolved value.
// If the promise is already resolved, calls the handler immediately.
// Returns the same promise object to enable chaining.

//2 catch Method
// Registers a callback to handle the rejected error.
// If the promise is already rejected, calls the handler immediately.
// Returns the same promise object to enable chaining.

//3 resolve Function
// Invokes the success callback if registered.
// Otherwise, stores the value and marks the promise as fulfilled.

//4 reject Function
// Invokes the failure callback if registered.
// Otherwise, stores the error and marks the promise as rejected.

//5 executor Call
// Immediately calls the executor with resolve and reject.
// Wraps the call in a try-catch to handle any synchronous errors.
//
// !Example Usage
// Creates a new myPromise and simulates an asynchronous operation using setTimeout.
// Resolves the promise with a value after a delay.
// Chains .then() and .catch() to handle the resolved value or errors.


  */
