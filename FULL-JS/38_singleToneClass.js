/*
# singleTone class 
1. a singleTone class is design pattern in js that ensure class has only one instances and provide global point to access that point instances.
2. That limit the instantiation of class to singleTone 
3. i.e only one instance create through the code or system 
4. class expression are used to create by calling the class constructor immediately that used new operator with the class expression and include the parenthesis at the end of class declaration 

# characteristics of singleton class
1. single instances :  Ensures only one instance of the class exists.
2. Global access : Provides a way to access this instance globally
3. controlled Instantiation : The instance is created when first accessed (lazy initialization) or immediately upon class definition (eager initialization).

*/

// new operator with class expression and include the parenthesis at the end.
// class expression used to create singleton object

let app = new (class {
  constructor(name) {
    this.name = name;

    // # how to work
    // class has constructor that accept argument it also method like start
    // The class expression evaluate a class therefor you can call it constructor immediately by placing parenthesis after the expression
    // the expression return the instances of class by calling class expression which is assign to app
  }
  start() {
    console.log(`starting....${this.name}`);
  }
})("vishal");




// only one instance created through out the system
// class expression created single tone by calling the class constructor immediately


const singleTone = (function(){
    let instance;
    function createInstances (){
        const object = new Object ('hi how are you ');
        return object 
    }
    return {
        getInstances : function(){
            if(!instance){
                instance = createInstances()
            }
            return instance
        }
    }
})
let obj = singleTone.getInstances();
const obj2 = singleTone.getInstances();
console.log(obj);
console.log(obj2);
console.log(obj == obj2);


