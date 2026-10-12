function fun1(name) {
  setTimeout(() => {
    return name;
  }, 0);
}
let call = fun1("vishal");
console.log(call); // here return undefined

// # to fix this issue we have to used callback

function fun2(userName, cb) {
  setTimeout(() => {
    cb(userName);
  }, 0);
}

function fun3(lName, cb) {
  setTimeout(() => {
    cb(lName);
  }, 0);
}

function fun4(age, cb) {
  setTimeout(() => {
    cb(age);
  }, 1000);
}

// # if you have function need to call
const res = fun2("vishal", function (user) {
  console.log(user);
  fun3("shinde", function (lName) {
    console.log(lName);
    fun4(56, function (age) {
      console.log(age);
    });
  });
});
res;

// # if you notice someThing there is nesting of callbacks function have a your code little bit messy if you have such more callback function nested inside that  so this is weird looking structure its forming pyramid like structured it is also some time called pyramid of Doom and this concept is know as callback hell.
// it called callback hell because it having so many nested callback one inside the another that is very hard to read and very hard to understand our code .what is solution for this problem 


function job(state){
    return new Promise(function(resolve,reject){
        if(true){
            resolve ('success')
        }else{
            reject('error')
        }
    })
}
let promise6  = job(true);
promise6.then(function(data){
    console.log(data);
    return job(false)
}).catch(function(error){
    console.log(error)
    return 'error caught'  // so here return non empty string which is not false value so it return true and goes to the next resolve promise like goes to next then block 
}).then(function(){
    console.log(data)
    return job(true)
}).catch(function(error){
console.log(error);

})


console.log('start')
const promise12 = new Promise((resolve,reject)=>{
    console.log(1);
    console.log(2)
})
promise12.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
console.log('end');


// output start, 1, 2, end

// javas script first executed synchronous code then asynchronous if you defined promise the it is synchronous code once the promise is resolve or rejected then start the asynchronous code 
// i.e if the promise is initialize once all the synchronous code are executed then asynchronous cod execute above example are based on that (i.e if the promise is resolved and reject then an only then the asynchronous function apply )

function job1(state){
    return new Promise(function (resolved, reject){
        if(state){
            resolved('success')
        }else{
            reject('error')
        }
    })
}

let promise = job1(true);
promise.then(function(data){
    console.log(data);  // success 
    return job1(true)
}).then(function(data){
    if(data !== 'victory'){
        throw 'defect' // here check if the data is victory so data is success not a victory so it throw an error but  the job promise return true it ignore and throw the error  and goes to the next catch block
    }
    return job1(true)

}).then(function(data){
    console.log(data);
    
}).catch(function(error){
    console.log(error)  // defect
    return job1(false)
}).then(function(data){
    console.log(data)
    return job1(true)
}).catch(function(error){
    console.log(error) // error 
    return 'error caught'
}).then(function(data){
    console.log(data)  // error caught
    
// By itself, this is not a rejected Promise.
// It is simply returning an Error object, not throwing it or rejecting a promise
    return new Error ('text') 
    // again this is not rejected promise is is again resolved promise 
}).then(function(data){
    console.log('data....', data)
    console.log('success', data.message) // //  success text
}).catch(function (data){
    console.log('data')
    console.log('error', data.message)    
})


