/*
# promise
1. promise is good way to handle asynchronous operation. (or placeholder for result of asynchronous operator )
2. promise in javascript in an object that represent eventual completion or failure of an asynchronous operation with it resulting value.
3. promise basically represented upcoming completion or failure of an asynchronous operation or event  with it  resulting value.
4. Here's they are cleaner and structured way to help avoid "callback hell":
5. in javascript promise is an objects that encapsulates the result of an Synchronous operation
6.  Promises provide a structured way to handle asynchronous tasks and offer significant advantages over traditional callbacks

1.promise having 3 condition or state
    1. pending
    2. fulfilled with result value
    3. rejected with reason.
2. promise have built in method like then and catch to handle the result of asynchronous operation when they complete or encounter error
4. you must to need used .then() method to handle the promise
3. promise.then(onFullFiled, onRejected ) : .then() method having 2 argument one for successful and another one is failure
    2nd argument is optional

# how .then() method work
promise.then(onFullFiled, onRejected)
    1. onFullFiled is function used to handle the success (resolve value);
    2. onRejected is function used to handle the failure value (rejection reason) (it is optional)
promise.then((res)=>{
    resolved(res)
    }).catch((error)=>console.log(error))
If you want to handle failures separately, you can also use .catch().


# Note:
1. at the beginning the state of promise is pending (indicating the synchronous operation in process) : so promise object is pending so result is undefined
2. depending upon the result of asynchronous operation state change either fulfilled or rejected
3. So the fulfilled state indicates that asynchronous operation was completely successful.(When the promise object is fulfilled → result is value)
4. So the rejected state indicates that the asynchronous operation failed (When the promise object is rejected the result → is an error object )


# create promise
1. create promise using Promise() constructor
2. This constructor involve to create new instance of promise class which take function often referred as execution function
3. so Promise constructor accept the callback function with 2 argument are resolved and reject typically that perform asynchronous operation (so this callback referred as executor function)
4. In a Promise object, resolve and reject are functions used to determine the final state of the promise:
    1. resolve(value) – Marks the promise as fulfilled and returns the provided value to the .then() method.
    2. reject(error) – Marks the promise as rejected and passes the error to the .catch() method for handling.
*/

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) resolve("fetch data");
    else reject(new Error("not fetch"));
  }, 2000);
});
// 1.to run or execute the promise using the .then()
// 2. then() means promise is fulfilled
// 3. if the fail then the promise is not fairfield then we can get the result in catch
newPromise
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
// 1. then() used to get result when the promise fulfilled
// 2. cath() used the get the error when failed the promise

// # how to defined the promise directly resolved or rejected
// 1. directly resolve promise
let promise = Promise.resolve("fetch successFully...");
console.log(promise);
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2 directly reject promise
let promise1 = Promise.reject("failed to fetch....");
console.log(promise1);
promise1.then((res) => console.log(res)).catch((error) => console.log(error));

// # are you able to  create a promise by defining a function that return a promise this function usually encapsulate some asynchronous operation inside this function you manually create a promise and resolve or reject it based on the result of asynchronous operation (handle each promise separately)
function importantAction(user_name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user_name);
    }, 2000);
  });
}

function likeVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(video);
    }, 3000);
  });
}

function sharedVideo(shared) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(shared);
    }, 1000);
  });
}

importantAction("vishal").then((result) => console.log(result))
  .catch((error) => console.log(error));

likeVideo("js")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

sharedVideo("on youtube")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// # note
// 1. Promises can not go from fulfilled state to the rejected state and vice versa  and it can not go back from fulfilled or rejected state to the pending state.
// 2. Once new promise object created it state is pending
// 3. If promise reaches state is fulfilled or rejected, state if resolved

// # how to consume promise.
// To consume promise in js
// 1. using then(), catch(), and finally() block
// 2. also using async/await
// ex
const fetchData = () => {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      //   resolved("fetch data successfully....");
      reject("failed to load...");
    }, 1000);
  });
};
// 1. to consume promise using then(), catch() and finally block
fetchData()
  .then((result) => {
    console.log("result123", result);
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "clean up function always run if the promise is resolved or not.."
    );
  });
// # then() Method:
// 1.The then() method is used to handle the result of a Promise once it has been fulfilled (resolved) or rejected.
// 2. Syntax: Promise.then(onFulfilled, onRejected)
// 3. then() accepts two callback functions:
// 4. onFulfilled: This function is called when the promise is fulfilled (resolved).
// 5. onRejected: This function is called when the promise is rejected.
// 6. Both callbacks are optional, meaning you can provide either or both of them.

// # 2. catch() Method:
// 1. The catch() method is used to handle errors when a promise is rejected.
// 2. Syntax: Promise.catch(onRejected)
// 3. catch() is essentially shorthand for then(undefined, onRejected).
// 4. It is used when you are only interested in handling the rejection and not the fulfillment of the promise.

// # 3. finally() Method:
// 1. The finally() method is used to execute a block of code after the promise has settled, regardless of whether it was fulfilled or rejected.
// 2. Syntax: Promise.finally(onSettled)
// 3. The code inside finally() will run after the promise settles, and it will run regardless of whether the promise was fulfilled or rejected.

// also we have to consume promise using async/await
const ConsumePromise = async () => {
  try {
    const data = await fetchData();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finish...");
  }
};
console.log(fetchData);
let res = ConsumePromise(); // here return promise as reject
console.log("res..", res);
// # async await Cleaner way to handle promises
// async makes a function return a promise.
// await waits for the promise to resolve or reject.
// If resolved → goes to try block.
// If rejected → goes to catch block.

// # ex.2
let success = true;
function getUser() {
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve([
          {
            username: "vishal",
            email: "shindev05@gmail.com",
          },
          {
            username: "shinde",
            email: "test@gamil.com",
          },
        ]);
      }, 2000);
    } else {
      reject("failed to load user data...");
    }
  });
}
//# if you don't need to used catch you have to handel using then only so you need to defined handler function in following way
function onFulfilled(user) {
  console.log("user345", user);
  // # What it does:
  // It is a callback function that is used when a Promise is resolved (fulfilled).
  // The user parameter receives the resolved value from the Promise.
  // It logs the message "user345" followed by the data it received.
}
function onRejected(error) {
  console.log(error);
}
// # What it does:
// This is a callback function that runs when a Promise is rejected (failed).
// The error parameter receives the rejected error message.
// It logs the error to the console.
getUser()
  .then(onFulfilled, onRejected)
  .finally(() => {
    console.log(
      ' "Promise settled (fulfilled or rejected). Cleanup actions can be performed here "'
    );
  });

/*
# note

# Summary
1.Promise is an object then encapsulate the result of an synchronous operation
2. promise give trust and garrulity for your whole transaction
3. promise object are immutable (Yes, Promise objects are immutable, meaning that once a Promise is settled (resolved or rejected), its state cannot change) also The .then(), .catch(), and .finally() methods allow you to handle the result, but they don’t change the original Promise.
4. A promise starts with a pending state and ends with either a fulfilled state or rejected state.
Used then() method schedules or handles a promise by giving  a callback to be executed when the promise is fulfilled and catch method to schedule callback to be invoked when the promise is rejected.
5.Place the code that you want to execute in the final method whether the promise is fulfilled or rejected .
*/

// # how to solved promise recursively
// 1. It's the process in which a function repeatedly calls itself until a condition is met that makes it stop.
// 2. Recursion is the technique of making a function call itself.  (A recursive function is a function that calls itself during its execution)
function importantAction(user_name) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`subscribed to the ${user_name}`);
    }, 500);
  });
}
function likeVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`like the video ${video}`);
    }, 100);
  });
}
function sharedVideo(shared) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`share the video ${shared}`);
    }, 2000);
  });
}

promiseRecursively([
  importantAction("vishal"),
  likeVideo("js"),
  sharedVideo("social media"),
]);

function promiseRecursively(functionPromise) {
  if (functionPromise.length === 0) return;
  let currentPromise = functionPromise.shift();
  currentPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  promiseRecursively(functionPromise);
}

/*
# callback (to why promise are come into picture )
# why call back essential in js;
1. callback are essential in js because they allow you to handle the asynchronous operation efficient without blocking the main execution flow of your code or program so that why callback needed.

2. JavaScript is single-threaded, which means it can only execute one task at a time. Many tasks (like reading files, making API requests, or waiting for user input) take time to complete.

3.  Instead of blocking the entire program while waiting for these tasks to finish, you use callbacks to specify what should happen once the operation is complete.(It can't block while waiting for long-running tasks (like API calls, file reading).)

4. So it uses asynchronous callbacks to schedule what should happen after the task finishes, without blocking the rest of the program.


 # Example without Callback (Synchronous Code)
1. The program would halt and wait for the API request to return.

2. When you write synchronous code, the program executes each statement one after the other in a linear fashion. If there's a time-consuming task, like an API call, the program will pause at that line and wait until it gets the result. Once the result is returned, it moves on to the next line of code.

# Explanation:
This simulates synchronous behavior.
The code waits for fetchUserData() to finish before moving to the next line.
It’s blocking – fine for quick tasks, but not suitable for real API calls which take time.

# without callback
*/
function fetchUser() {
  const user = {
    name: "vishal",
    age: 29,
  };
  console.log(user);
  return user;
}
console.log("startFetching..");
const data = fetchUser();
console.log("data", data);
console.log("end program");
// This simulates synchronous behavior.
// The code waits for fetchUserData() to finish before moving to the next line.

// # to add asynchronous nature used callback in this code
// 1. With a callback: The program continues executing other code while the API request is being processed. Once the request finishes, the callback is executed with the result

function fetchUserData(cb) {
  setTimeout(() => {
    const user = { name: "vishal", age: 29 };
    cb(user);
  }, 4000);
}
console.log("start execution..");
fetchUserData(function (user) {
  console.log("user_data :", user);
});
console.log("end of the program");

/*
#
1. so here callback are used to handled the asynchronous operation in your code.
2. but Multiple Asynchronous Operations Depend on Each Other: i.e If you have several asynchronous operations that need to run in sequence and each one depends on the result of the previous operation,
so you end up nesting callbacks within each other, which makes the code difficult to follow.
3. so Callback hell occurs when you have multiple nested callbacks, especially in asynchronous code, and the code becomes hard to read, maintain, and debug. It usually happens when:

# Why Callbacks?
Callbacks are needed to:
    1. Handle asynchronous operations (API calls, file reads, etc.)
    2. Avoid blocking the main execution thread in JavaScript (which is single-threaded)
    3. Define what to do after an async operation completes

# Problem:
# When multiple asynchronous operations depend on each other, you need to nest callbacks, which leads to callback hell.

ex.
*/
console.log("start");
function importantAction(user_name, cb) {
  setTimeout(() => {
    console.log(user_name);
    cb(user_name);
  }, 2000);
}

function likeVideo(user_name, video, cb) {
  setTimeout(() => {
    console.log(user_name + " " + video + " ");
    cb(user_name, video);
  }, 500);
}

function sharedVideo(user_name, video, like, cb) {
  setTimeout(() => {
    console.log(user_name + " " + video + " " + like);
    cb(user_name, video, like);
  }, 1000);
}
importantAction("vishal", (user_name) => {
  return likeVideo(user_name, "js", (user_name, video) => {
    return sharedVideo(
      user_name,
      video,
      "youtube",
      (user_name, video, like) => {
        console.log(user_name + " " + video + " " + like);
      }
    );
  });
});

/*




# Why It’s a Problem:
1. Code becomes deeply nested
2. Hard to read and debug
3. Difficult to handle errors in each step
4. Difficult to scale or modify

1 Callback hell refers to a situation in programming where callbacks are nested within each other, creating a deep, pyramidal structure. This makes the code harder to read, understand, maintain, and debug.
It is especially common in JavaScript, where asynchronous operations (like handling network requests, timers, or file I/O) require callbacks to handle the results.

# so call back face the issue of callback hell
Issues with Callback Hell:
1. Indentation and Readability (it create nested structure): As the level of nesting increases, the code becomes more difficult to read and maintain.
2. Error Handling: Managing errors at every level of nesting becomes complicated
3. Reusability: The functions are tightly coupled, making them difficult to reuse in different contexts.
4. Readability: The code is difficult to read because of the deep nesting.
5. Maintainability: As more features are added, maintaining the code becomes complicated due to the complex structure.
6. Reusability: It's harder to reuse functions, as the logic is tied up in deeply nested callbacks

*/


// # to solved this issue promise are come into picture.
console.log("start");
// remove the callback and defined the promise and inside the settimeout resolved the promise.
function importantAction(userName) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`subscript to the ${userName}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`like the Given ${video} video`);
    }, 0);
  });
}

function shareVideo(video) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`share the give ${video}`);
    }, 0);
  });
}
console.log("stop");

// here we have to handled the promise
importantAction("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

likeTheVideo("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

shareVideo("vishal")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// 1. While your approach works fine for independent promises,
// 2. handling the promises separately in the current code.
// 3. Each function (importantAction, likeTheVideo, and shareVideo) returns a promise, and then you use .then() and .catch() to handle the resolved or rejected values independently for each one.
// # but i want to run these promises in a sequential manner, meaning you want to wait for one promise to complete before starting the next one, you can chain the promises like this:
// 2. the approach you've shared is running the promises sequentially by chaining .then() calls. This way, each promise waits for the previous one to complete before starting the next one.

//  approach 2
importantAction("vishal")
  .then((res) => {
    console.log(res);
    likeTheVideo("javascript")
      .then((res) => {
        console.log(res);
        shareVideo("node js")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

//   # so not it show is much more cleaner approach we are not supposed to you know pass call back to then function an an argument we  can just do dot then and and we can pass another action  and we have also having error handling
// but
// # if you notice someThing there is nesting of callbacks function have a your code little bit messy if you have such more callback function nested inside that  so this is weird looking structure its forming pyramid like structured it is also some time called pyramid of Doom and this concept is know as  promise  hell.
// it called promise hell because it having so many nested callback one inside the another that is very hard to read and very hard to understand our code .what is solution for this problem  promise chaining

/*
#  Your code works functionally, but the structure is not recommended due to nested .then() blocks and repeated .catch() calls, which makes the code hard to read, error-prone, and difficult to maintain.

# ....

1. However, this approach can become difficult to maintain and read as the number of chained promises grows, which is often referred to as "callback hell" or "promise hell.
2.  which happens when you nest multiple .then() then and catch calls within each other.
3. This makes the code harder to maintain and debug. create pyramid like structure.
4. so above code you also defined in a following way both are same but just instead of each and every function return catch block you have return common catch block for all promise or function
5. this is much cleaner and structured approach here we are not pass (callback) function as an argument here we can do just .then() and pass next another action and at the end we have error handling

*/

// # solution 3
importantAction("vishal")
  .then((res) => {
    console.log(res);
    likeTheVideo("like javascript interview").then((res) => {
      console.log(res);
      shareVideo("javascript interview video").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

// # You’re nesting .then() inside .then(), which brings back the problem of callback hell
/*
 # Problems with this approach:
1. Nested Structure — Gets more complex as you add more async steps.
2. Poor Error Handling — The inner promises (likeTheVideo, shareVideo) are not part of the main chain, so if an error occurs in them, the outer .catch() won’t catch it.
3. Harder to Read — Indentation grows rapidly and readability suffers.

#

1. importantAction('vishal') resolves, and its result is logged.
2. Once importantAction resolves, you call likeTheVideo('like javascript interview') in the next .then(),
3. and once that resolves, you call shareVideo('javascript interview video').
4. Each .then() returns a promise and, upon resolution, logs the result.
5. but it still uses nested .then() blocks, which can quickly become harder to manage and read as more asynchronous tasks are added.
6. so in above code show the pyramid like structure then why we deal with promise facing again pyramid like structure or promise hell issue here we have nested promise make code more hard to understand
7. This works fine for small tasks, but as the complexity increases (more tasks or nested functions), the nesting could get deep, which might lead to harder-to-read and maintain code
8. don't worry we have more then one approach in promises to do this in for promise chaining
9. first we have to call the first promise so this first promise return new promise (which is next promise) once we return new promise then we chaining the another .then() to resolved the promise
*/

//  cleaner approach (avoiding deep nesting):
// # You can flatten the promise chain to avoid nesting:
importantAction("vishal")
  .then((res) => {
    console.log(res);
    // here it return new promise like
    return likeTheVideo("javascript interview question");
    // then we chaining another then() to resolved the promise
  })
  .then((res) => {
    console.log(res);
    // then this return another new promise like
    return shareVideo("javascript interview question");
    // then we chaining the another then to resolved the promise
  })
  .then((res) => {
    console.log(res);
    // then at the end we have handled the error using catch
  })
  .catch((err) => {
    console.log("catch blocked called");
    console.log(err);
  });

//  Each .then() returns a Promise, which allows the next .then() to wait for its resolution — hence, it forms a chain.

/*
# imp explanation about promise chain

# so above code much much clear then previous approach this is called as promises chaining
# why we are calling promise chaining because we chaining these promises as we returning a promise and then we chaining another promise one after the other as we return the value of previous promise

This approach is called Promise chaining because we are chaining multiple .then() calls together.

In each .then() block, we are either returning a value or another Promise. If we return a Promise, the next .then() waits for it to resolve before running. This creates a chain of asynchronous operations, where each step waits for the previous one to complete.

# Why it’s better than previous (nested) approach:
Cleaner and more readable
Avoids "callback hell" or deeply nested structure
Easier to maintain and debug
Handles errors in one centralized .catch()

*/

/*
# execution flow of above code
. Initial importantAction Promise:
1. importantAction('vishal')
The function importantAction('vishal') returns a Promise.
This promise is asynchronous and takes some time to resolve or reject.
The then() method attaches a callback function to be executed when the promise is resolved (i.e., when importantAction completes its task).
1. First .then() Call:
After the importantAction promise resolves, the result (res) is passed to this .then() callback.
The console.log(res) will print the result of importantAction('vishal') (e.g., something like "subscribed to vishal").
Once console.log executes, it proceeds to the next asynchronous task: likeTheVideo('like javascript interview').
2.  Second likeTheVideo Promise:
After importantAction completes, likeTheVideo is called, which also returns a Promise.
Since likeTheVideo is asynchronous, it will be executed in the background and the code continues executing until it resolves.
Once likeTheVideo resolves, the result is passed to the next .then() block.
2. Second .then() Call:
When the likeTheVideo promise resolves, its result (res) is passed to this .then() callback.
The result (e.g., "liked the given like javascript interview video") will be logged using console.log(res).
Once this completes, it proceeds to the next asynchronous task: shareVideo('javascript interview video').
3. Third shareVideo Promise:
The function shareVideo is called, which also returns a Promise.
This promise will be resolved once the asynchronous operation inside shareVideo completes.
3. Third .then() Call:
After shareVideo resolves, its result (res) is passed to this .then() callback.
 The result (e.g., "shared the given javascript interview video") will be logged using console.log(res).

# Catching Errors with .catch():

1. if any of the promises (importantAction, likeTheVideo, or shareVideo) are rejected (i.e., they throw an error), the error will be passed to the .catch() block.
2. catch() will log the error using console.log(err).
This ensures that if there’s an issue with any of the promises (e.g., network error, invalid data, etc.), you can handle it gracefully and prevent unhandled promise rejection errors
*/

/*
# Why Use .then() Chaining?
1/Sequential Execution:
    1.Each task (e.g., likeTheVideo, shareVideo) starts only after the previous task has completed.
This ensures tasks are executed in the desired order.
2. Asynchronous Nature:
    1. Even though tasks are executed one after another, the asynchronous operations (e.g., network requests, timeouts) don’t block the main thread, allowing the application to remain responsive.
3. Error Handling:
    1. Using .catch() at the end of the chain allows you to handle errors from any of the promises in a single place. This prevents the need for multiple .catch() blocks nested inside each .then().

# Chaining: You chain .then() calls to execute asynchronous tasks one after another:
    1. First, importantAction('vishal') is called, then the .then() callback executes.
    2. Then likeTheVideo is called in the first .then(), and its result is passed to the next .then().
    3. Finally, shareVideo is called, and the result is logged in the final .then().
# so above concept is call as promises chaining
    1. Cleaner Structure: The promise chain is flatter,  making it easier to read.
    2. Simplified Flow: Each .then() simply returns the next promise, which helps keep things organized. so flattened promise chain improves readability and maintainability.
    3. Single Error Handler: With a flat structure, you only need one .catch() to handle any errors from the entire chain.


importantAction('vishal')  ──> Resolves with: "subscribed to vishal"
    │
    └─> passes to .then() ──> likeTheVideo('like javascript interview')
.then() (res = "subscribed to vishal")
│
└─> passes to likeTheVideo('like javascript interview') ──> Resolves with: "liked the given javascript interview video"
       │
       └─> passes to .then() ──> shareVideo('javascript interview video')
.then() (res = "liked the given javascript interview video")
│
└─> passes to shareVideo('javascript interview video') ──> Resolves with: "shared the given javascript interview video"
       │
       └─> logs result: "shared the given javascript interview video"


1. importantAction('vishal') resolves first with "subscribed to vishal", and this value is passed to likeTheVideo.

2. likeTheVideo('like javascript interview') resolves with "liked the given javascript interview video", and this value is passed to shareVideo.

3. shareVideo('javascript interview video') resolves with "shared the given javascript interview video", and this value is logged.

4. Each promise passes its result to the next promise in the chain.

#  What happen any promise in a promise chain is rejected,:
    1. any promise in a promise chain is rejected, it immediately skips all subsequent .then() handlers and jumps to the nearest .catch() block that handles the error.
Start
│
V
importantAction('vishal') ───> Resolves with: "subscribed to vishal"
                                 │
                                 └──> passes to .then() → likeTheVideo('like javascript interview')
                                                              └──> Rejects with: "Video not found"
                                                                                  │
                                                                                  └──> Skips further .then() calls
                                                                                      │

                                                                                └──> Goes to .catch() → logs "Error caught: Video not found"


# why we are calling the promise chaining ?

    1. We use Promise chaining to handle multiple asynchronous operations in a sequential manner while maintaining readability and avoiding deeply nested callbacks (callback hell).

# Why Use Promise Chaining?

1. Sequential Execution
    1. Ensures that one asynchronous operation completes before the next one starts.
    Example: Fetch user details → Get user orders → Process order payments.
2. Avoid Callback Hell
    2. Without chaining, nested callbacks can become hard to read and maintain.
    Promise chaining keeps code flat and structured.
3. Error Handling Simplification
    1. A single .catch() at the end of the chain can handle errors for all previous promises.
4. Improved Readability
    Code flows top to bottom, making it easier to understand.

    1. so the when chaining this promises returning the new promise and then we are chaining another promise one after the another as we return the value for the previous promise then we pass result to the next promise so each promise depends upon each other.

    2. Promise chaining refers to the way promises can be linked together, one after another.

    3. Each .then() or .catch() method attached to a promise returns a new promise,

    4. and that returned promise can be chained with the next .then() call to continue the sequence of asynchronous operations

    5. so also you this about you code this is pretty lengthy way of doing it so here we have one approach is call as promise combinator. which are make our work super easy

    6.different promises, the code can become lengthy and harder to maintain. The code becomes more verbose, especially when you have several asynchronous operations that depend on each other. This is where combinator (such as Promise.all(), Promise.allSettled(), Promise.race(), or async/await) can be helpful, making the code shorter, cleaner, and more readable.


# what are the advantages of the promise:
    1.Promises in JavaScript provide asynchronous execution, improved readability, better error handling, chaining for sequential operations, and avoidance of callback hell.

    # Here are the advantages of Promises in JavaScript, each explained separately:
    1. Asynchronous Execution – Promises allow non-blocking code execution, enabling the program to continue running while waiting for an operation to complete.

    2. Improved Readability – Promises make asynchronous code more readable and structured compared to nested callbacks.

    3. Better Error Handling – Errors can be caught using .catch(), making debugging and handling failures easier.

    4. Chaining for Sequential Operations – Multiple asynchronous tasks can be executed in a sequence using .then(), avoiding deeply nested callbacks.

    5. Avoidance of Callback Hell – Promises prevent excessive nesting of callbacks, making the code cleaner and more maintainable.

    6. solved the issue of the inversion of control

# Promises solve these issues
1. Promises flatten the nesting and improve readability
2. Gives control back to the caller
3. Better error handling using .catch()


# why promise combinator are come into picture'
or
# what is promise combinator in javascript or what is promise api ?

1. The Promise API in JavaScript provides methods to work with multiple Promises efficiently

2. A promise combinator is a function or method in JavaScript that allows you to work with multiple promises simultaneously, combining their results or handling their outcomes collectively (They help in running multiple asynchronous tasks in parallel or managing their results efficiently.)

3.These combinator make it easier to manage multiple asynchronous operations and control how you handle their results or failures.

4.  Promise combinator are especially useful when you need to work with multiple asynchronous operations and want to control how they resolve or reject.

5. While promise chaining is great for sequential operations (where one task depends on the result of the previous one), it doesn't handle multiple independent promises well.


# 1. we used callbacks in JavaScript
    1. JavaScript is single-threaded, so to handle asynchronous operations (like API calls, file reading, timers, etc.), we use callbacks:

    # Problems with Callbacks
    1.Callback Hell (nested structure becomes unreadable)
    2. Inversion of Control: You hand control of your function to another function, and hope it calls your callback correctly.

# 3. Promises solve these issues
    1.Promises flatten the nesting and improve readability by promise chaining
    2. Gives control back to the caller
    3. Better error handling using .catch()

    #  Problem with Promises
    1. When you have to run multiple asynchronous operations in parallel or coordinate multiple promises, chaining is not enough or becomes hard to manage.

    2. While promise chaining is great for sequential operations (where one task depends on the result of the previous one), it doesn't handle multiple independent promises well.

    2.  while basic promise solved many issues handling multiple efficiently still needed improvement the promise api was introduce (


    1. Example:
        If you want to:
        1. Wait for multiple promises to finish
        (also handle multiple promise at once)
        2. Take first successful result
        3. Run promises in race
        4.Handle boTH success and failure cases

        Chaining doesn't help. That’s where Promise Combinator are introduced.

# then the solution for that : Promise Combinator

| Combinator             | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `Promise.all()`        | Wait for all promises to finish (success or fail)    |
| `Promise.race()`       | Return the first finished promise (success or fail)  |
| `Promise.allSettled()` | Wait for all promises to settle (resolve or reject)  |
| `Promise.any()`        | Return the first *resolved* promise (ignore rejects) |


 #


*/
