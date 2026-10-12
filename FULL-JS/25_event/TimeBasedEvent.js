 /*


# Timing Based Events 
1. setTimeout() : the setTimeout function is used to execute function or block of code after specified delay in millisecond
2. setInterval() : the setInterval function is used to repeatedly execute function or block of code specified interval in millisecond
3. clearTimeout() : if you want to cancel a scheduled timeout before it occurs, you can used the clearTimeout()
: The Global clearTimeout() method cancels a timeout previously established by calling setTimeout() 
4. clearInterval() : if you want to cancels schedule interval before it occurs you can use the clearInterval function
:The Global clearInterval method cancels a timeout previously established by calling setInterval() 
 
Above four are methods and connected to each other ….
The window object allow execution of code at specified time intervals
These time intervals are called timing events.

*/

// 1. setTimeout(function, millisecond)
//  Def : Execute a function after waiting a specified number of milliseconds.
function displayName(name) {
  console.log("start");
  setTimeout(() => {
    console.log("myName", name);
  }, 3000);
  console.log("end");
}
displayName("vishal shinde");


// 2. clearTimeOut()
// which prevents the original setTimeout from running. (clearTimeout cancels the timeout)
// clearTimeout() is a method in JavaScript used to cancel a timeout that was previously established by calling setTimeout().
//  When you schedule a function to execute after a certain delay using setTimeout(), clearTimeout() can prevent that function from being executed if it's called before the timer expires.

function displayName(name) {
  console.log("start");
  // Set a timeout to display the name after 3 seconds
  const timeoutId = setTimeout(() => {
    console.log("My name is", name);
  }, 3000);

  console.log("end");

  // Simulate cancelling the timeout after 1 second
  setTimeout(() => {
    console.log("Timeout cleared, name will not be displayed");
    clearTimeout(timeoutId); // Cancels the original timeout
  }, 1000); // Cancel the timeout before it can trigger
}

displayName("Vishal Shinde");

// 3. setInterval(function, millisecond)
// Same as setTimeout() but repeat the execution of the function continuously
// setInterval() is a JavaScript function that repeatedly calls a specified function (or executes a code snippet) at a fixed time interval, measured in millisecond
// Unlike setTimeout(), which runs the function once after a delay, setInterval() continues to call the function at regular intervals until it's explicitly stopped using clearInterval().

// Function to be executed every 2 seconds
const intervalId = setInterval(() => {
  console.log("This will run every 2 seconds.");
}, 2000);

// Stop the interval after 6 seconds
setTimeout(() => {
  clearInterval(intervalId); // Stops the repeated function calls
  console.log("Interval cleared.");
}, 6000);

// 4 clearInterval()
// is a JavaScript method used to stop an interval that was previously established using the setInterval() method.
//When you repeatedly execute a function at a specified time interval with setInterval(), clearInterval() allows you to cancel the ongoing execution
// The clearInterval() function cancels further execution of the interval, stopping the repeated action.

// Start an interval to log a message every second
const intervalId1 = setInterval(() => {
  console.log("This message appears every second.");
}, 1000);

// After 5 seconds, stop the interval
setTimeout(() => {
  clearInterval(intervalId1); // Cancels the interval
  console.log("Interval cleared.");
}, 5000);

/*
# what is differences between setTimeout() and setInterval()

# setTimeout():
1. Executes a function once after a specified delay. (Executes once after the delay)
2. Usage: When you want to run code after a certain delay but only once.
3. The function provided will execute once after the delay specified in milliseconds.
4. Clears automatically after execution
5. Returns a timeout ID
6. For delayed execution of code one time
7.setTimeout method in javascript  used to call a function for a certain period of time.
8.setTimeout() is canceled by clearTimeout() method

# setInterval():
1. Executes a function repeatedly at a specified interval. (Executes repeatedly at the interval)
2. Usage: When you want to run code at regular intervals, such as updating the UI or making repeated network requests.
3. The function will keep executing every 2 seconds (or the specified interval) until it is manually stopped using clearInterval().
4. Needs to be manually cleared with clearInterval()
5. Returns an interval ID
6. For repeated execution of code at fixed intervals
7. setinterval() method in javascript used to call a function repeatedly at specified intervals of time.
8. setInterval() method canceled by clearInterval() method.

#
1. Use setTimeout() when you need to delay a task for a single time.
2. Use setInterval() when you need to repeatedly execute a task at regular intervals.

*/
