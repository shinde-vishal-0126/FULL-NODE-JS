/*
@ . WHAT IS require()?
    - `require()` = CommonJS (CJS) module-loading mechanism.
    - Used to load:
        1. Built-in Node.js modules
        2. Third-party packages
        3. Local/custom modules
    - `require()` returns the value exported by `module.exports`.
    - It is NOT a standard JavaScript language function. It belongs to the CommonJS environment in Node.js.
    - node js suport 2 major module suport
        1. comman js module
        - CommonJS -> require() + module.exports
        2. Es modules
        - ESM -> import + export

- resolved in following way ?
require("./math")
          |
          v
    Resolve module
          |
          v
    Check cache
       /     \
     YES      NO
      |        |
      v        v
   Return    Load
   cache       |
               v
            Execute
               |
               v
         module.exports
               |
               v
             Cache
               |
               v
         Return export

- CommonJS `require()` is synchronous.
- Current CommonJS execution waits for require() to finish before continuing.

Example:
    console.log("A");
    const math = require("./math");
    console.log("B");

Flow:

    A
    |
    v
    require()
    |
    v
    load/evaluate module
    |
    v
    return exports
    |
    v
    B


INTERVIEW:
"require() is a runtime-oriented, synchronous CommonJS module-loading mechanism."


==========================================================
5. require() MODULE CACHE
==========================================================
- First require():
    Load -> Execute -> Cache -> Return
- Next require() of same resolved module:
    Cache -> Return
Example:
    const a = require("./math");
    const b = require("./math");
- `math.js` is normally evaluated only once.
- Subsequent requires return the cached module.


==========================================================
6. require() EXPORT
==========================================================
math.js:

    function add(a, b) {
        return a + b;
    }

    module.exports = add;


app.js:

    const add = require("./math");

    console.log(add(10, 20)); // 30


KEY:

    module.exports
          |
          v
      require()
          |
          v
     returned value


==========================================================
7. CommonJS MULTIPLE EXPORTS
==========================================================
math.js:

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    module.exports = {
        add,
        subtract
    };

Import:
    const math = require("./math");
    math.add(10, 20);

OR destructuring:
    const { add, subtract } = require("./math");


IMPORTANT:

- CommonJS can export an object containing multiple functions/properties.
- Destructuring is JavaScript object destructuring.
- It is NOT exactly the same mechanism as ESM named exports.

==========================================================
8. require() LOCAL FILE EXTENSION
==========================================================
CommonJS commonly allows:

    require("./math");

instead of:
    require("./math.js");
Node performs applicable CommonJS resolution.
IMPORTANT:
- Do NOT generalize this behavior to ESM.


==========================================================
9. WHAT IS import?
- `import` belongs to ES Modules (ESM).
- ESM is the standardized JavaScript module system.
Example:
    import fs from "fs";
    import { readFile } from "fs";
ESM exports:
    export
    export default


==========================================================
10. ENABLE ESM IN NODE.JS

METHOD 1:
package.json
    {
        "type": "module"
    }
Then:

    import fs from "fs";


METHOD 2:
Use `.mjs`
    app.mjs

Then:=
    import fs from "fs";


EXPLICIT COMMONJS:
    .cjs

Example:
    app.cjs


MEMORY:
    .js + "type": "module" -> ESM
    .mjs                   -> ESM
    .cjs                   -> CommonJS



==========================================================
12. STATIC import

Example:
    import { add } from "./math.js";
- Static `import` is part of ESM syntax.
- It is NOT a normal runtime function call.
- Dependency is declared in the module structure.
- ESM loader resolves/links dependencies as part of module loading before importing module body evaluation.
- Good for static analysis.
- Tree-shaking friendly.

Think:
    import
      |
      v
    "This module depends on that module."


==========================================================
13. DYNAMIC import()
==========================================================
Example:
    const math = await import("./math.js");
- `import()` is different from static `import`.
- It is a runtime expression.
- It is asynchronous.
- It returns a Promise.
- Useful for:
    - Conditional loading
    - Lazy loading
    - Code splitting
    - Optional modules
    - Runtime-based loading

Example:

    if (usePDF) {
        const pdf = await import("./pdf.js");
    }

FLOW:

    import("./math.js")
          |
          v
       Promise
          |
          v
     Load module
          |
          v
     Evaluate module
          |
          v
     Module namespace object


==========================================================
14. require() vs static import vs import()


    require()
       |
       v
    CommonJS
       |
       v
    Runtime-oriented
       |
       v
    Synchronous
       |
       v
    module.exports


    import ...
       |
       v
    ESM
       |
       v
    Static dependency
       |
       v
    Static analysis
       |
       v
    export


    import()
       |
       v
    ESM
       |
       v
    Dynamic
       |
       v
    Asynchronous
       |
       v
    Promise


==========================================================
15. QUICK COMPARISON

    Feature              require()       import        import()
    ------------------------------------------------------------
    Module system        CommonJS        ESM           ESM
    Syntax               Expression      Declaration   Expression
    Loading              Runtime         Static        Dynamic
    Synchronous          Yes             --            No
    Promise              No              No direct     Yes
    Conditional          Yes             No            Yes
    Export               module.exports  export        export
    Tree shaking         Harder          Friendly      Depends
    Static analysis      Harder          Strong        More dynamic
    Lazy loading         Possible        No            Yes


==========================================================
16. FILE EXTENSION DIFFERENCE
CommonJS:
    const math = require("./math");

ESM:
    import { add } from "./math.js";

COMMONJS:
    .js extension commonly optional.
ESM:
    Relative/absolute imports generally use explicit
    file extensions in Node.js.

==========================================================
17. NAMED EXPORT — ESM

math.js:
    export function add(a, b) {
        return a + b;
    }
    export function subtract(a, b) {
        return a - b;
    }
app.js:
    import { add, subtract } from "./math.js";

`{ add, subtract }`
    = named imports

==========================================================
18. DEFAULT EXPORT — ESM

math.js:
    export default function add(a, b) {
        return a + b;
    }
app.js:
    import add from "./math.js";


Difference:
    Named:
        export function add() {}
        import { add } from "./math.js";
    Default:
        export default function add() {}
        import add from "./math.js";

MEMORY:
    Named  -> { }
    Default -> no { }


==========================================================
19. HOW TO IDENTIFY COMMONJS

CommonJS usually has:
    const fs = require("fs");
    module.exports = something;
    exports.something = something;


==========================================================
20. HOW TO IDENTIFY ESM

ESM usually has:
    import fs from "fs";
    export function add() {}
    export default something;




22. require() MODULE RESOLUTION
==========================================================

When Node sees:

    require("./math");

Conceptually:

    Resolve path
        |
        v
    Check cache
        |
        +---- YES --> Return cached exports
        |
        +---- NO
              |
              v
          Load module
              |
              v
          Execute module
              |
              v
        module.exports
              |
              v
            Cache
              |
              v
        Return exports

NOTE:
- Actual Node.js resolution rules are more detailed.
- Above is the useful conceptual model.


23. TREE SHAKING
==========================================================

DEFINITION: "Tree shaking is a build-time optimization technique that uses static analysis to remove safely unused code from the final JavaScript bundle."

29. TREE SHAKING vs MINIFICATION
==========================================================

TREE SHAKING:

"Do we need this code?"  -> Removes unused code.
MINIFICATION: "Can we make the required code smaller?" -> Shortens/removes unnecessary characters.

MEMORY:
    Tree shaking -> REMOVE unnecessary code
    Minification -> SHRINK remaining code
Both can work together.



37. TREE SHAKING DOES NOT GUARANTEE SMALLER CODE
==========================================================
Actual result depends on:
    - Module format
    - Bundler
    - Code structure
    - Side effects
    - Static analyzability
    - Build configuration
    - Minification
    - Dependencies

DON'T SAY: "Using export automatically removes unused code."
BETTER: "ESM makes code suitable for tree shaking, and a compatible bundler can remove unused code during build."


38. require() vs import — MOST IMPORTANT DIFFERENCE
==========================================================
require():
    Runtime-oriented
    Synchronous
    CommonJS
    module.exports
    Can be conditional
    More dynamic
    Harder static analysis


static import:
    ESM
    Static dependency declaration
    Resolved/linked as part of ESM loading
    export
    Strong static analysis
    Tree-shaking friendly


import():
    ESM
    Dynamic
    Runtime request
    Asynchronous
    Returns Promise
    Conditional loading
    Lazy loading
    Code splitting


39. WHEN TO USE require()
==========================================================
Use `require()` when:
    - Existing project uses CommonJS
    - Project uses module.exports
    - Project configuration is CommonJS
    - Maintaining legacy/traditional CJS code
    - Tooling expects CommonJS


40. WHEN TO USE import
==========================================================
Use ESM when:
    - Project uses ESM
    - package.json has "type": "module"
    - Files use .mjs
    - Starting a modern Node.js project
    - Want standard JavaScript module syntax
    - Want static import/export structure
    - Want tooling-friendly static analysis


41. WHEN TO USE import()
==========================================================
Use dynamic `import()` for:
    - Lazy loading
    - Conditional loading
    - Code splitting
    - Optional functionality
    - Runtime-based module loading



43. MOST IMPORTANT INTERVIEW QUESTIONS
==========================================================

Q1. What is require()?
- "require() is Node.js's CommonJS module-loading mechanism used to load a module and receive its exported value."


Q2. require() vs import?
- "require() belongs to CommonJS,
- while import belongs to ES Modules.
- require() is runtime-oriented and synchronous,
- while static import is part of ESM's static module structure."


Q3. What is import()?
- "import() is the dynamic ESM loading mechanism. It is asynchronous and returns a Promise."


Q4. Why is ESM better for tree shaking?
- "ESM uses statically analyzable import/export syntax, allowing bundlers to determine which exports are used and safely remove unused code."


Q5. Why is CommonJS harder to tree shake?
- "CommonJS is more runtime-oriented and allows dynamic module/export access, making static analysis harder."


Q6. What is tree shaking?
- "Tree shaking is a build-time optimization that uses static analysis to remove safely unused code from a JavaScript bundle."


Q7. Tree shaking vs minification?
- "Tree shaking removes unnecessary code;
- minification makes the remaining code smaller."


Q8. Is tree shaking performed by Node.js?
- "No. It is generally performed by compatible build tools or bundlers during the build process."


Q9. Does import automatically tree shake?
- "No. ESM is tree-shaking-friendly, but a bundler/build tool performs the actual removal."


Q10. What is a side effect?
- "A side effect is an observable action that can affect behavior outside simply producing a return value."


44. FINAL MEMORY TRICK
==========================================================

              NODE.JS MODULES
                    |
          +---------+---------+
          |                   |
          v                   v
      CommonJS              ESM
          |                   |
          v                   v
      require()             import
          |                   |
          v                   v
   module.exports           export
          |                   |
          v                   v
   Runtime-oriented      Static structure
          |                   |
          v                   v
    Synchronous          Static analysis
                              |
                              v
                        Tree shaking













47. FINAL INTERVIEW ONE-LINER
==========================================================
- "Node.js supports CommonJS and ES Modules.
- CommonJS uses require() and module.exports,while ESM uses import/export.
- require() is runtime-oriented and synchronous,
- static import has a statically analyzable dependency structure, and dynamic import() is asynchronous and returns a Promise.
- ESM is generally more suitable for tree shaking because bundlers can statically analyze its module structure."


require()       -> CommonJS
module.exports  -> CJS export
exports         -> CJS export helper
import          -> ESM static import
export          -> ESM export
export default  -> ESM default export
import()        -> Dynamic ESM import
Promise         -> import()
Synchronous     -> require()
Static          -> import
Dynamic         -> require() / import()
Tree shaking    -> Remove safely unused code
Minification    -> Shrink remaining code
Side effect     -> Observable behavior
Bundler         -> Performs tree shaking
Node.js runtime -> Does NOT normally tree shake

*/
