/*
# promise.all()
1. promise.all is used to run all promise or (multiple asynchronous task ) parallel and wait until all them compleat successfully and at the end return an array with all of the promise are fulfilled.
2. if any one of the promise failed then failed compleat promise.all
3. promise.all waits for all the input promises to be resolved and returns a new promise that resolves to an array containing the result of the input promise (wait for all of them to finish)
4. It takes an array (or iterable) of promises as input and returns a single promise that resolves when all the input promises have resolved, or rejects as soon as any one of the input promises rejects.
5. If the one of the promise rejected the promise.all() method immediately or as soon as (returns  a promise that reject with an error of the first rejected promise.)  return a new promise that immediately reject with the same error also promise.all doesn't care other input promised where they are resolved or rejected 
7. promise.all() is fail fast process.

# ex.
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
    const shouldReject = false;
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

// promise.all take as an array of all promised
// this return us promise.all of the fulfilled promised as inside of an array

let result = Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// accepted the list of the promised and return new promise that resolved an array of result of the input promises if the all input promised are resolved or reject with an error of the first rejected promise
