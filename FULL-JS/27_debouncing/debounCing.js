/*
# Debouncing 
1. debouncing is a programming technique used to limit the frequency of function call. perticular in situation where a function being called repeatedly in short period of time. and Function only runs after the user stops doing something for X ms
2. debouncing ensure that a function is only called after a certain amount of time has passed since the last call.
3. if multiple call are made within the specified time period the function will be called once after the time period has expired
4. debouncing is useful when you want to delay the execution of function until the user has stopped interacting with the application
5. so it is like  timeout mechanism that ensure a function is only called after certain amount of time has passed since the last call.(or prevent expensive function call) 
6. Debouncing in JavaScript is a programming pattern used to limit the rate at which a function gets executed.
7.Delays the execution of a function until after a certain period of inactivity.
8.It ensures that a function is not called too frequently, especially in response to rapidly occurring events such as window resizing, scrolling, or keypress.
9. debouncing is way to optimize the (performances ) event handling in javascript or way
10. This way, the function only executes after the events have stopped firing for the specified delay period.

# debouncing useFul senario :
    1. search input field:
        1. when  user type in search field you might want to delay the search query until they have stopped typing.
    2. button click : 
        1. debouncing can prevent multiple button click from triggering multiple function call 
    3. window re-sizing 
        1. Debouncing can limit the frequency of resize event handlers.

# By debouncing a function you can used for  
    1. reduce the server load :reduce the number of unnecessary function call or server request which can reduce the server load and improve the salability 
    2. improve the performances : by minimizing the load of your system 
    3. enhance the user experience :s by preventing expensive and repetitive action.
    4. Performance Optimization: It reduces the number of function calls, especially useful for expensive operations like API requests or complex DOM manipulations.
    5.Prevent Overloading: Helps avoid overwhelming the system with too many rapid-fire function executions.

#  how debouncing work 
    1. First event → timer starts.
    2. If another event happens before the timer ends, the timer resets.
    3. Function executes only if no new event occurs during the delay.

# example :
search input field:
    1. suppose we have  input field that triggered search query on every keystroke without debouncing  the search query would be triggered on every call so it leading  expensive server request , slow performance, and poor user experience

 with  debouncing you can delay the search query until the user has stopped typing for certain amount of time e.g 500 ms this ensure  that the searching query only triggered when the user has finishing typing 
 When you care about the final action, not every step.
When expensive operations (like API calls) should run only once.


 # there are 2 way to implement the debouncing in js 
 1. lodash library 
 2. polyfill implementation 



 # differences between debouncing and throttling in js 
Throttling and debouncing are both technique used to limit the function call but they different purpose

1. Debouncing:
    1. Ensure the function is call only after a certain amount of time has passed since the last call
    2. when to used : when you want to delay function call until certain amount of time has pass since last call.
    also when you want prevent expensive function call in situation like search input field also button click
    3. you want to delay the function execution until the user hast stopped interacting.
    4.timing : debouncing wait for certain amount of time to pass before calling function 
    5. frequency: debouncing limit the frequency of function call by delaying execution 
    6. useful delaying a function call until the user has stopped interacting.
     7.Wait for the certain time before invoking the function again 
    The purpose of debouncing is to delay the execution of a function until a pause in event occurrences after the specified period
    It ensures that the function is only executed once after a series of rapid events.




2. Throttling :
    1. ensure a function is called at fixed rate regardless of how many times you called  
    2. when to used :when you want to limit the frequency of function call  in real application so you want to prevent the overload on server. like scroll event and real time updates
    3 you want to ensure that a function is called at fixed rate
    4 timing : while throttling  call the function at fixed rate
    5. frequency :while throttling limit the frequency by spacing out the call fix interval of time 
    6. while useful for limiting the frequency of function call in real time application
    7. Throttling can be implemented by allowing the function to execute at a fixed interval or rate

*/

/*
 # Debouncing
Definition: Debouncing ensures that a function is called only once after a specified delay has passed since the last event.
✔️ Use When:
You want the function to run after the user stops performing an action.
You care about the final state of a sequence of rapid events.

📌 Example Scenarios:
Search input: Trigger API call after user stops typing.
Form field validation: Validate after typing stops.
Resize or scroll: Adjust layout after action stops.

⏱️ Behavior:
Waits for a pause in event calls.
Delays execution until no new event occurs within the delay.
Cancels and resets the timer with every new event.


| Feature             | Debouncing                       |
| ------------------- | -------------------------------- |
| Execution Frequency | Once, after delay                |
| Trigger Condition   | After inactivity                 |
| Best For            | Input fields, delayed validation |
| Example             | Autocomplete after typing ends   |
| Immediate Execution | No (usually after delay)         |

# In Short:
    1. Use Debouncing when:
        You want to delay a function until the user stops performing an action (e.g., typing in a search box).
    2. Use Throttling when:
        You want to limit how often a function runs over time (e.g., handling scroll events every 100ms).

*/
