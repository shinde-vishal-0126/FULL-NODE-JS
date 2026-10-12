# FULL-JS: JavaScript Master Notes

## Standing instruction (always active in this folder)

When the user pastes notes/content (JS notes, text or code), with or without a prompt, OR names a project
folder (e.g. `D:\IMP\FULL-JS\13_objects`), **add it to the JavaScript Master Notes PDF**. Do not ask for a
prompt and do not create a separate PDF.

Follow **every rule in [js-master-notes/PROMPT.md](js-master-notes/PROMPT.md)** exactly. Read it first,
every time. It is the permanent prompt for this folder.

- Master source: `js-master-notes/javascript-master.html` (edit this, never recreate it)
- Master output: `JavaScript-Master-Notes.pdf` (rebuild with Edge headless after every change)
- If the user pastes an old prompt together with their notes, ignore the old prompt's conflicting rules
  and follow PROMPT.md (inline corrections + Marathi explanation, one master PDF).
- If the user asks to change a rule, update PROMPT.md (and this file if needed), then apply the change to
  the existing chapters.
- Reply in Hinglish.

## Structure: Parts (main topic) → Chapters (sub-topic)

The PDF is organised into PARTS that follow the project folders. Put every new chapter into the right part
(see the category plan in PROMPT.md), not simply at the end. Chapters and figures are numbered continuously.

**Inserting into an earlier part:** write the new chapter with a temporary number (`Chapter 99`, `CHAPTER 99
INDEX`, `END OF CHAPTER 99`, index row `<td>99</td>`, figures `Figure 901…`), place it above that part's
`<!-- PART-END n -->` marker (index row above `<!-- INDEX-PART-END n -->`), or right after the chapter it should
follow. Then run `node js-master-notes/renumber.js` (renumbers chapters, figures, "Chapter N"/"Figure N" refs and
the master index in document order). Then bump EVERY chapter number ≥ the new one in `coverage-check.js` MAP
(lists can hold several numbers, e.g. `[34, 35]`; bump all of them with a small Node script) and add the new file.
**Appending at the end of the last part** needs no renumbering.

## Checks (run after every chapter)
- `node js-master-notes/coverage-check.js <folder>`: no source line may be missing.
- `node js-master-notes/interview-check.js`: every chapter needs an interview heading, ≥ 4 Q-boxes and output questions.
- Run the user's files in Node first: watch for duplicate function declarations (hoisting → the last one wins),
  unclosed comments and typos that crash the file; document them in the chapter.

## Current contents (generated from the HTML)
- **PART 1 · Fundamentals**
  1. Variables · 2. Data Types · 3. Type Conversion · 4. Strings I: Basics, Access & Template Literals · 5. Strings II: Searching · 6. Strings III: Extracting & Character Codes · 7. Strings IV: Transforming & Comparing · 8. Strings V: Cheat Sheet & Interview Programs · 9. Regular Expressions (Regex)
- **PART 2 · Scope & Closures**
  10. Scope, Lexical Scope & Closures · 11. Scope & Lexical Scope: Interview Prep Guide · 12. Hoisting · 13. Closures Deep Dive · 14. How JavaScript Code Executes
- **PART 3 · Operators**
  15. Expressions & Operators · 16. Conditional (Ternary) Operator · 17. Nullish Coalescing Operator (??) · 18. Optional Chaining (?.) · 19. Spread Operator (...) · 20. Rest Operator (...) · 21. Computed Property Names · 22. The instanceof Operator
- **PART 4 · Control Flow**
  23. Control Flow Statements · 24. Decision Making Statements · 25. Switch Statement · 26. Loops · 27. Jump Statements · 28. Control Flow: Interview Prep Guide
- **PART 5 · Functions**
  29. Functions · 30. Anonymous Functions · 31. Arrow Functions · 32. IIFE (Immediately Invoked Function Expression) · 33. First-Class Functions · 34. Pure & Impure Functions · 35. Memoization · 36. Function Currying · 37. The this Keyword · 38. Callback Functions & Higher-Order Functions · 39. Returning Multiple Values
- **PART 6 · Arrays**
  40. Array Basics & Iteration · 41. Array Traversal & Iteration Guide · 42. forEach() & map() · 43. Adding & Removing Elements · 44. Searching & Testing Arrays · 45. filter(), reduce() & reduceRight() · 46. Ordering, Copying & Converting Arrays · 47. Flattening Arrays · 48. Creating Arrays, Iterators & Grouping · 49. Destructuring, Chaining & Array Interview Practice
- **PART 7 · Objects & OOP**
  50. Objects: Basics · 51. Object Methods & Utilities · 52. Object Destructuring · 53. JSON · 54. Map & Set · 55. Shallow Copy vs Deep Copy · 56. Prototypes: Zero to Hero (Basics) · 57. Prototypal Inheritance & Advanced Prototypes · 58. Classes (ES6) · 59. Singleton Pattern · 60. Object Property Control · 61. Proxy & Reflect
- **PART 8 · Asynchronous JS**
  62. Synchronous vs Asynchronous JS · 63. Callbacks & Callback Hell · 64. Promises: Basics · 65. Promise Chaining · 66. Promise Combinators · 67. Promise Output & Interview Questions · 68. async / await · 69. The Event Loop, Microtasks & Macrotasks
- **PART 9 · Browser & DOM**
  70. The window Object & BOM · 71. Web Storage & Cookies · 72. Same-Origin Policy & CORS · 73. DOM: Document Object & Tree Navigation · 74. DOM: Searching, Content & Creating Elements · 75. Events: Event Object & 3 Ways to Handle Events · 76. Mouse, Keyboard, Input & Change Events · 77. Event Propagation & Event Delegation · 78. Timing Events · 79. Debouncing · 80. Throttling · 81. Web Workers & requestAnimationFrame
- **PART 10 · Modern JS & More**
  82. The Math Object · 83. The Date Object · 84. ES6+ Features by Version (ES2015 → ES2023) · 85. ES6 Modules: export & import · 86. Polyfills I: Array Methods · 87. Polyfills II: call, apply, bind, once & Object Helpers · 88. Polyfills III: Promise & Combinators · 89. Error Handling · 90. Iterators & Generators · 91. Memory Management & Garbage Collection
- **PART 11 · Mock Interviews**
  92. Mock Interview I: Coding Tasks & Core Q&A · 93. Mock Interview II: Output Questions, Async & ES6
- Figures: 1–160 (numbered in document order)
- coverage-check.js MAP lists which folder/file feeds which chapter; after inserting temp chapters, remap from renumber.js output.

Folders done: 1-variable, 2-dataTypes, 2-2-typeCoercion, 3_scope, 4_operator, 5_controlFlowStatment, 6_function,
7_array, 9_hoisting, 10_closure, 11_memiize, 12_currying, 13_objects, 14_spreadOperator.js, 16_this, 18_promise,
19_synchronousAsynchronous.js, 20_async_await, 21_restOperator, 22_prototype, 23_callback, 24_mathObject, 25_event,
26_Model(export And Import), 27_debouncing, 28_throttling, 29_bomObject, 30_domObject, 31_class, 32_jsvascript_execution, 33_polyfill, 39_eventPraPogationAndDelegation, 40_Date,
root files 34_computedPropery.js, 35_Es6Featues.js, 36_instancesOfOperator.js, 37_returnMultiPleValue.js, 38_singleToneClass.js, 41_eventLoop, 42_localStroage, 43_cors, shallow-deep-copy, string (+ javascript_string_cheat_sheet.md), note, mock-interview.
PENDING: none (all folders done).

