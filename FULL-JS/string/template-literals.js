/*
@ Template literals

defination :
    - Template literals are a modern way to creaete string in javascript
    - They are written using Backticls (``) insted of
        - single quotes('');
        - double quotes("");

    - Template literals supports
        - string interpolation  : ${} interpolation only works inside BACKTICKS (`).
        - embedded expression
        - multi line string
        - tagged templates.

    - syntax :
        `text`
        `{expression}`

    - Template literals allow us to embed variables and expression directly inside a string using ${expression}
*/
// ex 1
let name = 'vishal';
let firstName = 'shinde';
console.log(`my name is ${name}  ${firstName}`)

// embedded expression and also perform mathematical operation
console.log(`sum of ${10 + 20}`)

// function call inside the template literals
function dispalyName(name) {
    console.log(name);
}
console.log(`${dispalyName('vishal')}`)

// # Template literal allow multi line string without using \n
let result = `vishal
    shinde
    at post
    wadgaon sahani,
    tel junnar, dist pune

`
console.log(result)

// # expression is evaluated.
// Anything inside ${} are evaluated as js
let age = 23;
console.log(`next Year age is ${age + 1}`)

// Also used Terneary operator (i.e used conditional expression)
let isLoggned = true;
console.log(`user is ${isLoggned ? 'user login in ' : 'log out'} `)

// # Object propery access.
let user = {
    name: 'vishal',
    age: 25
}
console.log(`${user.name} and ${user.age}`)

// # Array access
const language = ['java', 'js', 'sql'];
console.log(`${language[0]}`)

// # Escaping backticks
// if you want to use backtick inside a template literals use backslash.
const text = `This is a \'vishal shinde\'`
console.log(text)

// # Tag template literals
// A template literals can also be passed to a function this is called as Tagged template literals
function tab(string, ...values) {
    console.log(string);
    console.log(values)
}
const username = 'vishal';
const usrAge = 25;
tab`my name is ${username} and my age is ${usrAge}`;
/*
* summary
    - Backtick (``) + ${expression};
    - Template literals ==> string + variables + expressions + multi-line support
    - Templete literals use backtick ``
    - ${expression} is used use for string interpolation.
    - expression inside ${} are evaluated.
    - support variables
    - support mathematical expression
    - support function calls
    - support object properties
    - support array access.
    - support multi-line string


*/
