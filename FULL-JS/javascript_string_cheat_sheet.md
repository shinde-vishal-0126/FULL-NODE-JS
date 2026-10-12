# 🚀 JavaScript String Master Cheat Sheet — All 40 Individual Methods & Concepts

> **Special Focus:** 40 Individual Method Cards (#1 to #40), Exact Definitions, Parameters, Exact Return Values, Code Examples, and Edge Cases (`""`, `undefined`, `null`, `Infinity`).  
> **PDF Export Ready HTML File:** [`js_string_cheat_sheet.html`](file:///d:/IMP/FULL-JS/js_string_cheat_sheet.html)

---

## 📌 1. STRING BASICS & CREATION

### 1. `length`
* **📖 Exact Definition:** Read-only data property reflecting the number of UTF-16 code units (16-bit units) present in the string.
* **⚙️ Parameters:** None (Property access).
* **↩️ Return Value:** `Number` (Non-negative integer count, e.g., `0`, `5`).
* **💻 Code:**
  ```javascript
  "Hello".length; // 5
  "😀".length;    // 2 (Surrogate pair uses 2 units)
  ```
* **⚡ Edge Cases:**
  - `"".length` ➔ `0`
  - `undefined.length` | `null.length` ➔ 💥 **`TypeError`**
  - Read-only property! Assignment fails silently or throws TypeError in strict mode.

---

### 2. Property Access `[]`
* **📖 Exact Definition:** Accesses the character at a zero-based numeric index using bracket notation. Read-only because strings are immutable primitives.
* **⚙️ Parameters:** `index` (coerced to string property key).
* **↩️ Return Value:** Single-character `String` if valid index; `undefined` if negative or out of bounds.
* **💻 Code:**
  ```javascript
  "Hello"[0];   // "H"
  "Hello"[100]; // undefined
  ```
* **⚡ Edge Cases:**
  - `""[0]` ➔ `undefined`
  - `"abc"[-1]` | `"abc"[100]` ➔ `undefined`
  - `"abc"[undefined]` ➔ `undefined` (looks up property `"undefined"`)

---

### 3. `String()` (Global Conversion)
* **📖 Exact Definition:** Global constructor invoked as a function to perform explicit primitive string coercion on any given value.
* **⚙️ Parameters:** `value` (Any JavaScript value).
* **↩️ Return Value:** Primitive `String` representation.
* **💻 Code:**
  ```javascript
  String(123);  // "123"
  String(null); // "null"
  ```
* **⚡ Edge Cases:**
  - `String("")` ➔ `""`
  - `String(undefined)` ➔ `"undefined"`
  - `String(null)` ➔ `"null"`
  - `String(Symbol("id"))` ➔ `"Symbol(id)"` (Does NOT throw)

---

### 4. `toString()`
* **📖 Exact Definition:** Object prototype method that returns string representation of a value. Overridden by primitive wrappers.
* **⚙️ Parameters:** For numbers: optional `radix` (base 2..36).
* **↩️ Return Value:** Primitive `String`.
* **💻 Code:**
  ```javascript
  (255).toString(16); // "ff" (hexadecimal)
  ```
* **⚡ Edge Cases:**
  - `"".toString()` ➔ `""`
  - `null.toString()` | `undefined.toString()` ➔ 💥 **`TypeError`**

---

### 5. Template Literals
* **📖 Exact Definition:** Strings enclosed in backticks (`` ` ``) allowing embedded expression interpolation, multi-line strings, and tagged templates.
* **⚙️ Parameters:** Expressions inside `${}`.
* **↩️ Return Value:** Primitive `String`.
* **💻 Code:**
  ```javascript
  `Hello ${name}`; // "Hello Vishal"
  `Sum: ${10 + 20}`; // "Sum: 30"
  ```

---

## 📌 2. SEARCHING METHODS

### 6. `indexOf()`
* **📖 Exact Definition:** Searches the calling string forward starting from `fromIndex` to locate the first occurrence of `searchString`.
* **⚙️ Parameters:** `searchString` (substring), `fromIndex` (start index, default `0`).
* **↩️ Return Value:** `Number` (0-based integer index of first match; `-1` if not found).
* **💻 Code:**
  ```javascript
  "Hello World".indexOf("o"); // 4
  ```
* **⚡ Edge Cases:**
  - `"Hello".indexOf("")` ➔ `0` | `"Hello".indexOf("", 3)` ➔ `3`
  - Negative `fromIndex` is treated as `0`.
  - `"Hello".indexOf("e", Infinity)` ➔ `-1`

---

### 7. `lastIndexOf()`
* **📖 Exact Definition:** Searches the calling string backward starting from `fromIndex` to locate the last occurrence of `searchString`.
* **⚙️ Parameters:** `searchString` (substring), `fromIndex` (start index, default `+Infinity`).
* **↩️ Return Value:** `Number` (0-based forward integer index of match; `-1` if not found).
* **💻 Code:**
  ```javascript
  "Hello Hello".lastIndexOf("Hello"); // 6
  ```
* **⚡ Edge Cases:**
  - Negative `fromIndex` is treated as `0` (searches index 0 only).
  - `"Hello".lastIndexOf("")` ➔ `5` (string length).

---

### 8. `search()`
* **📖 Exact Definition:** Executes a search for a match between a Regular Expression and the calling string using string matching engines.
* **⚙️ Parameters:** `regexp` (RegExp object or string implicitly converted to RegExp).
* **↩️ Return Value:** `Number` (0-based index of first match; `-1` if no match found).
* **💻 Code:**
  ```javascript
  "Hello World".search(/World/); // 6
  ```
* **⚡ Edge Cases:**
  - Ignores global `/g` flag. No `fromIndex` parameter.
  - `"Hello".search("")` ➔ `0`

---

### 9. `includes()`
* **📖 Exact Definition:** Determines whether the calling string contains the specified `searchString` starting search from `position`.
* **⚙️ Parameters:** `searchString` (substring), `position` (start index, default `0`).
* **↩️ Return Value:** `Boolean` (`true` if substring found, `false` otherwise).
* **💻 Code:**
  ```javascript
  "Hello World".includes("World"); // true
  ```
* **⚡ Edge Cases:**
  - Case-sensitive. Passing RegExp throws 💥 **`TypeError`**.
  - `"Hello".includes("")` ➔ `true`
  - Negative position treated as `0`.

---

### 10. `startsWith()`
* **📖 Exact Definition:** Determines whether the calling string begins with the characters of `searchString` at specified position.
* **⚙️ Parameters:** `searchString` (substring), `position` (start index, default `0`).
* **↩️ Return Value:** `Boolean` (`true` or `false`).
* **💻 Code:**
  ```javascript
  "Hello".startsWith("He"); // true
  ```

---

### 11. `endsWith()`
* **📖 Exact Definition:** Determines whether the calling string ends with `searchString`, considering characters up to `length`.
* **⚙️ Parameters:** `searchString` (substring), `length` (max length to consider, default `str.length`).
* **↩️ Return Value:** `Boolean` (`true` or `false`).
* **💻 Code:**
  ```javascript
  "Hello".endsWith("lo"); // true
  ```

---

## 📌 3. REGEX MATCHING METHODS

### 12. `match()`
* **📖 Exact Definition:** Retrieves the result of matching a string against a Regular Expression pattern.
* **⚙️ Parameters:** `regexp` (RegExp object or string).
* **↩️ Return Value:** Without `/g`: match `Array` with details; With `/g`: `Array` of match strings; No match: `null`.
* **💻 Code:**
  ```javascript
  "test1 test2".match(/test\d/g); // ["test1", "test2"]
  ```

---

### 13. `matchAll()`
* **📖 Exact Definition:** Returns an iterator of all matching results including capturing groups for every match.
* **⚙️ Parameters:** `regexp` (RegExp object MUST have `/g` flag).
* **↩️ Return Value:** `RegExp String Iterator` yielding detailed match arrays.
* **💻 Code:**
  ```javascript
  const res = "t1 t2".matchAll(/t(\d)/g);
  console.log([...res]);
  ```

---

## 📌 4. EXTRACTING & ACCESSING METHODS

### 14. `slice()`
* **📖 Exact Definition:** Extracts a section of a string from `start` to `end` (exclusive) and returns it as a new string without modifying original.
* **⚙️ Parameters:** `start` (0-based index), `end` (exclusive end index, default `str.length`).
* **↩️ Return Value:** New extracted `String`.
* **💻 Code:**
  ```javascript
  "Hello World".slice(0, 5); // "Hello"
  "Hello World".slice(-5);   // "World"
  ```

---

### 15. `substring()`
* **📖 Exact Definition:** Extracts characters between `start` and `end` (exclusive), automatically swapping parameters if `start > end`.
* **⚙️ Parameters:** `start` (0-based index), `end` (exclusive end index, default `str.length`).
* **↩️ Return Value:** New extracted `String`.
* **💻 Code:**
  ```javascript
  "Hello World".substring(5, 0); // "Hello" (swaps arguments)
  ```

---

### 16. `charAt()`
* **📖 Exact Definition:** Returns the UTF-16 code unit character at the specified 0-based index.
* **⚙️ Parameters:** `index` (integer position, default `0`).
* **↩️ Return Value:** Single-character `String` if valid; `""` (empty string) if out of bounds or negative.
* **💻 Code:**
  ```javascript
  "Hello".charAt(1);  // "e"
  "Hello".charAt(99); // ""
  ```

---

### 17. `charCodeAt()`
* **📖 Exact Definition:** Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
* **⚙️ Parameters:** `index` (integer position, default `0`).
* **↩️ Return Value:** `Number` (0..65535 code unit integer) or `NaN`.
* **💻 Code:**
  ```javascript
  "A".charCodeAt(0); // 65
  ```

---

### 18. `codePointAt()`
* **📖 Exact Definition:** Returns non-negative integer representing Unicode code point value at position (handles 32-bit Emojis/Unicode).
* **⚙️ Parameters:** `pos` (0-based position index).
* **↩️ Return Value:** `Number` (Unicode code point) or `undefined`.
* **💻 Code:**
  ```javascript
  "😀".codePointAt(0); // 128512 (0x1F600)
  ```

---

### 19. `at()` (ES2022)
* **📖 Exact Definition:** Modern ES2022 method returning character at index, natively supporting relative negative indexing from end.
* **⚙️ Parameters:** `index` (integer index, positive or negative).
* **↩️ Return Value:** Single-character `String` if valid; `undefined` if out-of-bounds.
* **💻 Code:**
  ```javascript
  "Hello".at(-1); // "o" (last character)
  ```

---

## 📌 5. MODIFYING & REPLACING METHODS

### 20. `replace()`
* **📖 Exact Definition:** Replaces first match (or all matches if /g regex used) of searchValue with replacement string or function.
* **⚙️ Parameters:** `searchValue` (string/RegExp), `replacement` (string/function).
* **↩️ Return Value:** New replaced `String`.
* **💻 Code:**
  ```javascript
  "Hello Hello".replace("Hello", "Hi"); // "Hi Hello"
  ```

---

### 21. `replaceAll()`
* **📖 Exact Definition:** Returns new string with all occurrences of searchValue replaced by replacement.
* **⚙️ Parameters:** `searchValue` (string or global RegExp with /g), `replacement`.
* **↩️ Return Value:** New replaced `String`.
* **💻 Code:**
  ```javascript
  "Hello Hello".replaceAll("Hello", "Hi"); // "Hi Hi"
  ```

---

### 22. `concat()`
* **📖 Exact Definition:** Combines text of one or more string arguments with calling string and returns a new string.
* **⚙️ Parameters:** `str1, ..., strN` (strings or values coerced to string).
* **↩️ Return Value:** New concatenated `String`.
* **💻 Code:**
  ```javascript
  "Hello".concat(" ", "World"); // "Hello World"
  ```

---

### 23. `repeat()`
* **📖 Exact Definition:** Constructs and returns a new string containing `count` copies of calling string concatenated together.
* **⚙️ Parameters:** `count` (non-negative number).
* **↩️ Return Value:** New repeated `String`.
* **💻 Code:**
  ```javascript
  "abc".repeat(3); // "abcabcabc"
  ```

---

## 📌 6. CASE CONVERSION

### 24. `toLowerCase()` | 25. `toUpperCase()`
* **📖 Exact Definition:** Converts string to lowercase or uppercase according to host locale.
* **💻 Code:** `"HELLO".toLowerCase(); // "hello"`

### 26. `toLocaleLowerCase()` | 27. `toLocaleUpperCase()`
* **📖 Exact Definition:** Converts string to lowercase or uppercase respecting language-specific rules (e.g. Turkish `i`/`İ`).

---

## 📌 7. WHITESPACE METHODS

### 28. `trim()` | 29. `trimStart()` | 30. `trimEnd()`
* **📖 Exact Definition:** Removes whitespace from both ends, start-only (`trimLeft`), or end-only (`trimRight`).

---

## 📌 8. PADDING METHODS

### 31. `padStart()` | 32. `padEnd()`
* **📖 Exact Definition:** Pads string from start or end with padString until target length is reached.
* **💻 Code:** `"5".padStart(3, "0"); // "005"`

---

## 📌 9. CONVERSION & SPLITTING

### 33. `split()`
* **📖 Exact Definition:** Divides string into an ordered array of substrings by searching for separator boundary.
* **💻 Code:** `"a,b,c".split(","); // ["a", "b", "c"]`

---

### 34. `valueOf()`
* **📖 Exact Definition:** Returns primitive string value of String object or primitive.

---

## 📌 10. STATIC & MODERN METHODS

### 35. `String.fromCharCode()` | 36. `String.fromCodePoint()` | 37. `String.raw()`
* **📖 Exact Definition:** Static methods for generating strings from code units, code points (emojis), or raw template literals.

---

### 38. `isWellFormed()` (ES2023) | 39. `toWellFormed()` (ES2023)
* **📖 Exact Definition:** Modern ES2023 methods to test or repair Unicode strings containing lone surrogate units.

---

### 40. `localeCompare()`
* **📖 Exact Definition:** Compares two strings in a locale-sensitive order for sorting algorithms.

---

## ⚡ MASTER RETURN VALUES & EDGE CASE MATRIX

| Method | Exact Return Type | Normal Return | Not Found / Invalid Return | Passed `undefined` / `null` |
| :--- | :--- | :--- | :--- | :--- |
| `indexOf()` | `Number` | Index (0..len-1) | `-1` | Searches string `"undefined"` / `"null"` |
| `lastIndexOf()` | `Number` | Index (0..len-1) | `-1` | Searches string `"undefined"` / `"null"` |
| `search()` | `Number` | Index (0..len-1) | `-1` | Converts to `/undefined/` / `/null/` |
| `includes()` | `Boolean` | `true` | `false` | Checks `"undefined"` / `"null"` |
| `match()` | `Array / Null` | Match Array | `null` | Matches empty regex at start |
| `matchAll()` | `Iterator` | Match Iterator | Empty Iterator | Must be global RegExp |
| `charAt()` | `String` | Char string | `""` (empty string) | Index `0` ➔ First char |
| `at()` | `String / Undefined` | Char string | `undefined` | Index `0` ➔ First char |
| `charCodeAt()` | `Number` | UTF-16 code unit | `NaN` | Index `0` ➔ First code unit |
| `codePointAt()` | `Number / Undefined` | Unicode code point | `undefined` | Index `0` ➔ First code point |
| `slice()` | `String` | Extracted String | `""` (empty string) | Defaults (`start=0`, `end=len`) |
| `substring()` | `String` | Extracted String | `""` (empty string) | Defaults (`start=0`, `end=len`) |
| `repeat()` | `String` | Repeated String | 💥 `RangeError` (if < 0) | Coerced to `0` ➔ Returns `""` |
| `isWellFormed()` | `Boolean` | `true` / `false` | `false` (if lone surrogate) | `true` (on `"undefined"`) |

---
*Created for Complete Interview Revision.*
