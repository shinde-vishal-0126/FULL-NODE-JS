/*
# class 
1. class is blue print for creating object 
2. class encapsulation data and function that manipulate data 
3. javascript class are synthetic sugar over the prototypal inheritances.
4. in ES6 class is special function 
5. prior to es6 javascript had no concept class to mimic a class you often used the constructor and prototype pattern 

# how to defined class constructor phototype pattern 
1. this person is constructor function that contain property as name 
*/
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  //  getName() function assign to prototype so that it can show the instances of the person type
  return this.name;
};
let per = new Person("vishal shinde");
console.log(per);

console.log(per.getName());

// # es6 class declaration
class Person1 {
  constructor(name) {
    this.name = name;
  }
  getname() {
    return this.name;
  }
}

let per1 = new Person1("vishu");
console.log(per1);
const name = per.getName();
console.log(name);

/*

 # javascript class expression similar to function 
1. classes have expression from a class expression provide with a alternative way to defined a new class
2. class express do not require an identifier after the class keyword and you can used class expression in variable declaration in variable
declaration and pass into a function as an argument 
 */

// class expression start with the keyword class followed by the class identification 
// left side of expression is person variable assigned to a class expression

let user = class{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    display(){
        return {
            name: this.name,
            age: this.age
        }
    }
}
let per4 = new user ('vishal shinde', 45)
console.log(per4);
console.log(per4.display());

