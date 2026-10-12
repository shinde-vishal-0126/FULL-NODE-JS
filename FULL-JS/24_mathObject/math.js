/*
# math Object
 1. Math object in javascript used to perform mathematical task on numbers (Math namespace object contain static properties and method for mathematical constant and function)
2.  If you want to use any Math property, you have to use Math class.
1. Math.pi (constant value)
*/
console.log(Math.PI);

// # 2 .Math.round()
//  Return the value of x rounded to its nearest integer.
//  In round method after point if value less then 5 then its print previous value if value is Greater the 5 or equal the print next rounded integer value
let num = 10.5;
let num1 = 11.4;
console.log(Math.round(num)); // 11
console.log(Math.round(num1)); // 11
console.log("round value", Math.round(-4.6)); // -5
console.log("round value", Math.round(-4.2)); // -4

// # 3. Math.pow()
// return the value of x to the power y
console.log(Math.pow(2, 3));
// same as
console.log(2 ** 3);

// # 4 Math.sqrt();
// return the square root of the given value
console.log(Math.sqrt(81));

//#  5. Math.abs() (return absolute value of the number)
console.log(Math.abs(-55));
console.log(Math.abs(-90.89));
console.log(Math.abs(10));
// output
// Math.abs(-55) → 55
// Math.abs(-90.89) → 90.89
// Math.abs(10) → 10
// Math.abs() only changes negative to positive and the value remains the same if the value having 2 decimal or may be having negative value it converts into positive value.

// ex. you perform subtraction and its result returns a negative value, you have to use Math.abs() method to return the absolute method in positive format
console.log(Math.abs(4 - 6)); // 2

//# 6. Math.ceil():  used to round a number upwards to the nearest integer
// Math.ceil(x) return the value of x rounded up to its nearest integer
// If you use Math.ceil () method it returns the nearest value if after .
// you have there is only a "single value after the decimal" it increased by one.1
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.1)); // 5

// # In ceil method if you have -ve number it return number before decimal as it is
console.log(Math.ceil(-4.1)); //-4
console.log(Math.ceil(-4.9)); // -4

// # 7. Math.floor()
//  Math.floor() method return the value of x rounded downward to its nearest integer
// Whatever you have to write after decimal it returns only rounded give  value in integer.
console.log(Math.floor(4.5)); // 4
console.log(Math.floor(4.1)); // 4

// If you give -ve integer value it return increment value as it is before decimal
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.9)); // -5

// # 8 . Math.min():
//  Math.min() can be used to find the lowest value in a list of arguments.
console.log(Math.min(0, 1, 2, 3, 4, 5, 7));

// # 9.Math. max()
// math.max () can be used to find the highest value in a list of arguments.
console.log(Math.max(0, 1, 2, 3, 4, 5, 7));

// # Math.random() →
// The Math.random() function in JavaScript generates a pseudorandom floating-point number between 0 (inclusive) and 1 (exclusive).
// This means the generated number will always be greater than or equal to 0 and less than 1.
console.log(Math.random());

let data = Math.random() * 10;
console.log(data);
console.log(Math.floor(data));
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));

//# Math.trunc()
//  The trunc() method return the integer part of a number by removing any fractional or decimal part
//  If a number is positive it returns a positive number also if the number is negative it returns a negative number.

console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(4.1)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4
console.log(Math.trunc(-4.1)); // Output: -4

// Comparison with Other Methods:
// Math.floor(): Rounds down to the nearest integer.
// Math.ceil(): Rounds up to the nearest integer.
// Math.trunc(): Just drops the decimal part without rounding.

//# If the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// Otherwise Math.trunc() is equivalent to Math.ceil();
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.floor(4.9)); // Output: 4 // in floor if you give - ve value it incremented by one

console.log(Math.trunc(-4.9)); // Output: -4
console.log(Math.ceil(-4.0)); // Output: -4

// # floor mahdi - ve value increment by one
// # ceil mahdi -ve value return same as its value

// # Math.log(x) return the natural logarithm of x
let lgoResult = Math.log(1);
let lgoresu = Math.log(2);
