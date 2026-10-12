/*
@ EXPRESSION & OPERATOR.
Q. what is expression ?
  ! - defination: Expression is nothing but combination of operator and operand and it return result as single value.
  -  expression are always executed left-right
  - A combination of operands (variables, literals) and operators that is evaluated to resolve to a single value.

Q. what is operator >
  - operator special type of character or symbol the represent the specific mathematical or logical action'
  - A special character or symbol that represents a specific mathematical, comparison, or logical action
*/
// ex.expression is combination or operator and operand so num, num1, and num2 are operand and * and / are the operator
let num = 20;
let num1 = 30;
let num2 = 5;
let result = (num * num1) / num2;
console.log("result", result);

// Q How to check truthy and falsy value
// using if and else condition
let name = "vishal";
if (name) {
  console.log("this is truthy value");
} else {
  console.log("this is falsy value");
}

var score = 99;
if (score === 0) {
  console.log("OMG WE LOSS THE GAGE...!");
}
//IF YOU GIVE FALSY VALUE IF THE CONDITION ALWAY RETURN IN ELSE BLOCK
else {
  console.log("WE WIN THE GAME..");
}
/*
@ TYPE OF OPERATORS
  1. Assign Operators
  2. Arithmatic operator
  3. comparision operator
  4. Logical operator
  5. String Operators
  6. Unary Operators
  7. Ternary Operator (conditional operator)
  8. Type Operators.

# JavaScript Operators Classification
/*
JavaScript Operators
│
├── 1. Classification by Number of Operands (Arity)
│
│   ├── Unary Operators (1 Operand)
│   │
│   │   +----------------------+------------------------------+-------------------------------------------+
│   │   | Operator Name        | Symbol                       | Purpose                                   |
│   │   +----------------------+------------------------------+-------------------------------------------+
│   │   | Increment            | ++                           | Increase value by 1                       |
│   │   | Decrement            | --                           | Decrease value by 1                       |
│   │   | Unary Plus           | +                            | Convert value to Number                   |
│   │   | Unary Minus          | -                            | Negate numeric value                      |
│   │   | Logical NOT          | !                            | Reverse Boolean value                     |
│   │   | typeof               | typeof                       | Returns data type                         |
│   │   | delete               | delete                       | Deletes object property                   |
│   │   | void                 | void                         | Returns undefined                         |
│   │   +----------------------+------------------------------+-------------------------------------------+
│
│   ├── Binary Operators (2 Operands)
│   │
│   │   +----------------------+------------------------------+-------------------------------------------+
│   │   | Category             | Operators                    | Purpose                                   |
│   │   +----------------------+------------------------------+-------------------------------------------+
│   │   | Arithmetic           | + - * / % **                 | Mathematical operations                   |
│   │   | Assignment           | = += -= *= /= %= **=         | Assign values                             |
│   │   | Comparison           | == === != !== < > <= >=      | Compare values                            |
│   │   | Logical              | && ||                        | Logical operations                        |
│   │   | Bitwise              | & | ^ ~ << >> >>>           | Binary operations                         |
│   │   | String               | + +=                         | String concatenation                      |
│   │   | Type                 | instanceof, in               | Check object/property                     |
│   │   +----------------------+------------------------------+-------------------------------------------+
│
│   └── Ternary Operators (3 Operands)
│
│       +----------------------+------------------------------+-------------------------------------------+
│       | Operator Name        | Symbol                       | Purpose                                   |
│       +----------------------+------------------------------+-------------------------------------------+
│       | Conditional Operator | condition ? expr1 : expr2    | Short-hand for if...else                  |
│       +----------------------+------------------------------+-------------------------------------------+
│
└── 2. Classification by Functionality

    +----------------------------+-----------------------------------------+-----------------------------------------+
    | Category                   | Operators                               | Purpose                                 |
    +----------------------------+-----------------------------------------+-----------------------------------------+
    | Arithmetic Operators       | +  -  *  /  %  **                       | Mathematical calculations               |
    | Assignment Operators       | = += -= *= /= %= **=                    | Assign or update values                 |
    | String Operators           | + +=                                    | Concatenate strings                     |
    | Comparison Operators       | == === != !== < > <= >=                | Compare two values                      |
    | Logical Operators          | && || !                                 | Boolean logic                           |
    | Bitwise Operators          | & | ^ ~ << >> >>>                      | Binary operations                       |
    | Type Operators             | typeof instanceof in                    | Check type/property                     |
    | Conditional Operator       | ?:                                      | Short-hand if...else                    |
    | Optional Chaining          | ?.                                      | Safe property access                    |
    | Nullish Coalescing         | ??                                      | Default for null/undefined              |
    | Logical Assignment         | &&= ||= ??=                             | Logical assignment                      |
    | Spread Operator            | ...                                     | Expand array/object                     |
    | Rest Operator              | ...                                     | Collect remaining values                |
    | Comma Operator             | ,                                       | Evaluate multiple expressions           |
    | delete Operator            | delete                                  | Remove object property                  |
    | void Operator              | void                                    | Return undefined                        |
    +----------------------------+-----------------------------------------+-----------------------------------------+
Unary Operator    → Works with 1 operand.
Binary Operator   → Works with 2 operands.
Ternary Operator  → Works with 3 operands.
Spread (...) and Rest (...) use the same syntax,
but their behavior depends on the context in which they are used.
*/
/*
===============================================================================
# ASSIGNMENT OPERATORS
===============================================================================
Definition:
- Assignment operators assign a value to the left operand based on the value
  of the right operand.
- The most common assignment operator is the equal sign (=).
Syntax:
    variable = value;
# ASSIGNMENT OPERATORS TABLE
+-----------------------------+--------+-------------------------+----------------+
| Operator Name               | Symbol | Equivalent Expression   | Example        |
+-----------------------------+--------+-------------------------+----------------+
| Assignment                  | =      | x = y                   | x = 10         |
| Addition Assignment         | +=     | x = x + y               | x += 5         |
| Subtraction Assignment      | -=     | x = x - y               | x -= 5         |
| Multiplication Assignment   | *=     | x = x * y               | x *= 5         |
| Division Assignment         | /=     | x = x / y               | x /= 5         |
| Remainder Assignment        | %=     | x = x % y               | x %= 5         |
| Exponentiation Assignment   | **=    | x = x ** y              | x **= 2        |
+-----------------------------+--------+-------------------------+----------------+
- Assignment operator assign value to its left operand based on the value of its right operand
- assignment operator in programming are symbol used to assign value to variable.
- They tak value on the right side of the operator and assign it to the variable on left side..
- Assignment operator is equal sign (=)
*/
// assign operator assign value to its left operand based on value of its right operand
console.log(
  "assign value to the right operand  using assign operator equal (=)",
);
let num12 = 10;
console.log(num1); // 10

//
console.log("addition assignment operator", " += ");
let val = 20;
let result111 = 20;
result111 += val; // result = 20 + 20
console.log(result111); // 40

//
console.log("subtraction assignment operator", " -= ");
let num13S = 20;
result -= val; // result = 20 - 20
console.log(result); // 0

//
console.log("multiplication assignment operator", " *= ");
num1 *= val; // result = 20 * 20
console.log(num1); // 400

//
console.log("division  assignment operator", " /= ");
result /= val; // num = 20 / 20
console.log(result); //

//
console.log("module  assignment operator", " /= ");
result *= val; // num = 1 % 20
console.log(result); //  20 (return reminder)

//
console.log("exponential  assignment operator", " /= ");
console.log(num);
console.log(val);
num **= val; // num = 10 ** 20
console.log(num); //
//? when working with floating point numbers in javascript consider using method like toFixed(2) when precise decimal representation is necessary
/*
===============================================================================
#  ARITHMETIC OPERATORS
===============================================================================
  Definition:
  - Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.
  +-------------------+-------------------------------+--------+----------------------+--------+
  | Operator Name     | Action                        | Symbol | Example              | Output |
  +-------------------+-------------------------------+--------+----------------------+--------+
  | Addition          | Adds two values              |   +    | 20 + 30              |   50   |
  | Subtraction       | Subtracts right from left    |   -    | 30 - 20              |   10   |
  | Multiplication    | Multiplies two values        |   *    | 20 * 30              |  600   |
  | Division          | Divides left by right        |   /    | 30 / 20              |  1.5   |
  | Modulus           | Returns the remainder        |   %    | 20 % 30              |   20   |
  | Exponentiation    | Raises a value to a power    |   **   | 5 ** 3               |  125   |
  +-------------------+-------------------------------+--------+----------------------+--------+
  Notes:
  - (+)  Addition          → Adds two numbers.
  - (-)  Subtraction       → Subtracts the second number from the first.
  - (*)  Multiplication    → Multiplies two numbers.
  - (/)  Division          → Returns the quotient.
  - (%)  Modulus           → Returns the remainder after division.
  - (**) Exponentiation    → Raises the left operand to the power of the right operand.
! Example:
  5 ** 3
  = 5 × 5 × 5
  = 125
  Interview Notes:
  ✔ Division (/) returns the quotient.
  ✔ Modulus (%) returns the remainder.
  ✔ Exponentiation (**) was introduced in ES2016 (ES7).
/*
===============================================================================
#  STRING OPERATORS
===============================================================================
  Definition:
  - String operators are used to concatenate (join) two or more strings.
  - In JavaScript, the (+) operator is overloaded. It performs both numeric addition and string concatenation depending on the operands.
# STRING OPERATORS TABLE
  +-----------------------------------+--------+-----------------------------------------+
  | Operator Name                     | Symbol | Purpose                                 |
  +-----------------------------------+--------+-----------------------------------------+
  | String Concatenation              | +      | Joins two or more strings               |
  | String Concatenation Assignment   | +=     | Appends a string to an existing string  |
  +-----------------------------------+--------+-----------------------------------------+
# COERCION RULES
  +---------------------------+-----------------------------+
  | Expression                | Operation                   |
  +---------------------------+-----------------------------+
  | String + Anything         | String Concatenation        |
  | Number + Number           | Numeric Addition            |
  | String - Number           | Numeric Subtraction         |
  | String * Number           | Numeric Multiplication      |
  | String / Number           | Numeric Division            |
  | String % Number           | Numeric Modulus             |
  +---------------------------+-----------------------------+
# IMPLICIT STRING COERCION
  -  The (+) operator behaves differently depending on the operand types.
  ? - Rule 1 --> If either operand is a STRING, JavaScript converts the other operand into a STRING and performs concatenation
  ? - Ruel 2 --> Operators like  -, *, /, %, ** do NOT perform string concatenation. Instead, JavaScript converts the string into a NUMBER and performs arithmetic.

*/
// # syntax
// 1. Concatenation (+) : string1 + string2
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// 2. Concatenation Assignment (+=) : string += anotherString
let greeting = "Hello, ";
greeting += "Vishal";
console.log(greeting);
/*
============================================================
# 1's Complement & 2's Complement (Interview Notes)
============================================================
Q. What is 1's Complement?
  - Definition: 1's Complement means flipping (inverting) every bit of a binary number.
  - Rule:
    - 0 → 1
    - 1 → 0
  Formula: 1's Complement = Flip all bits
? Example
  Decimal:5
  Binary:00000101
! 1's Complement:11111010
  Explanation:
    00000101
    ↓↓↓↓↓↓↓↓
    11111010
  - Every 0 becomes 1.
  - Every 1 becomes 0.

Q. What is 2's Complement?
  - Definition: 2's Complement = 1's Complement + 1
  OR
  - Flip every bit and then add 1.
  - Formula: 2's Complement = (~n) + 1
? Example
  Decimal:5
  Binary:00000101
  Step 1 : Take 1's Complement
  00000101
  ↓
  11111010
  - Step 2 : Add 1
    11111010
    +00000001
    ----------
    11111011
  Result: 11111011 = -5

Q. Why Do Computers Use 2's Complement?
  - If computers used only 1's Complement,there would be TWO representations of zero.
    1.Positive Zero --> 00000000
    2. Negative Zero --> 11111111
  - Having two representations of zero makes arithmetic operations more complicated.

? 2's Complement solves this problem.
  1. Positive Zero --> 00000000
    - 2's Complement of Zero 00000000
    - Only ONE representation of zero exists.
! Advantages of 2's Complement
  - Only one representation of zero.
  - Easier addition and subtraction.
  - Faster CPU implementation.
  - Easier overflow detection.
  - Used by almost every modern computer.

Q. Difference Between 1's Complement & 2's Complement
  +----------------------+-------------------------+-----------------------------+
  | Feature              | 1's Complement          | 2's Complement              |
  +----------------------+-------------------------+-----------------------------+
  | Rule                 | Flip all bits           | Flip all bits + Add 1       |
  | Formula              | ~n                      | ~n + 1                      |
  | Represents Negative  | Historically            | Yes                         |
  | Zero Representation  | +0 and -0              | Only one 0                  |
  | Used Today           | No                     | Yes                         |
  | Used by CPUs         | No                     | Yes                         |
  +----------------------+-------------------------+-----------------------------+
? Examples
  Decimal     Binary       1's Complement     2's Complement
  ----------------------------------------------------------
  5           00000101     11111010           11111011 (-5)

  6           00000110     11111001           11111010 (-6)

  10          00001010     11110101           11110110 (-10)

# JavaScript Relation
  - The Bitwise NOT (~) operator performs ONLY 1's Complement (i.e., it flips all bits).
? Example:
  ~5 --> Binary: 00000101
                    ↓
                11111010
  - JavaScript interprets the resulting bit pattern as a 32-bit signed integer using Two's Complement representation.
  Therefore, ~5 = -6
  - Formula: ~x = -(x + 1)

? Examples:
  ~0   = -1
  ~1   = -2
  ~5   = -6
  ~10  = -11
# Interview Tips
  - 1's Complement - Flip every bit.
  - 2's Complement Flip every bit + Add 1
  - Modern computers store all negative integers using 2's Complement representation.
/*
===============================================================================
# BITWISE OPERATORS
===============================================================================
Definition:
  - Bitwise operators work on the binary (bit-level) representation of numbers.
  - JavaScript converts numbers into 32-bit signed integers before performing bitwise operations.
  - Operations are performed bit-by-bit and the result is converted back to a decimal number.
# NOTE:
  - Although JavaScript numbers are stored as 64-bit floating-point values (IEEE 754), bitwise operators internally use 32-bit signed integers.
===============================================================================
# BIT REPRESENTATION
===============================================================================
? Decimal Number : 5
Binary Representation (4 Bits)
+-------------+-----+-----+-----+-----+
| Bit Position| 2³  | 2²  | 2¹  | 2⁰  |
+-------------+-----+-----+-----+-----+
| Decimal     |  8  |  4  |  2  |  1  |
| Bit Value   |  0  |  1  |  0  |  1  |
+-------------+-----+-----+-----+-----+
5 = 4 + 1
? Decimal Number : 3
+-------------+-----+-----+-----+-----+
| Bit Position| 2³  | 2²  | 2¹  | 2⁰  |
+-------------+-----+-----+-----+-----+
| Decimal     |  8  |  4  |  2  |  1  |
| Bit Value   |  0  |  0  |  1  |  1  |
+-------------+-----+-----+-----+-----+
3 = 2 + 1
===============================================================================
# BITWISE OPERATORS TABLE
===============================================================================
+--------------------------+--------+---------------------------------------+
| Operator Name            | Symbol | Purpose                               |
+--------------------------+--------+---------------------------------------+
| Bitwise AND              |   &    | 1 only if both bits are 1             |
| Bitwise OR               |   |    | 1 if at least one bit is 1            |
| Bitwise XOR              |   ^    | 1 if both bits are different          |
| Bitwise NOT              |   ~    | Inverts all bits                      |
| Left Shift               |   <<   | Shift bits left                       |
| Right Shift              |   >>   | Shift bits right (preserve sign)      |
| Zero-fill Right Shift    |  >>>   | Shift right (fill left with zeros)    |
+--------------------------+--------+---------------------------------------+


@ BITWISE AND (&)
Q. what is bitwise & (AND) operator
- Definition --> Returns 1 only when BOTH bits are 1.
Truth Table
+-----+-----+-------+
|  A  |  B  | A & B |
+-----+-----+-------+
|  0  |  0  |   0   |
|  0  |  1  |   0   |
|  1  |  0  |   0   |
|  1  |  1  |   1   |
+-----+-----+-------+
? Example 5 & 3
  Binary
    0101
  & 0011
  ---------
  0001
  Decimal 1

 @ BITWISE OR (|)
Q. what is bitwise | (OR) operator
- Definition Returns 1 if ANY one bit is 1.
Truth Table
+-----+-----+-------+
|  A  |  B  | A | B |
+-----+-----+-------+
|  0  |  0  |   0   |
|  0  |  1  |   1   |
|  1  |  0  |   1   |
|  1  |  1  |   1   |
+-----+-----+-------+
? Example
5 | 3
Binary
   0101
|  0011
---------
   0111
Decimal 7
@ BITWISE XOR (^)
Q. what is bitwise ^ (XOR) operator
- Definition Returns 1 only when bits are DIFFERENT.
Truth Table
+-----+-----+-------+
|  A  |  B  | A ^ B |
+-----+-----+-------+
|  0  |  0  |   0   |
|  0  |  1  |   1   |
|  1  |  0  |   1   |
|  1  |  1  |   0   |
+-----+-----+-------+
Example 5 ^ 3
Binary
   0101
^  0011
---------
   0110
Decimal 6

@ BITWISE NOT (~)
Q. What is bitwise not (~) operator
- Definition Flips every bit. 0 → 1 & 1 → 0
- Formula ~x = -(x + 1)
- Example ~5 --> Convert 5 to Binary (32-bit)
  00000000 00000000 00000000 00000101
- Apply ~
Before
00000000 00000000 00000000 00000101
↓
After (~)
11111111 11111111 11111111 11111010  --> हेच 1's Complement आहे.

Q. What decimal is 11111111 11111111 11111111 11111010?
- MSB (Most Significant Bit) = 1
- म्हणजे हा negative number आहे. त्याची value शोधण्यासाठी: invert bits
11111111 11111111 11111111 11111010
↓
00000000 00000000 00000000 00000101
add 1
00000000 00000000 00000000 00000101
+
00000000 00000000 00000000 00000001
------------------------------------
00000000 00000000 00000000 00000110 = 6 (original value are -ve so that value also -ve so return -ve )

@ LEFT SHIFT (<<)

Q. what is Left shift (<<) ?
  - Definition Moves bits to the LEFT.
  - Zeros are inserted from the RIGHT.
  - Formula x << n = x × 2ⁿ
 ? - Example 5 << 1
- Decimal 5 चे 32-bit binary:
  00000000 00000000 00000000 00000101
  - Apply << 1 : << 1 म्हणजे सर्व bits 1 position डावीकडे shift करणे
  before:
  00000101
  - after
  00001010 = 10
  - सर्व bits 1 जागा डावीकडे गेले.
  - उजवीकडे (right side) 0 भरला गेला
Q. for -ve digits.
-5 << 1
  - हे सर्व bits 1 position डावीकडे (left) shift करते आणि उजवीकडे 0 भरते.
  - सुरुवातीला 5 चे binary:
  00000000 00000000 00000000 00000101
  - -ve no so invert bit
  11111111 11111111 11111111 11111010
  - then add 1
  11111111 11111111 11111111 11111011  -> हेच -5 चे 32-bit binary आहे.
  Apply << 1
  before
  11111111 11111111 11111111 11111011
  aflter
  11111111 11111111 11111111 11110110
  -
  सर्व bits 1 जागा डावीकडे गेले.
  उजवीकडे 0 भरला गेला.
  डावीकडचा बाहेर गेलेला bit discard झाला

@  RIGHT SHIFT (>>)

Q. What is Right shift Bitwise operator
- defincation : Moves bits to the RIGHT.
- The sign bit is preserved.
Formula x >> n = x / 2ⁿ  (integer division)
? Example
5 >> 1
- Positive number असल्यामुळे >> आणि >>> दोन्हींचे output सारखेच येते
- Convert 5 to 32-bit Binary
00000000 00000000 00000000 00000101
- Apply >> 1 -  >> म्हणजे Signed Right Shift - सर्व bits 1 position उजवीकडे (right) shift होतात
- Positive number असल्यामुळे डावीकडे 0 भरला जातो (कारण sign bit = 0
Before
00000000 00000000 00000000 00000101
after shifting
00000000 00000000 00000000 00000010 = 2
Q. for -ve number.
-5 >> 1

Binary of +5
00000000 00000000 00000000 00000101
Invert
11111111 11111111 11111111 11111010
Add 1
11111111 11111111 11111111 11111011
Apply >> 1 - >> म्हणजे Signed Right Shift. यामध्ये sign bit (डावीकडचा पहिला bit) जपला जातो.
11111111 11111111 11111111 11111011
right shift
11111111 11111111 11111111 11111101
उजवीकडचा शेवटचा bit बाहेर पडला.
डावीकडे 0 नाही, तर 1 भरला गेला कारण number negative आहे.
# >> vs >>> (Positive Number)
- 5 >> 1    // 2
- 5 >>> 1   // 2
- दोन्हींचा output 2 येतो कारण 5 हा positive number आहे आणि त्याचा sign bit = 0 आहे
- कधी फरक पडतो? फरक फक्त negative numbers मध्ये दिसतो.
  5 >> 1     // -3
  -5 >>> 1    // 2147483645
- >> = Signed Right Shift → डावीकडे sign bit (0 किंवा 1) कॉपी होतो
- >>> = Unsigned Right Shift → डावीकडे नेहमी 0 भरला जातो. त्यामुळे negative संख्या मोठ्या positive संख्येत बदलू शकते.

| Feature                  | `>>` (Signed Right Shift)                                              | `>>>` (Unsigned Right Shift)                                   |
| ------------------------ | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| Full Name                | Signed Right Shift                                                     | Unsigned Right Shift                                           |
| Sign Bit                 | Preserves the sign bit                                                 | Does **not** preserve the sign bit                             |
| Leftmost Bit After Shift | Filled with the original sign bit (`0` for positive, `1` for negative) | Always filled with `0`                                         |
| Positive Numbers         | Works normally                                                         | Works normally                                                 |
| Negative Numbers         | Result remains negative                                                | Result becomes a large positive integer                        |
| Uses                     | When you want to preserve the sign                                     | When you want to treat the value as an unsigned 32-bit integer |
| 32-bit Conversion        | Converts to a signed 32-bit integer                                    | Converts to an unsigned 32-bit integer                         |


@  ZERO-FILL RIGHT SHIFT (>>>) (unsigned right shift operator)

Q. what is unsigned right shift operator
Definition Moves bits to the RIGHT. Leftmost bits are always filled with ZERO.
- Unlike >> It does NOT preserve the sign bit.
- Negative numbers become large positive integers.Q.
- Example 5 >>> 1
- Output 2
- Convert 5 to 32-bit Binary
00000000 00000000 00000000 00000101
- Apply >>> 1 >>> म्हणजे Unsigned Right Shift - सर्व bits 1 position उजवीकडे (right) shift होतात आणि डावीकडील रिकाम्या जागेत 0 भरला जातो.
Before
00000000 00000000 00000000 00000101
after shift right
00000000 00000000 00000000 00000010
Convert Back to Decimal
00000000 00000000 00000000 00000010 = 2
Q, 1 for -ve number
-5 >>> 1
Output : 2147483645
- explanation :
- JavaScript bitwise operators 32-bit signed integers वर काम करतात.
5 = 00000000 00000000 00000000 00000101
    - Negative number तयार करण्यासाठी Two's Complement वापरतो.
Step B (Invert all bits)
    11111111 11111111 11111111 11111010
Step C (Add 1)
    11111111 11111111 11111111 11111011
then this is -5
11111111 11111111 11111111 11111011
then Apply >>> 1  (>>> म्हणजे Unsigned Right Shift.) : हे सर्व bits 1 position right ला shift करते
Before
11111111 11111111 11111111 11111011
after
01111111 11111111 11111111 11111101
Left side ला 0 भरला जातो.
Sign bit (1) जपला जात नाही.
त्यामुळे negative number positive बनतो.
finala output is 01111111 11111111 11111111 11111101
हे hexadecimal मध्ये लिहू:
    01111111 = 7F
    11111111 = FF
    11111111 = FF
    11111101 = FD
then output is  - 0x7FFFFFFD then Decimal madhe 2147483645

# NOTE
One-Line Rule to Remember
1. << (Left Shift): Shift bits left, fill the right with 0, discard the leftmost bit.
2. >> (Signed Right Shift): Shift bits right, fill the left with the sign bit (0 for positive, 1 for negative`), discard the rightmost bit.
3. >>> (Unsigned Right Shift): Shift bits right, always fill the left with 0, discard the rightmost bit. Negative numbers become large positive integers.

# comparison
| Operator | Example    | Before     | After      | Filled With           | Result       |
| -------- | ---------- | ---------- | ---------- | --------------------- | ------------ |
| `<<`     | `5 << 1`   | `00000101` | `00001010` | Right → `0`           | `10`         |
| `>>`     | `5 >> 1`   | `00000101` | `00000010` | Left → `0` (sign bit) | `2`          |
| `>>`     | `-5 >> 1`  | `11111011` | `11111101` | Left → `1` (sign bit) | `-3`         |
| `>>>`    | `5 >>> 1`  | `00000101` | `00000010` | Left → `0`            | `2`          |
| `>>>`    | `-5 >>> 1` | `11111011` | `01111101` | Left → `0`            | `2147483645` |
/*
===============================================================================
#  COMPARISON OPERATORS
===============================================================================
  Definition:
  - Comparison operators compare two operands and return a Boolean value (true or false).
  - Operands can be numbers, strings, booleans, objects, or other values.
  - Strings are compared lexicographically (dictionary order) based on their
  Unicode values.
- Comparison operators are commonly used with:
  - if...else
  - Loops
  -  Ternary Operator
  -  Conditional Statements

+--------------------------+--------+----------------------------------------------+
| Operator Name            | Symbol | Purpose                                      |
+--------------------------+--------+----------------------------------------------+
| Loose Equal              | ==     | Compares values after type coercion          |
| Strict Equal             | ===    | Compares value and data type                 |
| Loose Not Equal          | !=     | Checks inequality after type coercion        |
| Strict Not Equal         | !==    | Checks value and type without coercion       |
| Greater Than             | >      | Left value is greater than right             |
| Less Than                | <      | Left value is less than right                |
| Greater Than or Equal    | >=     | Left value is greater than or equal          |
| Less Than or Equal       | <=     | Left value is less than or equal             |
+--------------------------+--------+----------------------------------------------+
*/
let a = 10;
let b = 20;
console.log("Loose Equal (==):", a == "10");
console.log("Strict Equal (===):", a === "10");
console.log("Loose Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== "10");
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);
console.log("Greater Than or Equal (>=):", a >= b);
console.log("Less Than or Equal (<=):", a <= b);

// # STRING COMPARISON (UNICODE) - Strings are compared character by character using their Unicode values.
console.log("A" < "a");
console.log("cat" > "car");
// JavaScript compares the strings character by character from left to right.
// | Position | "cat" | "car" | Result                             |
// | -------- | ----- | ----- | ---------------------------------- |
// | 1        | c     | c     | Same                               |
// | 2        | a     | a     | Same                               |
// | 3        | t     | r     | Different → Compare Unicode values |

console.log(true == 1); //true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(5 == "5");
console.log(5 === "5"); false
console.log(false == 0); // true  Here happen type coercion false converted into the number like 0
console.log(false === 0); // false it is strictecly type chacked so false is boolen and 0 is number so return false
console.log(null == undefined); // true
console.log(null === undefined); // false
// console.log("10" > 5);  true  "10" -> 10 > 5
console.log("apple" > "Apple"); // true - Lowercase letters have higher Unicode values than uppercase letters.


// # == vs === (MOST ASKED INTERVIEW QUESTION)
// +-------------------------+------------------------+--------------------------+
// | Feature                 | ==                     | ===                      |
// +-------------------------+------------------------+--------------------------+
// | Type Conversion         | Yes                    | No                       |
// | Checks Value            | Yes                    | Yes                      |
// | Checks Data Type        | No                     | Yes                      |
// | Recommended             | No                     | Yes                      |
// | Interview Preference    | Avoid                  | Preferred                |
// +-------------------------+------------------------+--------------------------+

/*
# LOGICAL OPERATORS
Definition:
- Logical operators are used to perform logical (Boolean) operations.
- They usually work with boolean values (true or false).
- However, in JavaScript they can also return non-boolean values because of
  Short-Circuit Evaluation.
- Logical Operator
  1. Logical AND (&&)
  2. Logical OR (||)
  3. Logical NOT (!)
# LOGICAL OPERATORS TABLE
+----------------------+--------+-------------------------------------------+
| Operator Name        | Symbol | Purpose                                   |
+----------------------+--------+-------------------------------------------+
| Logical AND          | &&     | Returns first falsy value or last truthy  |
| Logical OR           | ||     | Returns first truthy value or last falsy  |
| Logical NOT          | !      | Reverses Boolean value                    |
+----------------------+--------+-------------------------------------------+

# LOGICAL AND (&&)
Definition:
  - Logical AND is also called Logical Conjunction.
  - Returns true only when ALL operands are truthy.
  - If any operand is falsy, it immediately stops execution and returns
    that falsy value.
  Truth Table
  +---------+---------+----------+
  |    A    |    B    | A && B   |
  +---------+---------+----------+
  | false   | false   | false    |
  | false   | true    | false    |
  | true    | false   | false    |
  | true    | true    | true     |
  +---------+---------+----------+

# SHORT-CIRCUIT EVALUATION (&&)
Expression
a && b
           a && b
              │
              ▼
      Is "a" Truthy?
        /          \
      No            Yes
      │              │
      ▼              ▼
 Return "a"     Evaluate "b"
 (Stop Here)    Return "b"

! Rule
- If first operand is falsy, JavaScript never evaluates the second operand.

# LOGICAL OR (||)
Definition:
- Logical OR is also called Logical Disjunction.
- Returns true if at least one operand is truthy.
- If the first operand is truthy, JavaScript immediately returns it.
Truth Table
+---------+---------+----------+
|    A    |    B    | A || B   |
+---------+---------+----------+
| false   | false   | false    |
| false   | true    | true     |
| true    | false   | true     |
| true    | true    | true     |
+---------+---------+----------+
# SHORT-CIRCUIT EVALUATION (||)
Expression
a || b
           a || b
              │
              ▼
      Is "a" Truthy?
        /          \
      Yes           No
      │              │
      ▼              ▼
 Return "a"     Evaluate "b"
 (Stop Here)    Return "b"

! Rule
- If first operand is truthy, JavaScript never evaluates the second operand.
----------------------------

# LOGICAL NOT (!)
Definition:
- Logical NOT is also called Negation Operator.
- It converts truthy values into false.
- It converts falsy values into true.
Truth Table
+---------+---------+
|    A    |   !A    |
+---------+---------+
| true    | false   |
| false   | true    |
+---------+---------+
- It Negation the value true to false and false to ture

*/

// # DOUBLE NOT (!!) : Double NOT converts any value into its Boolean equivalent.
console.log(!!10);
console.log(!!0);
console.log(!!"Hello");
console.log(!!"");

// # LOGICAL OPERATORS WITH STRINGS : JavaScript returns the actual operand, NOT always true or false.
console.log("apple" && "banana");
console.log("" && "banana");
console.log("apple" || "banana");
console.log("" || "banana");
console.log(10 && 20);
console.log(10 || 20);
console.log(0 && 20);
console.log(0 || 20);
console.log(null || "Default"); // default
console.log(undefined || "Guest"); // Guest
// && Logical operator return first falsey vlaue
console.log(null && "Hello");
console.log(10 && 20);
console.log(10 || 20);
// && operator return first false value
console.log(false && "JavaScript");

// The || (logical OR) operator returns:The first truthy value it finds, or The last value if all operands are falsy.
// return javascript
console.log(false || "JavaScript");

// The || (logical OR) operator returns the first truthy value. "" (empty string) is falsy. , "Guest" is a truthy value (non-empty string).
console.log("" || "Guest"); // Guest
// The && (logical AND) operator returns: The first falsy value it encounters, or The last value if all operands are truthy.
// Here "Hello" is a truthy value (non-empty string). also 100 is also truthy (non-zero number).
// Since both are truthy, the operator returns the last operand, which is 100
console.log("Hello" && 100);

// it return true
// jsvascript is nonempty string is truthy value so first !value make false and 2nd ! agian false to convert into true
console.log(!!"JavaScript");

// it return false because array are truthy value but ! (not equal) it convert as false
console.log(![]);

/*

# INCREMENT & DECREMENT OPERATORS
Definition:
- Increment (++) operator increases the value of a variable by 1.
- Decrement (--) operator decreases the value of a variable by 1.
- These operators work only with variables (operands), not with constants.
- js provide 2 type of increment (++) and decrement (--)
    1. postFix increment and decrement operator (x ++ , x--)
    2. preFix increment and decrement operator (++ x, --x)

+----------------------+----------------------+-------------------------------------------+
| Operator Type        | Syntax               | Description                               |
+----------------------+----------------------+-------------------------------------------+
| Post-Increment       | x++                  | Return value first, then increment        |
| Pre-Increment        | ++x                  | Increment first, then return value        |
| Post-Decrement       | x--                  | Return value first, then decrement        |
| Pre-Decrement        | --x                  | Decrement first, then return value        |
+----------------------+----------------------+-------------------------------------------+

1. Increment :  operator means add once to its operand and run the value before or after the increment depending upon where the operator place like post or pre
2. The decrement(--):  operator decrement (subtract one from  ) its operand and return the value before or after the decrement so its depends on where the operator is placed

+----------------------+---------------------------+---------------------------+
| Feature              | Prefix (++x / --x)        | Postfix (x++ / x--)       |
+----------------------+---------------------------+---------------------------+
| Memory Updated       | First                     | Later                     |
| Returned Value       | Updated Value             | Original Value            |
| Execution Order      | Update → Return           | Return → Update           |
| Interview Priority   | Very High                 | Very High                 |
+----------------------+---------------------------+---------------------------+
*/
/* -----------

increment operator (++) - increment operator adds 1 to its operand

# 1. post-increment (x ++) - increment operator add 1 to its operand after returning value.
    - definition - increments the variable  after returning the current value.
    - usage - The expression use the original value then increment the value.
    - Def - post increment operator means the expression value evaluated first using the original value of the variable and then the variable increment value ( increased.)
    - Returns the current value first. Then increments the variable in memory.
*/
// let num = 10;
// let result = num++; //
// console.log(result); // 10 use original value
// console.log(num); // increment after

// let val = 50;
// let res = val++ + 5;
// console.log(res); // 55 return original value
// console.log(val); // 51 increment after

/* --------------

# 2. pre-increment (++x) - increment operator adds 1 to its operand befire returning value.
    - increments the variable  before returning the value
    - usage : the expression used the incremented value.
    - pre-increment operator men's variable value is incremented first and then the expression is evaluated using the new value.
    - Increments the value first. Returns the updated value.  */

// let num1 = 30;
// let res1 = ++num1;
// console.log(res1);
// console.log(num1);

let val1 = 50;
let res11 = ++val + 5;
console.log(res11); // 56 -> (51 + 5)
console.log(val1); // 51

/* -------------

Decrement Operator (--) The decrement operator subtracts 1 from its operand  before the returning value.

# 1: pre-decrement (-- x)
    - definition : Decrement the variable before returning the value
    - uses : The expression used the decremented value
    - preDecrement  operator means the variable value is decremented first and then the expression is evaluated using the new value of the variable.
    - Decrements the value first.  Returns the updated value.   */

let x = 3;
let y = --x;
console.log(y); // 2 -> decremented first
console.log(x); // 2

let va = 50;
let re = --val + 5;
console.log(re); // 54 -> (49 + 5)
console.log(va); // 49

/* --------------

# 2: post - decremented (x --) - The Decrement Operator substract 1 from its operand after the returning value
    - Defination : Decrements the variable after returning the current value
    - The expression uses the original value then the decrement the variable
    - Post Decrement operator expression is evaluated first using the original value of the variable and then the value of the variable is Decrement (Decrement)
    - Returns the current value first. Then decrements the variable in memory. */
let x1 = 3;
let y1 = x1--;
console.log(y1); // 3 -> uses original value
console.log(x1); // 2 -> decremented after

let val2 = 50;
let result2 = val2-- + 5;
console.log(result2); // 55 -> (50 + 5)
console.log(val2); // 49

