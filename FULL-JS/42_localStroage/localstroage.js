/*
# local storage 
1. localStorage stores data in the browser 
2.with no expiration time, 
3.even after the browser is closed.

    # Use Case
        1.Persisting user preferences (e.g., dark mode).
        2. Saving shopping cart data.
        3. Caching user data offline.

    # key properties 

                | Property           | Value                                               |
| ------------------ | --------------------------------------------------- |
| Max Size           | \~5-10 MB                                           |
| Expiry             | Never (unless cleared manually or programmatically) |
| Scope              | Per-origin (shared between tabs from same domain)   |
| Sent with          | Not sent with HTTP requests                         |
| Accessible from JS | Yes                                                 |

| Feature              | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| **Storage Size**     | Can store up to **5-10 MB** (much larger than cookies).         |
| **Persistent**       | Data is saved **even after browser is closed and reopened**.    |
| **Domain Specific**  | Accessible only from the **same origin (domain + port)**.       |
| **Client-Side Only** | **Not sent to server** with each HTTP request (unlike cookies). |
| **Key-Value Store**  | Stores data as **strings in key-value pairs**.                  |


*/



// ex 
// 1. stored data in local storage 
localStorage.setItem('name', 'vishal');

// 2. get data from the local storage 
console.log('stored data:', localStorage.getItem('name'));

// 3 remote the data form the local storage
console.log(localStorage.removeItem('name'))

// 4 clear all local storage data 
console.log('clear local storage :', localStorage.clear())



/*
# differences between cookies , sessionStorage, localStorage 
| Feature          | Cookie                | Session Storage        | Local Storage         |
| ---------------- | --------------------- | ---------------------- | --------------------- |
| Max Size         | \~4 KB                | \~5-10 MB              | \~5-10 MB             |
| Expiration       | Set manually          | On tab/window close    | Never (until cleared) |
| Accessible in JS | Yes (unless HttpOnly) | Yes                    | Yes                   |
| Sent to server   | Yes (automatically)   | No                     | No                    |
| Scope            | Domain + Path         | Per-tab/per-window     | Origin-wide           |
| Use Case         | Auth, tracking        | Temp form/session data | Preferences, caching  |


# When to Use What?
    1. Cookies: When you need data to be sent to the server (e.g., auth tokens).
    2. Session Storage: For temporary data in a single session/tab (e.g., multi-step form).
    3. Local Storage: For long-term storage (e.g., theme settings, cached data).

*/