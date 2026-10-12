/*
# propery access
- syntax : string[index];

@ what is propery access ?
    - property access using bracket notation [] is used to access a character at a specified index in a string.
    - string indexing start from 0.
    - index start from 0 ;
    - ex    0 1 2 3 4
            H e l l o

    - it return the character at the specified index.
    - Bracket notation does not support negative indexing.
    - if the index out of range it return undefined.
    - it is different from the charAt() which return an empty string for an invalid index.
    - string are immutable.
    - you can read character using bracket notation but you can not modity individual character.
*/
let str = 'Hello word'
// access first character
console.log(str[0])

// access last character
console.log(str[str.length - 1]);

// indexing out of range return undefined
console.log(str[10])

// negative index are not support also return undefined.
console.log(str[-9]);

// using variable as index
let digit = 2
console.log(str[digit]);

// loop through the string
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

// string are immutable You can not modify an individaul character of a string
console.log(str[0] = 10);
console.log(str)
// if you want to change then used
console.log('10' + str.slice(1))

// character access with charAt() : and property access both are used to access the characters. but they have behave differentely
console.log(str.charAt(0));
// but if the index if out of bound then charAt() return '' string
console.log(str.charAt(100))

// * differences charAt() and proepry Access
//  if the propery access having a invalid index then it return undefined
// and in charAt() having invalid index it return emtpy string

// * proepry access vs at()
// propery access used to access the character of specified index but access property are not support to the -ve index.
// at() also used to access the character of the specified index but at() method support the -ve index


// proepry access with Numeric string
// javascript converts the numeric proepry key appropriately.
console.log(str['1']);
