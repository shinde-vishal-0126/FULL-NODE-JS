/*
# promise.allSettled():
1. it wait for to all promises are settled weather they are resolved or rejected 
2. Having the same syntax like Promise.all and promise.race but functionality is a bit different.
3. It work like exactly promise .all but even only one of the promise failed it gone return all of the promise that are fulfilled as well 
4. In promise.all if any on of the Promise are failed then it filed all the promise.all()
5.Promise.allSettled() any one promise failed then it return all of these array item so like fulfilled or rejected
i.e promise.all does not matter if any one of the reject or resolve it go through all the promises and return result as an array of the promise 
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = false; // Set to true to trigger rejection
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
    const shouldReject = false;
    if (shouldReject) {
      reject("reject in p3");
    } else {
      resolve(99);
    }
  }, 1000);
});

let result = Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/*
1. Use Case: Useful when you need to handle a collection of promises and want the results of all of them, regardless of success or failure.
2. Purpose: Promise.allSettled() is used to wait for multiple promises to settle (resolve or reject) and get the result of each promise.
3 Output: It returns an array of objects, each containing the status ("fulfilled" or "rejected") and either a value (for resolved promises) or reason (for rejected promises).

0
: 
{status: 'fulfilled', value: 10}
1
: 
{status: 'rejected', reason: 'error in p2'}
2
: 
{status: 'fulfilled', value: 99}

*/
