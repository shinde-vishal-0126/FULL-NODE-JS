/*
# window object
# What it is:
    1. The global object in the browser.
    2.Represents the entire browser window/tab.
    3. Everything in the browser is inside window, including:
        document    
        BOM (e.g., location, navigator)
        global functions (alert(), setTimeout())
        i.e window is the global object,
        and BOM is a part of it — a subset.

        # window = Entire browser tab object
        BOM = Features provided by the browser outside the page content, like:
        1. window.location
        2.window.history
        3. window.navigator
        4.window.screen
        5. window.alert(), window.confirm()


        | Concept      | Belongs To       | Description                                                          |
| ------------ | ---------------- | -------------------------------------------------------------------- |
| **`window`** | Global object    | Top-level object for everything in browser JavaScript                |
| **`BOM`**    | Part of `window` | Handles **browser features** (like tabs, URL, alerts, history, etc.) |
| **`DOM`**    | Part of `window` | Handles **HTML document content and structure**                      |
    

# BOM in JavaScript — Browser Object Model
BOM (Browser Object Model) allows JavaScript to interact with the browser itself, outside of the HTML content. 
It provides objects and methods to control the browser window and interact with the environment

1. main container (i.e global object)
2. any operator related to the entire browser window can part of window object.
3. The global object in browsers. It represents the browser window/tab

*/
// # window object

console.log(window); // return window object
console.log(window.localStorage); // get the access of global storage.

// get width and hight
console.log(window.innerWidth);
console.log(window.innerHeight);

// # Document Object
// Represents the DOM (HTML) loaded in the window.
// It’s part of the window object.
// a document is an object of the window
console.log(window.document); // return whole document object.
console.log(window.document.title);
// we can directly access document object
console.log(document.body);

/*
# differences between window object and Dom (document object model)

# Document object model 
| Feature           | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| 📄 Purpose        | Represents the **HTML** or **XML document** structure in a tree-like format   |
| 🔍 What it Models | The **content** of the web page                                               |
| 📦 Core Objects   | `document`, `html`, `body`, `div`, `p`, `img`, etc.                           |
| 📚 Usage          | Allows developers to **read**, **modify**, **delete**, or **create** elements |
| 📌 Example        | `document.getElementById("myId")`                                             |
| 🌐 Standard       | Part of the **W3C specification**                                             |
| ⚙️ Manipulation   | Works with page structure, content, styles, and event handling                |


# browser object model 

| Feature           | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| 🌐 Purpose        | Represents the **browser components** around the page, but not the page content itself |
| 🔍 What it Models | The **browser environment**                                                            |
| 📦 Core Objects   | `window`, `navigator`, `screen`, `location`, `history`, `alert()`, `setTimeout()`      |
| 📚 Usage          | Allows interaction with browser-specific features                                      |
| 📌 Example        | `window.alert("Hello")` or `navigator.userAgent`                                       |
| 🌐 Standard       | Not officially standardized by W3C (varies across browsers)                            |
| ⚙️ Manipulation   | Controls browser settings, popup boxes, redirects, etc.                                |

# Key differences

| DOM                                   | BOM                                       |
| ------------------------------------- | ----------------------------------------- |
| Models the web **document** structure | Models the **browser** and its components |
| Part of **W3C standard**              | Not standardized (browser implementation) |
| Accessed via `document` object        | Accessed via `window` object              |
| Used to manipulate page content       | Used to interact with browser features    |
| Definition | Browser's window/tab      | HTML page loaded inside the window       |
| Scope      | Global (top-level) object | Child of `window`                        |
| Example    | `window.innerWidth`       | `document.getElementById("id")`          |


 # Quick Analogy
Think of a web page as a book:
# DOM is the content (chapters, headings, paragraphs).
# BOM is the frame around the book (bookmark, page size, reader settings).

*/


// # BOM 
console.log(window.console)  // represent console object .

// # window.open()
// Opens a new tab
window.open("https://www.google.com", "_blank");


// # window.location
// Gives access to the current URL and allows redirection
console.log(window.location.href);     // full URL
console.log(window.location.hostname); // domain name
console.log(window.location.pathname); // path after domain
console.log(window.location.search);   // query string

// redirect example 
// if(confirm("Go to YouTube?")) window.location.href = "https://youtube.com";



// # window.history
// Allows navigation through browser history.
window.history.back();    // Go back
window.history.forward(); // Go forward



//#  window.screen
// Gives info about the user's physical screen.
console.log(window.screen.width);        // Full screen width
console.log(window.screen.availWidth);   // Available width (excludes taskbar)
console.log(window.screen.colorDepth);   // Bits per pixel (color depth)
console.log(window.screen.orientation);  // Orientation info


// # window.navigator
// Provides info about the browser and OS.
console.log(navigator.userAgent);     // Browser details
console.log(navigator.language);      // e.g., "en-US"
console.log(navigator.cookieEnabled); // true if cookies are enabled
console.log(navigator.platform);      // OS info (e.g., "Win32")
console.log(navigator.onLine);        // true if browser is online


// # localStorage (Persistent Key-Value Storage)
localStorage.setItem("name", "Vishal");
console.log(localStorage.getItem("name")); // "Vishal"
localStorage.removeItem("name");           // delete key


// # Pop-up Dialogs (BOM)
alert("This is a message"); // Just a message
let confirmResult = confirm("Are you sure?"); // true/false
let name = prompt("What is your name?"); // returns input or null
