/*
# once polyfill
1. it ensure that the function are executed only once
2. once function limit the function execution i.e function are executed only once 

*/

// once polyfill 

function once(fun, context) {
    let run;
    return function(...args) {
        if (fun) {
            run = fun.apply(context || this, args);
            fun = null; // Ensure the function is not called again
        }
        return run; // Return the result of the first call
    };
}

const add = (num1) =>{
console.log(num1 * num1)
} 
const called = once(add);
called(10);
called(20)
called(40)
