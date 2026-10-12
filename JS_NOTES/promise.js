// /*
// # note
// # async awat (@ Why can't await be used everywhere?)
//     - await can normally be used only inside an async function.
//     - Modern JavaScript also supports top-level await in ES modules, standardized in ES2022.
//     - In environments where top-level await is not available, we can wrap the code inside an async IIFE.
//     - await pauses the execution of the current async function until the awaited value settles;
//     - it does not block the entire JavaScript thread.


// @ Can we use await outside an async function?
//   - No, await can't be used outside an async function in regular JavaScript. It must always be
//   - inside an async function. However, there are two exceptions:
//   - using await at the top level in modern JavaScript environments (ES2022+, in modules);
//   - using immediately invoked async functions (IIFE) to wrap await.
//   - In CommonJS, top-level await is not available in the normal module context, so we use an async function or async IIFE. In modern ES modules, top-level await is supported, so we can use await directly at the module's top level. An async IIFE can be used in both CommonJS and ES modules; it is not specific to modern ES modules.
//   - To create a rejected Promise from an async function, throw an error inside the async function. Since an async function always returns a Promise, a thrown error causes that returned Promise to be rejected


// @ How do you make an async function reject?
//     - An async function returns a Promise.
//     - We can make that Promise reject by using throw inside the async function or by returning Promise.reject(error).
//     - Simply returning a value, even a value called "reject", fulfills the Promise.
// */

// // @ Why can't await be used everywhere?
// //     - await used for promise settled
// async function getData() {
//   const result = Promise.resolve('Hello');
//   console.log(result);
// }
// getData();
// // but if you write awati in normal js
// // const result = await Promise.resolve('Hello word');
// // console.log(result); // require() cannot be used on an ESM graph with top-level await. Use import() instead. To see where the top-level await comes from, use --experimental-print-required-tla.
// // The reason is that await traditionally needs an async execution context.

// // Normal rule
// // await can be used inside the async function

// async function getData1() {
//   const result = await Promise.resolve('Hello');
//   console.log(result);
// }
// getData1();

// // @ What if we have code outside an async function?
// // const result = await Promise.resolve('Hello');
// // console.log(result);
// //If your environment doesn't support top-level await, this won't work. One solution is an async IIFE.(Immediately Invoked Function Expression)
// (async function () {
//   const result = await Promise.resolve('Welcome');
//   console.log(result);
// })();

// /*
// @ js is single threaded, so how it handle multiple Api ?
//     - js + browser = asynchronous power.
//     -  js run on single thread  but the browser or node js environement provide asynchronous Apis. liek fetch, setTimeout, XmlHttpRequest etx that are non blocking.
//     -  This api are handle by brosers : web api & in node js : Libuv system outside the js engine
//     -  once the task is completed its callback or promise reaction queue and the event loop push this callback or promise reaction into the call stack to make multiple api call
//     - so use Promise.all or async await with promise.all
// */
// // ex Using Promise.
// const url1 = fetch('https://dummyjson.com/posts');
// const url2 = fetch('https://dummyjson.com/users');

// Promise.all([url1, url2])
//   .then(([res1, res2]) => {
//     Promise.all([res1.json(), res2.json()]).then(([data1, data2]) => {
//       console.log('data 1', data1);
//       console.log('data 2', data2);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// // Using async await

// async function fetchData() {
//   try {
//     const [res1, res2] = await Promise.all([url1, url2]);
//     const data1 = await res1.json();
//     const data2 = await res2.json();
//     console.log(data1, data2);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fetchData();

// // # What happen
// //  Promise.all return both request in parellel, then parse both bodies, the async version does not same with await.
// //  as soon as one request fails all it return error
// // so insted or Promise.all used Promise.allSettled to keep another resutl

// /*
// @ How many way to handle asynchronus operation in Js ?
//     - There isn't a fixed number,
//     - but the main asynchronous programming patterns in JavaScript are
//         - callbacks,
//         - Promises,
//         - and async/await. (async/await is built on top of Promises and provides a more readable way to work with Promise-based operations)
//         - Timers such as setTimeout and setInterval are also asynchronous scheduling mechanisms. .
//     ex.
// */
// // 1. callback : callback is function that you can pass as an argument to the another function with the expectation that will be called later
// function callbackFunction(cb) {
//   setTimeout(() => {
//     cb('Data Loaded !');
//   }, 1000);
// }
// callbackFunction((data) => {
//   console.log(data);
// });
// // after the timer is ready callback function are called
// // but Problem with the callback : When many asynchronous operations depend on each other, callbacks can become deeply nested the commanly called as callback Hell getUser((user) => {
// //     getOrders(user, (orders) => {
// //         getPayment(orders, (payment) => {
// //             getDetails(payment, (details) => {
// //                 console.log(details);
// //             });
// //         });
// //     });
// // });

// /*
// 2.Promise :A Promise represents the eventual result of an asynchronous operation.
//  promise having 3 state :
//  - Pending
//  - reject
//  - fullfield
//  - .then() use to registers a callback that will be executed when the Promise is fulfilled. The fulfillment value is passed to that callback
//  */
// function disaplyData() {
//   return new Promise((resove, reject) => {
//     let data = false;
//     setTimeout(() => {
//       if (data) resove('Data Loded...');
//       else reject('failed to fetch');
//     }, 1000);
//   });
// }
// // display data return promise immediately initially Promise : pending state
// disaplyData()
//   .then((data) => {
//     console.log('data', data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// /*
// @ async await
//   - async/awai is built on top of Promises.
//   - async function always return promise
//   - & await wait for that promise to settled and give you its fulfilled value.
// */

// const fetchData2 = async () => {
//   return Promise.resolve(' Data Loaded...');
// };
// let res = await fetchData2();
// console.log('res', res);

// /*
// @ setTimeout/setInterval()
//     - These are timer/ sheduling api rathen then another promise like way of consuming asynchronous resut
// */
// console.log('start');
// setTimeout(() => {
//   console.log('Done');
// }, 1000);
// console.log('End');

// /*
// @ How to create pending promise without the new Promise constructure
// @ or it is possible to using async/await
//   - A Promise that never reaches either state remains pending forever.

// */
// // async function always return promsie
// async function demoPromise() {
//   return 'resolved promise';
// }
// const result = demoPromise();
// console.log('final result', result); //final result Promise { 'resolved promise' }

// // creating the fullfield promise with async/await
// demoPromise()
//   .then((d) => {
//     console.log('data', d);
//   })
//   .catch((e) => {
//     console.log(error);
//   });

// // how do you actually promise are rejected
// async function rejected() {
//   throw new Error('something went wrong...');
// }
// rejected
//   .then((d) => {
//     console.log('data', d);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // @ following example demostrate all 3
// // 1. Fulfilled Promise
// async function fulfilled() {
//   return 'Success';
// }

// // 2. Rejected Promise
// async function rejected() {
//   throw new Error('Failed');
// }

// // 3. Pending Promise
// async function pending() {
//   await new Promise(() => {});
// }

// fulfilled().then((value) => {
//   console.log('Fulfilled:', value);
// });

// rejected().catch((error) => {
//   console.log('Rejected:', error.message);
// });

// pending().then(() => {
//   console.log('Pending resolved');
// });

// // new example
// // An async function automatically returns a Promise. If it awaits a Promise that never settles, the Promise returned by the async function remains pending.
// // async/await itself doesn't directly create an indefinitely pending Promise; it needs a Promise that remains pending
// const neverSettles = new Promise(() => {});

// async function pendingPromise() {
//   await neverSettles;
// }

// const result1 = pendingPromise();

// console.log(result1);


const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve('Data Fetched SuccessFully....')
    } else {
      reject('Failed to fetch....')
    }
  }, 1000);


})
newPromise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})