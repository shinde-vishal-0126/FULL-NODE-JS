/*
# promise chaining 

# what is promise chaining 
1. promise chaining is technique in js where multiple asynchronous operation are performed in sequences with each subsequent operation starting after the previous one has completed.
2. this achieved by returning a new promise form the .then() handler of the previous promise.

3. promise chaining is technique were multiple .then() handlers are used to handle asynchronous operation in a structured way like each then() return new promise which allowing chaining multiple asynchronous operation in a linear fashion.

4. instead of nesting multiple callback (as callback hell) promise chaining ensure 
    1.cleaner and more reusable code 
    2. sequential execution of asynchronous operation
    3. error handling using catch()
*/

// promise chaining means using multiple .then() method one after another so the the output of the one promise is pass as input to the next  it helps to run asynchronous operation in sequences


// # Why "chaining"?
// Because each .then() returns a new promise, so you can attach another .then() to it. This creates a chain of promises.

//#  Benefits

// Avoids callback hell (deeply nested functions).
// Makes async tasks run sequentially in order.
// Each .then() receives the result of the previous promise.
// Errors can be handled in one .catch() at the end.

// In short:
// Promise chaining is a way of executing asynchronous tasks step by step, where the result of one .then() is passed down to the next .then().

// # promise chaining
// 1. js chaining pattern that chain the promise to execute asynchronous operation in sequences.
// 2. Def:Sometimes you want to execute two or more related asynchronous operations where the next operation starts with the result from the previous step.

// # 1
const firstPromise = new Promise((res, rej) => {
  res("first");
});
const secondPromise = new Promise((res, rej) => {
  res(firstPromise);
});

secondPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


  

// 2
// Example 2 :
function importantAction(user_name) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(`${user_name}`);
    }, 0);
  });
}
function likeVideo(video) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(`${video}`);
    }, 1000);
  });
}
function sharedVideo(shared) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved(`${shared}`);
    }, 2000);
  });
}

importantAction("vishal").then((res) => {
  console.log("res1", res);
});
likeVideo("javascript").then((res) => {
  console.log("res2", res);
});
sharedVideo("subscribed")
  .then((res) => {
    console.log("res3", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

// # in above example also see the we have to execute the promise individually but in some case i want to run the promise in sequentially where one promise are depend on the another then
// to more than one approach we have to do then using
// 1.promise chaining
importantAction("shinde")
  .then((res) => {
    console.log("new res", res);
    return likeVideo("Node").then((res) => {
      console.log("new res1", res);
      return sharedVideo("sub").then((res) => {
        console.log("new res 2", res);
      });
    });
  })
  .catch((err) => {
    console.log("new error", err);
  }); //  after one promise resolved  we have to defined another promise

// #  This works, but it's not ideal because you're nesting promises, which makes it look like callback hell again.
// # This defeats the purpose of promises — promises were introduced to avoid such nesting.

/*

| Nested Style                              | Chained Style                        |
| ----------------------------------------- | ------------------------------------ |
| Harder to read and maintain               | Easier to read and extend            |
| Looks like "callback hell" again          | Clean, linear flow                   |
| Each `.then()` contains another `.then()` | Each `.then()` handles one step only |
| Mixing logic in nested functions          | Logic stays flat and clear           |

*/

// #  Better: Flattened Promise Chaining
// If each promise depends on the previous, use flat chaining

importantAction("shinde")
  .then((res) => {
    console.log("new res", res);
    return likeVideo("Node");
  })
  .then((res) => {
    console.log("new res1", res);
    return sharedVideo("sub");
  })
  .then((res) => {
    console.log("new res 2", res);
  })
  .catch((err) => {
    console.log("new error", err);
  });

/*
# Key Points of promise chaining:
1. Sequential Execution: Each operation in the chain depends on the result of the previous operation.
2. Error Handling: If any promise in the chain is rejected, the chain skips subsequent .then() handlers and executes the nearest .catch() block.
3, Cleaner Syntax: Promises make the code more readable and manageable, avoiding deeply nested callbacks (commonly known as "callback hell").
# means
Structured Asynchronous Flow: Clearly defines the sequence of operations.
Error Handling: Centralized error handling through .catch().
Readability: Easier to understand and maintain compared to nested callbacks.


# Why do we call promise chaining ?
1.We call it promise chaining because it involves executing a series of asynchronous tasks in sequence,
2. where each task depends on the result of the previous one. By "chaining" .then() methods, each promise is linked or "chained" to the one that precedes it, ensuring that the tasks execute in order.

#  Key Reasons for Promise Chaining:
1. Sequential Execution: In promise chaining, each asynchronous operation runs only after the previous one completes.
2. This creates a clear sequence of dependent operations, unlike parallel execution where tasks can run independently.
3. setTimeOut() function simulate an asynchronous operation

*/

let p = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved(10);
  }, 3 * 100);
});
p.then((res) => {
  console.log("res", res);
  return res * 2;
})
  .then((res) => {
    console.log("res", res);
    return res * 3;
  })
  .then((res) => {
    console.log(res);
    return res * 4;
  });

//  # this is example of the promise chaining
// 1. Handling Dependent Results:
//  In many cases, the result of one operation is required for the next operation. For example, you might need to fetch user data from an API and then use that data to fetch additional information from another API. Promise chaining allows you to pass the result of one promise to the next in the chain.
//  2. Error Handling:
//  In a promise chain, you can catch errors in one place rather than handling them individually for each asynchronous operation. The catch block at the end of the chain handles any errors that occur in any of the previous promises in the chain.

// # How Promise Chaining Works:
// When a .then() block is attached to a promise, it returns a new promise. If the handler function in .then() returns a value, that value becomes the resolution value of the new promise. If it returns another promise, the chain waits for that promise to resolve before continuing.

// # NOTE
// Also by using  promise chains we have like this code pretty lengthy so that we have one more approach in promise which is called as Promise combinator.
// When you call then() method multiple time on promise is is not promise changing

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(10);
  }, 3 * 100);
});
p1.then((res) => {
  console.log(res);
  return res * 2;
});
p1.then((res) => {
  console.log(res);
  return res * 3;
});
p1.then((res) => {
  console.log(res);
  return res * 4;
});
// In this example we have multiple handler for one promise. This handler has no relationship. Also they execute independently and don't pass the result from one to another like the promise chain above.
//# Returning a promise
// When you return value in the then() method the then method returns a new Promise that immediately resolves to the return
// you also return new promise in the then method

let p3 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved(10);
  }, 3 * 100);
});
p3.then((result) => {
  console.log("1", result);
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(result * 2);
    }, 3 * 100);
  });
})
  .then((result) => {
    console.log("2", result);
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        resolved(result * 3);
      }, 3 * 100);
    });
  })
  .then((result) => {
    console.log("3", result);
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        resolved(result * 3);
      }, 3 * 100);
    });
  })
  .then((result) => {
    console.log("4", "result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
//if you need to pass the result from the previous task to the next one to without passing result used above approach.

// # Example :
// The following function illustrates the three synchronous operations ?
// suppose that you want to perform the following asynchronous operation sequentially.
// get the user from the database
// Get the services of the selected user
// Calculate the services cost of the user

function getUser(userId) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved({
        userId: userId,
        username: "admin",
      });
    }, 3 * 100);
  });
}
function getServices(user) {
  return new Promise((resolved, reject) => {
    console.log(`get teh services of the user ${user.username} from the api`);
    setTimeout(() => {
      resolved(["email", "vpn", "cdn"]);
    }, 3 * 100);
  });
}
function getServicesConst(services) {
  return new Promise((resolved, reject) => {
    console.log(`calculate the services const of the ${services}`);
    setTimeout(() => {
      resolved(services.length * 1000);
    }, 3 * 100);
  });
}

getUser(100)
  .then((result) => {
    console.log(result);
    return getServices(result);
  })
  .then((result) => {
    console.log(result);
    return getServicesConst(result);
  })
  .then((result) => {
    console.log("1234", result);
  })
  .catch((error) => {
    console.log(error);
  });
// also used following approach
getUser(100)
  .then(getServices)
  .then(getServicesConst)
  .then((result) => {
    console.log("result1234", result);
  });


// #  output based question
// 1.
function job() {
  return new Promise((res, rej) => {
    rej();
  });
}

let promise = job();
promise
  .then(() => {
    console.log("success!");
  })
  .then((result) => {
    console.log("success2");
  })
  .then((res) => {
    console.log("success3");
  })
  .catch((error) => {
    console.log("error", error);
  })
  .then(function () {
    console.log("success4");
  });

// 2.
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise1 = job(true);
promise1
  .then((data) => {
    console.log(data); // success
    return job(false);
  })
  .catch((error) => {
    console.log("failed", error);
    return "error caught"; // this is not failed promise it is string so it resolved promise the it go to the then() block
  })
  .then(function (data) {
    console.log(data); // here print error caught
    return job(true); // here resolved the promise but there is no any other block so top the execution
  })
  .catch(function (error) {
    console.log(error);
  });

// 3.
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise3 = job(true);

promise3
  .then((data) => {
    console.log(data); // success
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "defect"; // this promise resolved  // defect
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => {
    console.log("failed", error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log("error", error);
    return "return caught";
  })
  .then((data) => {
    console.log(data);
    return new error("test");
  })
  .then(function (data) {
    console.log("success: ", data.message);
  })
  .catch(function (data) {
    console.log("error:", data.message);
  });
