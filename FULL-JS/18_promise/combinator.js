/*
 # What is a Promise Combinator?
A Promise Combinator is a built-in JavaScript method that helps you manage multiple promises at once.

1. Instead of waiting for or chaining promises one by one, combinator let you work with them together—either in parallel, or to race, or to handle all results regardless of success/failure.


# Why do we need Promise Combinator?
Suppose you want to: 
1. Wait for multiple API calls to complete before proceeding (i.e promise run in parallel)
2. Get the first successful result among many
3.Know the result of each promise, even if one fails
also it is faster and more efficient also you get all result together
4.Chaining .then() doesn't handle that well. 
5. promise chaining  Good when each step depends on the previous result.
6,  Not good for parallel/independent promises

# What are the type promise combinator ?
Promise combinator help  us to execute more than one or multiple  promise at one time and return the result accordingly. 
There are 4 promise combinator available in JavaScript:
1. Promise.all
2. Promise.allSettled
3. Promise.race
4. Promise.any

 
# /? what is resolved and reject in promise ?

# 1. Promise.resolve()
1. Promise.resolve() is a method that returns a resolved promise.
2. When a Promise is resolved, it means the operation was successful, and the result is passed to .then()
3. If you pass a non-promise value to Promise.resolve(), it returns a promise that resolves to that value.
4. If you pass an already resolved promise, it just returns that promise.

# 2. Promise.reject()
1.Promise.reject() is a method that returns a rejected promise. 
2.It is used when you want to immediately return a promise that is rejected with a specific reason.
3. When a Promise is rejected, it means the operation failed, and an error is passed to .catch().
4.The provided reason will be the rejection reason of the returned promise.


# Why they're not considered combinator like resolved and reject
 1. Promise combinator like Promise.all(), Promise.race(), Promise.any(), and Promise.allSettled() are used to combine multiple promises and manage their resolutions or rejections in different ways.

1. Promise.resolve() and Promise.reject() simply create single promises that are already resolved or rejected. 
2.They don’t combine multiple promises or manage multiple async operations in one go.
So, while Promise.resolve() and Promise.reject() are important for handling promises, they are not classified as "combinator" because they don't combine multiple promises into one.



# what differences between promise combinator 

# Promise.all()
 1. Resolves only if all promises resolve. It rejects if any promise in the array fails.
 2. Stops as soon as one promise rejects and returns that rejection.
 3. Returns an array of resolved values or a single rejection.
 4 Used when you need all promises to succeed, and you want the operation to halt on any failure.

# Promise.allSettled():
 1. Resolves after all promises settle (resolved or rejected).
 2. Waits for all promises to settle and gives individual results.
 3. Returns an array of objects describing the outcome of each promise (fulfilled/rejected).
 4. Used when you want to know the result of every promise, regardless of whether some fail or succeed.

 # what is difference between  promise.race() and promise.any() 

 
# promise.any()
1. promise.race() return first settled promise it may be fulfilled or rejected 

# promise.any():
1. promise.any return first fulfilled promise 
2. if all the promise are rejected it return aggregation error with array all the promise rejected error
*/