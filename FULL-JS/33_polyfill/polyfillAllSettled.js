/*
# promise allsettled polyfill
1. polyfill allSettled take input as an array and return an single promise with an array that contain the result of all the promises which are resolved or rejected 


 # What is Promise.allSettled?
Promise.allSettled(iterable) takes an array of promises.
# It returns a new promise that:
1.  always resolves, after all input promises settle (fulfilled or rejected).
2. The result is an array of objects describing the outcome of each promise.



*/

function myPromise(executer) {
  // used to store or hold callback function we need to call later
  let onRejected, onResolved;
  // used to to check it is fullFiled or not  or isRejected or not
  let isFulfilled = false,
    isRejected = false;
  // we track it is called or not
  let isCalled = false;

  let onFinally;

  // used to store resolve and and reject value
  let error, value;

  this.then = function (cb) {
    // so onResolved is not callback (we need to call later with resolved value)
    onResolved = cb;
    if(isFulfilled && !isCalled){
        isCalled = true;
        onResolved(value)
    }
    return this;
  };

  this.catch = function (cb) {
    // os onRejected also the function if promise are reject then cal
    onRejected = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onRejected(error);
    }
    // this allow to chaining same returning object
    return this;
  };


  this.finally = function(cb){
    onFinally = cb
    if(isFulfilled || isRejected){
        onFinally();
    }
    return this
  }

  function resolve(val) {
    if (typeof onResolved === "function" && !isCalled) {
      isCalled = true;
      onResolved(val);
    } else {
      isFulfilled = true;
      value = val;
    }
  }

  function reject(err) {
    if (typeof onRejected === "function" && !isCalled) {
      isCalled = true;
      onRejected(err);
    }
    isRejected = true;
    error = err;
  }

  try {
    executer(resolve, reject);
  } catch (error) {
    console.log(error);
    reject(error);
  }
}

p1 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success");
    }, 1000);
});

p2 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success1");
    }, 2000);
});

p3 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  reject("failed to load....");
    }, 5000);
});

p4 = new myPromise((resolved, reject) => {
    setTimeout(() => {
  resolved("success3");
    }, 0);
});

// # promise.

// Define the polyfill
myPromise.myAllSettled = function (promises) {
  return new myPromise((resolve, reject) => {
    let temp = [];
    let completedPromise = 0;

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          temp[index] = { status: 'fulfilled', value: result };
          completedPromise++;
          if (completedPromise === promises.length) {
            resolve(temp);
          }
        })
        .catch((error) => {
          temp[index] = { status: 'rejected', reason: error };
          completedPromise++;
          if (completedPromise === promises.length) {
            resolve(temp);
          }
        });
    });
  });
};



myPromise.myAllSettled([p1,p2,p3,p4]).then((result)=>{
    console.log(result)
    return result
}).catch((error)=>{
    console.error(error)
})


// p.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });
