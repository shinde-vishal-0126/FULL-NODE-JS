/*
# callback Hell
1. Callback hell, also known as the "pyramid of doom", refer to a situation in asynchronous javascript programming  where multiple nested callback functions are used to handle asynchronous operation

2 This happens when multiple asynchronous operations depend on each other, and each operation requires a callback to execute the next step.

3. this often result in the code that is difficult to read , understand and maintain due to its deeply nested structure.

3. Callback hell refers to a situation in asynchronous programming where callbacks are nested within callbacks, leading to code that is difficult to read, debug, and maintain.

4. callback hell is occurs when multiple callback are nested inside each other 

5. callback hell leads to create a complete and hard-to-maintain code.

6. callback hell are phenomenon that happen when multiple callback are nested on top of each other.

#  when callback Hell occurs ?
1. hen you are dealing with series of asynchronous operation like reading the file , making the api request, handling the event  that depends on each other and where you need to wait for response before executing next part of code so handled them using the callback function 

2.  Multiple Dependent Asynchronous Operations :Each step in an asynchronous process depends on the result of the previous step, requiring nested callbacks.
Imagine you need to do three asynchronous tasks sequentially



*/
task1(function (result1) {
  task2(result1, function (result2) {
    task3(result2, function (result3) {
      // Final result processing
      console.log("All tasks completed with result:", result3);
    });
  });
});
// 1. Task 1 starts with a callback for task1.
// 2. Once task1 is complete, Task 2 starts with its callback, and Task 3 is nested inside Task 2.
// 3. This results in deep nesting as each function needs to wait for the previous one to finish before executing.

setTimeout(() => {
  console.log("work 1 is done");
  setTimeout(() => {
    console.log("work 2 is done");
    setTimeout(() => {
      console.log("work 3 is done");
    });
  });
});

//#   example  of call back hell
console.log("start");
function importantAction(username, callback) {
  setTimeout(() => {
    callback(`welcome ${username}`);
  }, 1000);
}
function likeTheVideo(video, callback) {
  setTimeout(() => {
    callback(`please like the video ${video}`);
  }, 500);
}
function shareVideo(videotaped, callBack) {
  setTimeout(() => {
    callBack(`please share the video ${videotaped}`);
  }, 300);
}
// function executing without call back chaining
importantAction("akshu", function (username) {
  console.log(username);
});
likeTheVideo("java", function (message) {
  console.log(message);
});
shareVideo("testing", function (message) {
  console.log(message);
});

/*

# What happens in above code execution here we have to execute the code also separately?
1.These functions are executed independently of each other.

2. importantAction runs first, but after that, likeTheVideo and shareVideo are called immediately (without waiting for the previous ones to finish).

3. Each of the functions (importantAction, likeTheVideo, and shareVideo) will run in parallel, without any sequence dependency between them.

# Advantages:
The code is more straightforward and doesn't require deep nesting.
Functions are executed as soon as possible, so there is no waiting for each one to complete before the next starts.


# Disadvantages:
If you need to ensure a specific order of execution (like in your first example),
 this approach doesn't provide that sequence by default. 
You would have to add logic (e.g., chaining callbacks or using Promises) to ensure the correct order.

*/

// callback chaining
importantAction("vishal", function (username) {
  console.log(username);
  likeTheVideo("javascript", function (message) {
    console.log(message);
    shareVideo("node js", function (message) {
      console.log(message);
    });
  });
});

/*


#  What happens in call back chaining?
This is a typical callback chain, where functions are executed in sequence.
importantAction starts first. After 1 second, it logs the welcome message and then calls likeTheVideo.
After another 500 ms, it logs the message to like the video and calls shareVideo.
Finally, after 300 ms, it logs the message to share the video.

#  Advantages:
Ensures that each step happens one after the other in a predictable sequence.

# Disadvantages:
Can lead to "callback hell" or "pyramid of doom," where functions are nested too deeply, making the code harder to read and maintain.

# Note
but here you have to notice here nesting of callbacks  have your code are more messy or wired looking code structure  like pyramid like structure also some time called pyramid of doom 

so to more nested function so this concept we have call the callback hell (here we have so many callback function nested to each other it is very hard to read and understand)
so what is the solution for this code  so you get the promised


#  How the callback hell are problematic : (or what are the issue with callback)
# note
    1. in callback hell start your code grow horizontally instead of vertically
    2.. Nested Callback: 
        Where you have multiple asynchronous operation  that depends on each other you might end up nesting callback with each other the code indentation depends and creating pyramid like structure 
    
    2. Readability : 
        Callback hell make you code less readable and harder to understand  because it introduce the lot of indentation and visual noise
    
    3. Error Handling : 
        Handling the in nested callback structure can be complex you need to ensure that you handle the error at the appropriate level and propagate them correctly 

        This can lead to error-porn code especially dealing with different error scenario  in different layer of nesting 

        Handling errors in multiple nested callbacks is cumbersome. Each callback needs its own error handling, which leads to repetitive and inconsistent error handling code.


        If any error occurs in one of the callbacks, the entire chain may fail, and debugging that error could require tracking multiple callback chains.
    
        4. Maintainability
        With deeply nested callbacks, managing changes in the logic becomes difficult. If a bug occurs, debugging it becomes challenging as you need to trace through multiple levels of nesting.

    Adding new features or modifying the flow often requires significant refactoring, which introduces the risk of introducing more bugs.
    
    5. Debugging :
        Debugging the code with deep nested callback can be frustrating 
     Identifying the source of issue , setting the breakpoint and inspecting the variable more challenging due to more complex structure of the code
    
    6.Testing
        Unit testing is harder due to the nested structure. Since the functions are tightly coupled and depend on one another, isolating them for testing can be complex and inefficient.
    7. Scalability
    Adding more functionality to an application that uses callback hell can lead to even deeper nesting, making the code less scalable.
    
    The complexity grows quickly as new requirements are added, leading to a less robust and extensible codebase.





 
#  To addressed the issue associated with the callback Hell javascript introduce the several technique and pattern 

# Promise:
Promise are more structure way to handled the asynchronous operation making code more readable and maintainable 
Promise allow us to chain operation and handled error more gracefully 
So promise also enable us to used async/await syntax which make synchronous code more look like synchronous code 

# async/ await 
A async /await syntax built on the top of the promise and provide a more natural way to write asynchronous code that resemble synchronous code 
It reduce the nested callbacks 

#  Modularization 
Breaking you code into smaller
Modular function can help you to reduce the depth of callback nesting 
This make the code more organized and easier to manage 

# Named function 
 Instead of using anonymous function as callback function using name function make you code more readable and reduce the indentation level 
 
# NOTE
By using the promise and async/await approach allow us to write asynchronous code is more linear and structured fashion reducing the nesting and making it easier to manage complex asynchronous flow 
Promises allow you to chain .then() calls, enabling a clear and linear flow of logic.


*/
