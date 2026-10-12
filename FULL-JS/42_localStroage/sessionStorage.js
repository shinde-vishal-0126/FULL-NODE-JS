/*
# session storage 
1. sessionStorage is a web API 
2. that stores data only for the current browser tab/session.
3.In JavaScript, sessionStorage is a built-in web API that lets you store key–value data in a web browser for the duration of the page session.
The data persists only while the browser tab (or window) is open.
Once the tab or window is closed, the data is automatically deleted.
It is specific to the tab — another tab with the same site won’t see the same sessionStorage data.

# Use Case
    1.Temporary storage like form data while navigating within a tab.
    2. Doesn't persist after tab/window is closed.
    3. Storing Form Data Temporarily
    4.Temporary authentication token for the current session.
    5. Shopping cart data for a single visit.
    6. User interface state (like active tab, filter selections) while browsing a site.

Preventing form resubmission on reload.

# key point 
| Property           | Value                                 |
| ------------------ | ------------------------------------- |
| Max Size           | \~5-10 MB                             |
| Expiry             | When tab/window is closed             |
| Scope              | Per-tab (different for each open tab) |
| Sent with          | Not sent with HTTP requests           |
| Accessible from JS | Yes                                   |


| Feature           | Details                                                               |
| ----------------- | --------------------------------------------------------------------- |
| **Scope**         | Tab-specific (doesn’t share across tabs, even for the same domain)    |
| **Persistence**   | Until tab/window is closed                                            |
| **Storage Limit** | Around 5–10 MB (varies by browser)                                    |
| **Data Format**   | Stores only **strings** (you can store objects by converting to JSON) |
| **Access**        | Available via `window.sessionStorage`                                 |


sessionStorage ensures the data is gone automatically when the session ends (tab closed).
*/

// example

// 1. add data into session storage.
sessionStorage.setItem('name', 'vishal shinde');

// 2. get Data form the session storage 
console.log(sessionStorage.getItem('name'));

// 3 remove data form the session storage 
console.log(sessionStorage.removeItem('name'))

// clear the whole session storage 
console.log(sessionStorage.clear());


let cart = { item: "Book", quantity: 2 };
sessionStorage.setItem("cart", JSON.stringify(cart));

let cartData = JSON.parse(sessionStorage.getItem("cart"));
console.log(cartData.item); // Book


/*
# here we have to access the data form the cookies , local storage and session storage we need serialization and deserialization
but only when you're storing non-string data like objects or arrays.
| Storage Type       | Stores Strings Only? | Need Serialization for Objects/Arrays? |
| ------------------ | -------------------- | -------------------------------------- |
| **Cookies**        | ✅ Yes                | ✅ Yes                                  |
| **localStorage**   | ✅ Yes                | ✅ Yes                                  |
| **sessionStorage** | ✅ Yes                | ✅ Yes                                  |

1. Always stored as strings.
If you store an object or array, you need to:
Serialize: JSON.stringify()
Deserialize: JSON.parse()

# when we used cookies
Cookies
Use cookies when data (like session/auth tokens) needs to be sent to the server with every HTTP request.

 when we used session storage
🕒 sessionStorage
Use sessionStorage for temporary data that should be cleared when the browser tab is closed.

# when we used Local storage
🗄️ localStorage
Use localStorage to store persistent data on the client side that should remain even after the browser is closed.

*/