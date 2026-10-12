/*
@ string.raw()
- syntax :  String.raw`templateString`
        or String.raw(callstate, ..substitute);

# what is String.raw();
    - string.raw() static method of string object
    - commanly used as a TAG function with template literals.
    - return raw string representation of a template literals .
    - raw means escape sequencs such as \n,\t,\\  are not interpreted in the return string. insted thy are treated as normal characters.
    - it is used as String.raw()  incorrect : 'Hello'.raw();
    - escape sequences are presented as raw text. \n is returned as two characters \ and n insted of creating a new line. also \t return as two characters \ and t insted of creating a tab.
    - it return new string.
    - it is ispecially useful when working with
        - file path
        - regular expression
        - Blackslashes
        - Escap sequences.
*/
const normalString = `Hello\nWorld`;
// is interpreted as a newline character
console.log(normalString)

// ex. String.raw();
const rawString = String.raw`Hello\nword`;
// not interapted as newline character
console.log(rawString)

// Note
//  - String.raw() preserve the raw template text but template expression are still evaluate i.e it replace with name
