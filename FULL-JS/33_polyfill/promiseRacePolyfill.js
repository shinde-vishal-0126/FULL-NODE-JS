/*
# promise.race() :
1. // Promise.race() is a method in JavaScript that takes an iterable (like an array or any other object with an iterator) of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects. It doesn't wait for the others to complete. It is often used when you need the result of the first completed promise, whether it's 

# What is Promise.race?
1.Promise.race(iterable) takes an array of promises.
It returns a single promise that settles as soon as the first promise settles (fulfilled or rejected).
The result or error of the first-settled promise is used.

*/

function myPromisePolyfill(executer) {
  let onResolve,
    onReject,
    isFulField = false,
    isReject = false,
    value,
    error;
  let isCalled = false;

  this.then = function (callback) {
    onResolve = callback;

    if (isFulField && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    // Allow chaining by returning the same promise object
    if (isReject && !isCalled) {
      isCalled = true;
      onReject(error);
    }
    return this;
  };

  function resolve(val) {
    if (typeof onResolve === "function" && !isCalled) {
      isCalled = true;
      onResolve(val);
    }
    value = val;
    isFulField = true;
  }

  function reject(err) {
    if (typeof onReject === "function" && !isCalled) {
      isCalled = true;
      onReject(err);
    } else {
      error = err;
      isReject = true;
    }
  }

  try {
    executer(resolve, reject);
  } catch (error) {
    console.log(error);
    reject(error);
  }
}

p1 = new myPromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

p2 = new myPromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

p3 = new myPromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

myPromisePolyfill.myRace = function (promises) {
  return new myPromisePolyfill((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

myPromisePolyfill
  .myRace([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
