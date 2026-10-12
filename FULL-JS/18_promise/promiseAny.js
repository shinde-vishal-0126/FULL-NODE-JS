/*
#  Promise.any();
1. It exactly like promise.race but what it does it 
2. It only returns the first fulfilled promise and ignores all the rejected promises.
3.it wait for the first success promise.
4. if all the promise are rejected it show the result as aggregation Error  with array of all the promise error
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = true; // Set to true to trigger rejection
    if (shouldReject) {
      reject("Error in promise");
    } else {
      resolve(10);
    }
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = true;
    if (shouldReject) {
      reject("error in p2");
    } else {
      resolve(20);
    }
  }, 1500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = true;
    if (shouldReject) {
      reject("reject in p3");
    } else {
      resolve(99);
    }
  }, 1000);
});

Promise.any([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

/*
If all promises are rejected, it throws an AggregateError, which contains all the rejection reasons
AggregateError: All promises were rejected
Promise.any() takes an array of promises and returns a new promise that resolves as soon as any one of the promises resolves. 
If all promises reject, the resulting promise rejects with an AggregateError that contains all the reasons for rejection.
*/


