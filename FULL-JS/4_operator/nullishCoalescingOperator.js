/*
@ NULLISH COALESCING OPERATOR (??)
Defincation:
  - The Nullish coalescing (??) operator return the right hand value only when the left hand value is null or undefined.
  - if the left hand value is anything else even 0, false, or "" it return left hand value.
  - syntax
    leftValue ?? rightValue;

  Q How it work ?
  Left Value
      │
      ▼
Is it null or undefined?
      / \
    Yes  No
     │    │
     ▼    ▼

Return   Return
Right    Left
Value    Value
*/

// ex. 1
let name = null
// if the left hand value is null or undefined then it return right hand value
// in above example left hand vlau is null then it return Guest as right hand value
console.log(name ?? "Guest")

// ex. 2
let userName = 'vishal'
// if the left hand value is string, 0, false , '' then it return left hand value
console.log(userName ?? 'Guest')

// Q Why not use || ?
// suppose
let count = 0;
console.log(count || 100)
// it return 100 but may be 0 is valid value so using ?? (nullishCoalescingOperator)
console.log(count ?? 100)
// output is 0  so (zero) 0 Not null, not undefined ==> then return zero

// Another Example
console.log(false ?? true)
console.log(undefined ?? 'vishal')
console.log(null ?? 'Yes have Value')

/*
# differences between ?? vs ||  vs &&

|| treats all falsy values(0, false, "", null, undefined, NaN) as missing.
?? treats only null and undefined as missing. (Missing? (null or undefined) → Use the default value.)
&& Returns the first falsy value or, if all values are truthy, the last value. It is commonly used for conditional execution  (Truthy? → Continue; Falsy? → Stop immediately.)

+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Feature              | ?? (Nullish Coalescing)       | || (Logical OR)                    | && (Logical AND)                     |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Definition           | Returns the right value only  | Returns the left value if it is    | Returns the first falsy value.       |
|                      | when the left value is        | truthy; otherwise returns the      | If all values are truthy, returns    |
|                      | null or undefined.            | right value.                       | the last value.                      |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Purpose              | Provide a default value only  | Provide a fallback value for any   | Execute or return the next           |
|                      | when the value is missing.    | falsy value.                       | expression only if previous is       |
|                      |                               |                                    | truthy.                              |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Checks For           | null, undefined               | All falsy values                   | All falsy values                     |
|                      |                               | (false,0,"",NaN,null,undefined)    | (false,0,"",NaN,null,undefined)      |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Returns              | Left value if not null/       | Left value if truthy; otherwise    | First falsy value OR last truthy     |
|                      | undefined; otherwise right.   | right value.                       | value.                               |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Short-Circuit        | Yes                           | Yes                                | Yes                                  |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Best Use Case        | Default values                | Fallback values                    | Conditional execution                |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+
| Introduced In        | ES2020                        | ES1                                | ES1                                  |
+----------------------+-------------------------------+------------------------------------+--------------------------------------+

*/
/*
# interview question
| Operator | Name                           | Definition                                                                                                                                            | Example                         |
| -------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `?:`     | Conditional (Ternary) Operator | A shorthand for `if...else`. It evaluates a condition and returns one of two values based on whether the condition is `true` or `false`.              | `age >= 18 ? "Adult" : "Minor"` |
| `?.`     | Optional Chaining              | Safely accesses object properties or methods. If any part of the chain is `null` or `undefined`, it returns `undefined` instead of throwing an error. | `user?.address?.city`           |
| `??`     | Nullish Coalescing             | Returns the right-hand value only if the left-hand value is `null` or `undefined`; otherwise, it returns the left-hand value.                         | `name ?? "Guest"`               |

?: → एका ओळीत if...else लिहिण्यासाठी.
?. → Object ची property सुरक्षितपणे (safe) access करण्यासाठी. Error येत नाही.
?? → फक्त null किंवा undefined असल्यास default value देण्यासाठी.
----------------------------------------------------------------------
?? → "Is it null or undefined?" If yes, use the default value.
|| → "Is it truthy?" If not, use the fallback value.
&& → "Continue only if it's truthy." If it's falsy, stop immediately and return that value.
*/
