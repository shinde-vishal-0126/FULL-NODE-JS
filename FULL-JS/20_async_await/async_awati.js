/*
# async/await
1. async/await is modern way to handle asynchronous operation make code more readable compare to callback and promisees
2. async defined an asynchronous function which alway return promise
3. inside the async function we need to used await keyword to pause execution until the promise resolved making async code look like synchronous.
4. if async function return a value js automatically wrap it in a resolved promise.
5.if an error is thrown it return rejected promise.
6. this approach simplifies code structure and improves readability.
7. async and await is used to handle the Promises (await keyword only used inside the async function) 


# Why Use async/await?
1. Cleaner syntax: Avoids deep .then() chaining (callback hell).
2. Easier to read and maintain.
3. Better error handling using try...catch

# How It Works

# async Function
1. A function declared with async automatically returns a Promise.
2. Inside an async function, you can use await to pause execution until a Promise resolves.

# await Keyword
1. Used inside async functions to wait for a Promise to resolve.
2. It makes asynchronous code look more like synchronous code.



# advantages of async await:
1. improve readability : using async await make it asynchronous code look like synchronous code easier to read and maintain compared to traditional callback and promise-based approach
2. sequential Flow : help to write asynchronous code in a way that resembles synchronous code 
3. error handling : async/await work seamlessly with try/catch blocks for error handling  provide more intuitive way to manage error in synchronous this much cleaner then chaining .catch() in promise chain.
4. sequential execution: with async await asynchronous operation can be written sequentially avoiding deeply nested callback, each await wait for the previous one to resolve before moving on 
5. you can still run asynchronous operation in parallel by using promise.all with async await improving the performances when task are independent.



# Why do we still need Promises if we use async/await?
1. Because **async/await is built on top of Promises**. They do not replace Promises, but rather provide a cleaner, more readable syntax for working with them.
# Think of it like this:
Promise = core engine (how asynchronous work happens)
async/await = new driving controls (how we write the code);
You still need Promises. async/await just gives you a better way to consume them.
Internally, it's still using Promises under the hood.


# what is differences between promise ans async await 
Both are used to handle the asynchronous operation in js
1. promise
    1. promise is object  basically represented upcoming completion or failure of an asynchronous operation or event  with it  resulting value.
    2. promise introduce in ES1 6
    3. promise is used the handle asynchronous operation.
    4. promise used .then() and catch() block to execute  or handle the promise (i.e Basically promise used chaining syntax with .then() and .catch() to handled the asynchronous operation)
    5. readability of promise get nested and messy
    6. for error handling purpose used .catch()  (i.e So error handling in promise are typically handled using the .catch() method or by changing the second .then() callback for error handling)
    7.Works everywhere
    8. You defined a function that return a promise and then you chain  .then() callback to handled successful result 
 And .catch() when the promise are rejected then used to handle error 
 8. So this can be lead to callback hell if you have multiple asynchronous operation 



2. async-await 
    1.async-await Syntactic sugar of promise which is built on top of Promises for better readability(i.e async/  it is more synchronous looking syntax for handling promise)
    2. introduce in ES8 (2017)
    3. async await used to handle the promise more cleanly (i.e  Can significantly improve the code readability and maintainability especially dealing the more complex asynchronous code )
    4. async used async and wait keyword to handle the  promise.
    5. used async await is more cleaner and easier to read 
    6. for error handling used the try catch block (i.e  In async/await handle the error using traditional way by using the try catch () block )
    7. Only works inside an async function
    8. In async await error are automatically propagated up to call stack making it easier to tracking and handled them  

# note 
1. async/await is basically a replacement for .then() and .catch() to make code cleaner and easier to read. 



*/
console.log("start");
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
console.log("end");
// 1. asynchronous function which we can used do adding async keyword before function
// 2. Here we have to create function and call the promise here like important action
// 3. here promise we can not gone used .then() then it return the promise object but we don't want we want result
const result = async () => {
  const m1 = await importantAction("vishal");
  const m2 = await likeVideo("js");
  const m3 = await sharedVideo("on youtube");
//   console.log(m1 + " " + m2 + " " + m3 + " ");
return m1, m2 ,m3
};
console.log(result());

// # how to handle error into async await
// To handle the error in async-await using traditional try catch and finally block

const res1 = async () => {
  try {
    let p1 = await importantAction("vishal shinde");
    let p2 = await likeVideo("js");
    let p3 = await sharedVideo("youtube");
    let result = p1 + " " + p2 + " " + p3
    console.log(result)
    return result;
  } catch (e) {
    console.log("error", e);
  }
};
console.log(res1());
res1();
console.log(res1());

// #  output based question

// 1.
const promise = new Promise((resolved, reject)=>{
    console.log(1);
    resolved(2)
})
console.log(promise);
//  javascript inside the asynchronous function find if there is any synchronous function then it execute first then asynchronous

promise.then((result)=>{
    console.log('result', result)
    return result
}).catch((error)=>{
    console.log(error)
})
console.log(promise);


// 2
console.log('hi')
const p1 = new Promise((resolved, reject)=>{
    console.log(1);
    resolved(2);
    console.log(3)
})
p1.then((r)=>console.log(r)).catch((error)=>console.log(e))

// 3
console.log('hi1');
const fn = () =>{
    return new Promise((resolve, reject)=>{
        console.log(1);
        resolve('success')
    })
} 
console.log('middle');
fn().then((r)=>console.log(r)).catch((e)=>console.log(e))
console.log('end');


/*
# Which One to Use?
1. Use async/await when you need cleaner, readable, and sequential async operations.
2. Use Promise when dealing with multiple independent async operations that can run in parallel.

# why we used async/await instead of promise.
1. async/await can greatly improve the readability of the asynchronous code compared to using callback and .then() chaining. when dealing with promise.
2. problem with promise
    1. chaining can get messy
    when we have promise call its easy for the code become deeply nested and that make it hard to read and understand  this call as callback hell.
3. error handling arre tricky 
    1. in promise we need to handle error in catch at the end of each chain this can get confusing when there are many step in your code .
4. async/await is like fixing the messiness and confusion of promise making your code simpler and more manageable, because no need to chaining .then() and .catch() also error handling just used try catch block making much easier simpler  to read and understand  like regular code and not have bunch of nested callback .


# # Summary about Async await 
1. Async await makes promises easier to write and makes complexity simple.
2. Async make a function return promise 
3. Await makes a function wait from promise are settled to be resolved or rejected .
4. If you used fetch method it always async await return promise
5. If you define an async function it always contains await.
6. If you used async and await by default provided error handling.
7. So each and every code you have to write inside the try catch block.

*/


// # error handling in async await 
// A promise resolve the await promise return the result if a promise rejected await/async throw an error so if there were throw statement

async function getUser(userId){
    await Promise.reject (new Error('invalid user Id'))
}
async function getUser(userId){
    throw new Error('invalid user id')
}

async function getUser(userId){
    try{
        const user = await Promise.reject(new Error('invalid user id '));
    }catch(error){
        console.log(error)
    }
}
// - it possible to catch error caused by one or more await promise

async function showServices(){
    try{
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log('the services cost is ${cost}')
    }catch(error){
        console.log(error)
    }
}

/*
 # async await keyword 
# Await keyword 
1. Used the await keyword to wait for the promise to stalled either in resolved and rejected state 
2. And you can used await keyword inside async function only
3. It used before the promise and it pause the function execution until the promise is resolved (fulfilled or rejected )
4. If the promise is fulfilled the result is return and if promise rejected and exception is throw which you can catch using try catch block

*/

async function example(){
    try{
        const result = await someAsyncfunction();
        console.log(result);
    }catch(error){
        console.log(error)
    }
}

// Now in this above example await keyword instructs the javascript engine to wait for the sayHi() function to complete before displaying the message.
// If you use the await operator outside the async function it gets an error.

/*
# The async keyword : 
1. The async keyword allow you to defined a function that handled asynchronous operation
2. To defined the async function you place the async keyword in front of function keyword as follow
3. When you declare a function as async it means that function always return the promise either explicitly or implicitly 
4. So inside the async function you have used the await keyword to pause the execution of the function until the promise is resolved; this allows you to write asynchronous code in a more sequential and readable manner.

*/
async function fetchData(){
    const response = await fetch('https://api.google.com');
    const data = await response.json();
    return data;
}


// # New example explanation
async function  sayHi(){
   return Promise.resolve ('hi');
}
// here sayHi function return the promise you can consume it
sayHi().then((console.log))
// Asynchronous functions execute asynchronously vai the event loop
// It alway returns a promise.

// // Example : 
//  sayHi()  // function returns the promise  you can consume it .
// async function  sayHi(){
//    return Promise.resolve ('hi');
// }

// // Beside the regular function you can used async keyword in function expression
// let sayHi = async function(){
//     return 'hi'
// }

// // arrow function
// let sayHi = async () => 'Hi'


/*
 # Why introduced the async await in javascript instead of the promise ?
1. Promise chaining is the technique  for handling the asynchronous operation sequentially using promise 
2. While its a powerful and versatile approach there are some common problem and challenges associated with it 
3. Callback Hell (Pyramid of Doom ):
If you have multiple asynchronous operation to perform sequentially, chaining promises can be lead to deeply nested code structure which can be hard to read this is often referred as callback hell or the pyramid of the Doom 

*/

// asyncFunction().then((result1)=>{
//     return asyncFunction2(result1);
// }).then((result2)=>{
//     return asyncFunction3((result2)=>{
//     }).then((result3)=>{
//         return asyncFunction4(result3)
//         })
//     })
    

    /*
4.  Error Handling 
 1. Proper error handling in promise chain can be challenging error that occur at any stage in the chain can be caught in the .catch() block at the end making it difficult to pinpoint where the exactly error occurred 
5. Readability and maintainability 
1. Promise chain can be difficult to read and maintain as they grow in length 
2. It easy to lose the track of the flow of the code especially you have multiple .then() block
6. Inflexibility 
1. Changing the order or adding new step to sequence of asynchronous operation  can require significant modification to the existing promise chain  ao potentially introducing the bug 
7.Limited parallelism 
1.  Promise chaining is inherently sequential which means that operation in the chain are executed one after the another if you have independent synchronous task that could be run in parallel so promise changing is not be the most efficient approach 
 
# . So conclusion is the address this challenges and make code more readable and maintainable modern javascript introduced the async/await 
3.  So async wait provide better error handling, improve the readability and greater flexibility in managing the asynchronous operation 

*/


function getUser(userId, callback){
    console.log('Get user from the database');
    setTimeout(()=>{
        callback({
            userId: userId,
            username : 'vishal'
        })
    },1000);
}

function getServices(user,callback){
    console.log(`get services of ${user.username} from the api`);
    setTimeout(()=>{
        callback(['Email', 'Vpn', 'Cdn'])
    },2 * 1000);
}

function getServicesCost(services, callback){
    console.log(`calculate services cost of ${services}`)
    setTimeout(()=>{
        callback(services.length * 100)
    },3 * 1000)
}

// - here following are the nested callback function
getUser(100,(user)=>{
    getServices(user,(services) => {
        getServicesCost(services,(cost)=>{
            console.log(`the services const is ${cost}`)
        })
    })
})

// output
// Get user from the database
// async.js:12 get services of vishal from the api
// async.js:19 calculate services cost of Email,Vpn,Cdn
// async.js:29 the services const is 300


// To avoid this callback hell issue ES6 introduced the promise that allows you to write asynchronous code in a more manageable way.
// First we need to return promise in each function  
function getUser(userId){
    return new Promise((resolve, reject)=>{
        console.log(`get user form the database`);
        setTimeout(() => {
            resolve({
                userId:userId,
                username:'vishal'

            })
        },1000);
    })
}

function getServices(user){
    return new Promise((resolve, reject)=>{
        console.log(`get The services of ${user.username} from the api`)
    setTimeout(()=>{
        resolve(['Email','vpn','Cdn'])
    },2 * 1000)
    })
}

function getServicesCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`calculate services cost of ${services}`);
        setTimeout(()=>{
            resolve(services.length * 100)
        })
    },3* 1000)
}

// here you have to chain the promise
getUser(100).then(getServices).then(getServicesCost).then(console.log)

// 1.  Es2017 introduced the async/await keyword that built on top of the promises allowing you to write asynchronous code that looks like asynchronous code and is more readable. 
// 2.  Typically speaking the async/ await is syntactic sugar for promises
// 3. If a function return a promise you can place the await keyword in the front of the function call like 
// 4. Await will wait for the promise returned from the f() to settled 
// 5 The await keyword used only inside the async function

function getUser(userId){
    return new Promise((resolve, reject)=>{
        console.log(`get user form the database`);
        setTimeout(() => {
            resolve({
                userId:userId,
                username:'vishal'

            })
        },1000);
    })
}

function getServices(user){
    return new Promise((resold, reject)=>{
        console.log(`get The services of ${user.username} from the api`)
    setTimeout(()=>{
        resolve(['Email','vpn','Cdn'])
    },2 * 1000)
    })
}

function getServicesCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`calculate services cost of ${services}`);
        setTimeout(()=>{
            resolve(services.length * 100)
        })
    },3* 1000)
}
// = here you have to chain the promise
getUser(100).then(getServices).then(getServicesCost).then(console.log)
// # Instead of that Following defined an async function that call the three asynchronous operation in sequence 

async function showServicesCost(){
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServicesCost(services);
    console.log(`the services cost is ${cost}`)
}
showServicesCost()


// # which one you have prefer async or promise
// #  Use async/await when:
// 1. You want cleaner, more readable, and easier to understand code.
// 2. You need to write code that looks like it's synchronous (top-to-bottom flow) but still handles asynchronous operations.
// 3. You are working with try/catch blocks for error handling.
//  I generally prefer async/await because it makes the code more readable and easier to debug, especially when handling sequential asynchronous operations. It avoids the "Promise chaining" mess and allows using try/catch for cleaner error handling.


// # Use .then() / Promises when:
// 1. You need to handle multiple promises in parallel (e.g. Promise.all).
// 2. You’re doing simple chaining and don’t want to mark the whole function as async.
// 2. You're writing library or framework code where you want to return raw Promises.
// 1. I need to run multiple async tasks in parallel (Promise.all() is great for that).
// I’m working with stream-based or event-driven async operations where .then() chaining makes sense.

/*




Which is better? promise or async await

✅ Use async/await whenever possible → cleaner, more readable, easier to maintain.
✅ Use Promises directly only when:
You need to run multiple tasks in parallel (Promise.all, Promise.race).

You’re writing a quick one-liner without needing a whole function.