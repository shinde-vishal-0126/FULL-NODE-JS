/*
@ window vs global objects.

Q. why node js does not have window object ?
  - in node js ther is no window object becase node js run outside the browser.
  - so does not deal with DOM , BOM, or brower specific apis
  - insted of node js  has global object
  - it is equivalent to the window in the browser but designed for a server side environemnt.



Q. What is the use of the `globalThis` keyword in JavaScript or Node.js?

  - introduced in ecm2020
  - `globalThis` is a standard way to access the global object in JavaScript environment.
  - It provides a consistent way to access the global object regardless of the JavaScript environment.
  - It works in:
    - Browser
    - Node.js
    - Web Workers
    - Other JavaScript environments


Q. why global this useful ?
  -  useful for consistent access :
      - in the past, accessing the global boject varied depending on the environment
        1. browser : window
        2. node : global
        3. web workers : self
        4. other environment : might have their own global objects.

Q. what is global object ?
  - Every JavaScript environment has a global object.
  - The global object contains values and functions that are available globally within that environment.
    - in brower environment we have : window object
    - in node js environment we have global object
      - globalThis : it is consistent way to access the global object regardless of js environemnt.



Q. why we need globalThis ?
  - Before `globalThis`, different JavaScript environments used different names for the global object.
    - so in browser used : window object
    - in node js used global object
  - This created a problem when writing JavaScript code that needed to work across different environments.
  - Instead of:
      if (browser) {
          window
      } else {
          global
      }
  - We can use: globalThis
  - This can be accessed through `globalThis` in environments that support it.




Q. globalThis IN THE BROWSER
  - Example:
    console.log(globalThis === window);
  Output: true
  - Because in a browser: globalThis -> window




Q. globalThis IN NODE.JS
  - example
    console.log(globalThis === global)'
  output : true
  - because in node js : globalThis -> global
*/
globalThis.name = 'vishla';
console.log(globalThis.name);

/*
Q. globalThis IS ENVIRONMENT-INDEPENDENT
    Same API
       |
       v
    globalThis
       |
       +---- Browser
       |
       +---- Node.js
       |
       +---- Web Worker
       |
       +---- Other JS environments

So we don't need environment-specific code just to access the global object.


Q. globalThis vs window vs global

+-------------+-----------------------------+
| Name        | Environment                 |
+-------------+-----------------------------+
| window      | Browser                     |
| global      | Node.js                     |
| self        | Web Workers / browser       |
| globalThis  | Standard cross-environment  |
+-------------+-----------------------------+


                 JavaScript
                     |
                     v
                globalThis
                     |
          +----------+----------+
          |                     |
          v                     v
       Browser               Node.js
          |                     |
          v                     v
       window                 global


*/

/*
Q. globalThis vs GLOBAL SCOPE
  - globalThis refer to the global object
  - but a variable declare with let & const or class does not automatically become a property of the global boject in the same way var declaration in some global context.
*/
let x = 30;
console.log(x);
console.log(globalThis.x); // return undefined variable declare with let so it does not automatically part of the global object it having a block scope

// but
globalThis.x = 10;
console.log(globalThis.x); // explicitly creates/accesses a property on the global object.

/*
Q. SHOULD WE USE globalThis FOR EVERYTHING?

- NO.
  - Although `globalThis` allows global state, creating many global variables is generally not recommended.
- Avoid:
  - globalThis.user = {};
  - globalThis.database = {};
  - globalThis.config = {};
  - globalThis.data = [];
- Why?
    - Global state can be modified from many places.
    - It becomes difficult to track where values changed.
    - It can create naming conflicts.
    - It makes testing harder.
    - It increases coupling between modules.
- Prefer:

    - Modules
    - Functions
    - Classes
    - Dependency injection
    - Explicit configuration

- Use `globalThis` when there is a genuine reason to work with a global environment-level value or API.



Q. What is the use of globalThis?
  - Answer:
  - "`globalThis` provides a standard and environment-independent way to access the global object in JavaScript.
  - In browsers, `globalThis` refers to the same global objec as `window`, while in Node.js it refers to the same global object as `global`.
  - It is useful when writing JavaScript code that needs to access global APIs or values without depending on an environment-specific name."
  - globalThis` is the standard cross-environment way to access the global object in JavaScript."



Q How to access a variable globally without using export and import?
  - Normally, when we want to share a variable between different modules/files, we use:
    export
      +
    import
- But if we want a value to be globally accessible without using export/import, we can attach it to the global object.
- Node.js provides the `global` object. We can attach our variable to `global`.

*/

globalThis.var = 'hello word'; // now the value can be access from anoher file without using export or import

/*
Q. process :
 - process is built in node js global object
 - it provide information & control related to the current node js process

* imp point
  - Global variable are available within the same node js process
  - They are not automatically shared between different node js  process
  - i.e 2 node proecess do not automatically share the same global variable
  - for sharing data between multiple process or servers use simethidn such as
    - redis
    - database
    - message broker
    - external storate
*/
// Provide infromation and conter over the current running node vs process.
console.log(process);
console.log(process.pwd);
console.log(process.pid);

/*
Q. SHOULD WE USE GLOBAL VARIABLES?

Technically: YES As a general application design: USE CAREFULLY
Avoid unnecessarily doing:
    globalThis.user = {};
    globalThis.data = [];
    globalThis.config = {};
    globalThis.database = {};
Problems:
    - Global state can be changed from anywhere.
    - Difficult to track where a value was changed.
    - Can create naming conflicts.
    - Makes testing harder.
    - Creates hidden dependencies.
    - Makes code harder to maintain.
Prefer:
    export
       +
    import
when sharing application-level dependencies between modules.




 Q. How can we access a variable globally without using export and import?
"In Node.js, we can attach a value to the global object using `global` or, preferably, `globalThis`.
*/

globalThis.username = 'heloo_javascript';
console.log(globalThis.username); // you can access the value in another module using globalthis so no export & import are required.
// However, global variables should be used carefully because they create shared global state sand can make an application harder to maintain."
// when the global variable are useful : They can be useful for specific environment-level values or application-wide facilities when there is a clear reason.
