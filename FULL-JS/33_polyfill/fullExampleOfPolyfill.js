/*
# full example of polyfill

*/

let p1 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    reject("promise resolved 1");
  }, 3000);
});

let p2 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    resolved("promise resolved 2");
  }, 1000);
});

let p3 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    reject("promise resolved 3");
  }, 5000);
});

let p4 = new myPromise((resolved, reject) => {
  setTimeout(() => {
    reject("fetch data...");
  }, 2000);
});

function myPromise(executer) {
  let onResolve,
    onReject,
    // this check if the promise is fulfilled , rejected or  not
    isFulField = false,
    isReject = false,
    // store resolve and reject value
    value,
    error,
    // used to track the function call.
    isCalled = false,
    // used to handle the finally block
    isFinally;

  // register the resolved promise
  this.then = function (callback) {
    onResolve = callback; // so here onResolve is call back function
    if (isFulField && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this; // return same object for chaining
  };

  // used to register the reject promise
  this.catch = function (callback) {
    onReject = callback;
    if (isReject && !isCalled) {
      onReject(error);
    }
    return this;
  };

  //   function used to handle resolved promise
  function resolved(val) {
    if (typeof onResolve === "function" && !isCalled) {
      isCalled = true;
      onResolve(val);
    }
    value = val;
    isFulField = true;
  }

  //   defined function to handle reject promise
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
    executer(resolved, reject);
  } catch (err) {
    console.error(err);
  }
}

// p1.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error(error);
// });

// # promise.all
// # take input as an array and return single promise containing array or all the resolved promise 
// # if any one of the promise are reject it whole promise.all are failed and return rejected promise with its value
// myPromise.myall = function (promises) {
//   return new myPromise((resolved, rejected) => {
//     let res = [];
//     let totalCount = 0;
//     promises.forEach((promise, index) => {
//       promise
//         .then((result) => {
//           res[index] = result;
//           totalCount++;
//           if (totalCount === promises.length) {
//             resolved(res);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     });
//   });
// };

// let result = myPromise
//   .myall([p1, p2, p3, p4])
//   .then((result) => {
//     console.log(result);
//     return result;
//   })
//   .catch((error) => console.error(error));


// promise.AllSettled
// # take input as an array 
// # return array of object with all the resolved, rejected outcome i.e return the result of all the settled promise so which mey be resolved or rejected.

// myPromise.myAllSettled = function (promises) {
//   return new myPromise((resolved, reject) => {
//     let result = [];
//     let totalCount = 0;
//     promises.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           result[index] = { status: "fulFiled", value: res };
//           totalCount++
//           if (totalCount === promises.length) {
//             resolved(result);
//           }
//         })
//         .catch((error) => {
//             console.error(error)
//           result[index] = { status: "reject", reason: error };
//           totalCount++
//           if(totalCount === promises.length){
//             resolved(result)
//           }
//         });
//     });
//   });
// };

// let promise123 = myPromise.myAllSettled([p1,p2,p3,p4]).then((res)=>{
//     console.log(res)
//     return res
// }).catch((error)=>{
//     console.error(error)
// })

// console.log(promise123)



// # promise.any
// # promise.any take input as an array of promised 
// # and return single promise which is contain first resolved promise with it result 
// # if reject only when all the promise are reject then return aggregation error with all promise are rejected 

// myPromise.myAny = function(promises){
//     return new myPromise((resolve, reject)=>{
//         let resultArr = [];
//         let totalCount = 0;
//         promises.forEach((promise, index)=>{
//             promise.then((result)=>{
//                 resolve(result)
//             }).catch((error)=>{
//                 resultArr.push(error);
//                 totalCount++;
//                 if(totalCount === promises.length){
//                   reject ( new AggregateError(resultArr,'all promise are rejected.'))
//                 }
//             })
//         })
//     })
// }

// myPromise.myAny([p1,p2,p3,p4]).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


// # promise.race();
// # promise.race() take input array an an array 
// and return single promise that settled as soon as possible it may be rejected or resolved 

myPromise.myRace = function(promises) {
    return new myPromise((resolve, reject)=>{
        promises.forEach((promise, index)=>{
            promise.then((result)=>{
                resolve(result)
            }).catch((error)=>{
                reject(error)
            })
        })
    })
}

myPromise.myRace([p1,p2,p3,p4]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.error(error)
})