/*
# promise.all 

# in promise polyfill like promise.all , promise.allSettled, also promise.all also promise.any i have used forEach method because we need to running code with side effect.
# forEach is used here because it’s the most straightforward way to loop over an array when you're not using the return values — only doing work (side effects) inside the loop. 

| Loop Type  | Purpose                                      | Suitable? |
| ---------- | -------------------------------------------- | --------- |
| `forEach`  | Running code with side effects               | ✅ Yes     |
| `map`      | Transforming array elements into a new array | ❌ No      |
| `for...of` | Clean and readable for looping with index    | ✅ Yes     |
| `for` loop | Also works, but more verbose                 | ✅ Yes     |



 # What is Promise.all?
1. Promise.all(iterable) takes an array of promises.
# It returns a single promise that:
1.resolves when all promises resolve, with an array of results in order.
2. rejects immediately when any one promise rejects, with that rejection reason.




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

/*
# polyfill of promiseAll
1. promise.all take array as an input and return single promise with containing  array of all the resolved promise. if any one of the promise reject then whole promise.all are reject with given rejected promise error 

*/

myPromisePolyfill.Myall = function (promises) {
  return new Promise((resolve, reject) => {
    let temp = [];
    let completePromiseExecution = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          temp[index] = result;
          completePromiseExecution++;
          if (completePromiseExecution === promises.length) {
            resolve(temp);
          }
        })
        .catch((error) => {
          console.log("catch block is called ");
          console.log(error);
        });
    });
  });
};


const data = myPromisePolyfill
  .Myall([p1, p2, p3])
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((error) => {
    console.log(error);
  });

console.log(data);
