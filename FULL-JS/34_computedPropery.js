/*
# computed property :

# what is computed property name ?

1. a computed property in js refer to the ability to dynamically defined object property name using expression.
2. instead of hardcoding property name you can compute based on the variable or expression
3. this is perticular useFul when the property name to be determine at runtime.
4. es6 allow you to use an expression [] bracket
*/

// # computed property [] bracket natation used
let propsName = 'c';
const rank = {
    a:1,
    b:2,
    [propsName] : 3 // this is computed property of the rank object
    // property name derived from the value of the propName
}
console.log(rank, rank.c ) // above example [propName] is computed property of the rank object  the properly name derived from the value of the propName variable


// # like object literal
let name = 'fullName'
class person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    get[name](){
        return `${this.firstName} ${this.lastName}`
    }
}
let person = new Person('vishal', 'shinde')
console.log(person.fullName); // / computed property allow you to use the value of expression as the property name of the object


const prefix = 'user_';
const id = 123;
const user = {
  [`${prefix}${id}`]: 'John Doe'
};
console.log(user.user_123); // John Doe
