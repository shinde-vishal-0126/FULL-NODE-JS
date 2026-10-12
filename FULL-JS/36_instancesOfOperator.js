/*
# instances of operator.

# what is instances of operator 
1. instances of used to check if the given object is an instances of a perticular class or constructor function 
2. it return true if the its instances of perticular class otherwise it return false.
3. instanceOf operator return true if prototype of the constructor found in prototype chain of the object otherwise return false 
i.e check if the constructor prototype appear in prototype chain or not 

*/

function person(name){
    this.name

}
let per = new person('vishal');
console.log(per);
console.log(per instanceof person); // return true become per appear in person prototype chain and person object in object prototype

// defined call using ES6 Class
// Here create in example defined the person class and use the instancesOf operator to check if an object is an instances of the class
class Person1{
    constructor(name){
        this.name = name
    }
}
class employ extends Person1{
    constructor(name, title){
        super(name)
        this.title = title
    }
}
let newEmp = new employ('prada' , 'abc');
 console.log('newEmp', newEmp)
 console.log(newEmp instanceof employee)
 console.log(newEmp instanceof Person1)
 console.log(newEmp instanceof Object);
 let newPer = new Person1('vishal')
 console.log(newPer instanceof Object);
 console.log(newPer instanceof Person1);
 console.log(newPer instanceof employee); 

//  newEmp employee { name: 'prasad', title: 'abc' }
// true                     // newEmp is instance of employee
// true                     // newEmp is also instance of Person1 (parent class)
// true                     // All objects in JS are instances of Object

// true                     // newPer is also an object
// true                     // newPer is instance of Person1
// false                    // newPer is NOT instance of employee
