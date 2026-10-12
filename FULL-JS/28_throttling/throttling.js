
/*
# throttling in js 

1. Throttling is technique in js to limit the frequency of function call perticular in situation where a function is being called repeatedly in a short period of time.
2. Throttling is technique that ensure a function is called at a fixed rate regardless of how many times is called.
3. it like rate limiter that prevent a function from being called too frequently.
4. Throttling is useful when you want to limit the frequency of function call  but still want to allow function to be called repeatedly.
5. throttling limit the frequency of function but allow the function called repeatedly at specified interval
6.  Throttling in javascript is effective technique to limit the frequency at which a function executed so to improve or maintain performances optimization of the application. (or optimized the function execution performances)
7.  By using throttling in javascript The function is executed after fixed interval of time (i.e limit the rate or frequency at which a function can be executed)
8.Throttling delay the next() function call for certain limit of times 
9. Throttling used to call function after every millisecond or perticular fix interval of time only first click execute immediately
by using the Throttling improve the user experiences in situation when rapid changes may cause unwanted flickering and jittering
10. Throttling in JavaScript is a technique used to control how often a function is executed over time.
11.  Unlike debouncing, which delays the execution of a function until after a specific period of inactivity, throttling ensures that the function is called at regular intervals, regardless of how often the event is

# how throttle work :
1. initial call : a function is call and timer is stared 
2. subsequent call : if the function is called again before the timer expire that call is ignored
3. Timer expire : whe the timer expire the function allowed to be called again

# benefits of Throttling 
1. improve the performance : throttling can improve the performances by reducing the number  of function call 
2. prevent overload : Throttling can prevent overload on server or  api by limiting the frequency requests
3. enhancing the user experiences: throttling can enhance the user experiences by preventing expensive or repetitive action


# example of throttling :
1.scroll event: Throttling can be used to limit the frequency of scroll event handlers 
2. real time updates : throttling can be used to limit frequency of update the real time application such as live update or gaming 

explanation 
    1.suppose you have to scroll event handler that makes an api call to fetch data without throttling the api call would be made on every scroll event  which is leading expensive api calls , slow performance and poor user experiences  and increased server load

    so with throttling you can limit the frequency of api call to say every 200ms  this ensure api are only made at a fixed rate even if the user scroll frequently,


| Feature / Aspect              | **Debouncing**                                                 | **Throttling**                                                          |
| ----------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Definition**                | Delays execution until a period of inactivity has passed       | Limits execution to once every specified interval                       |
| **Execution Timing**          | Executes **after the user stops** triggering the event         | Executes **at regular intervals**, even if the event continues          |
| **Execution Frequency**       | **Once** after the final event                                 | **Periodically**, at most once per interval                             |
| **Ideal Use Case**            | When you care about the **final state** after user input       | When you care about **intermediate updates** during continuous activity |
| **Typical Scenarios**         | Search box, form validation, window resize (after resize ends) | Scroll tracking, drag and drop, analytics logging                       |
| **Delay Reset on Event**      | ✅ Yes – resets the timer on every event                        | ❌ No – runs at fixed intervals regardless                               |
| **Immediate Execution**       | ❌ No – waits until inactivity                                  | ✅ Optional – can execute immediately or wait for interval               |
| **Function Call Rate**        | **Minimized** – only one call per pause                        | **Controlled** – one call per interval                                  |
| **Prevents**                  | Unnecessary repeated execution during input                    | System overload by limiting function frequency                          |
| **Timer Use**                 | Waits for **no events** during delay to execute                | Executes every **X ms**, ignoring events in between                     |
| **Focus**                     | Accuracy after user stops interacting                          | Smooth performance during user interaction                              |
| **Implementation Complexity** | Slightly more involved (reset timer logic)                     | Simpler to implement with a set interval                                |


*/

/*

# Throttling
Definition: Throttling ensures that a function is executed at most once every specified interval, regardless of how many times the event is triggered.
✔️ Use When:
You want the function to run continuously but at controlled intervals.
You care about intermediate states of a continuous event.
📌 Example Scenarios:
Scroll handling: Load content on scroll but limit frequency.
Slider drag: Update position at intervals while dragging.
Analytics: Track scroll or mouse movement at regular intervals.
⏱️ Behavior:
Allows execution every fixed time interval.
Ignores additional calls within the interval.

| Feature             | Throttling                        |
| ------------------- | --------------------------------- |
| Execution Frequency | Periodic (every X ms)             |
| Trigger Condition   | At fixed intervals                |
| Best For            | Continuous actions (scroll, drag) |
| Example             | Infinite scroll, drag updates     |
| Immediate Execution | Yes (can be configured)           |


# In Short:
        1. Use Debouncing when:
            1. You want to delay a function until the user stops performing an action (e.g., typing in a search box).
        2. Use Throttling when:
            1. You want to limit how often a function runs over time (e.g., handling scroll events every 100ms).


*/