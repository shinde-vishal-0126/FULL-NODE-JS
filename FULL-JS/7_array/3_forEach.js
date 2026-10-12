/*
forEach() : 
    - forEach() iterative array method. That executed callback function once for every element in the array.
    - it does not create new array. 
    - it always return undefined. 
    - it is mainly used when you want perform an action(side effect) on each array element. 
    - Def 
        - The forEach() method execute a provided callback function once for each element of an array.
        - it mainly used for perform side effect such as logging, updating variable, making api call or modifying existing data. 
    - forEach() method itself does not modify the original array.
    - It simply executes a callback function for each element. The original array changes only if you explicitly modify it inside the callback .
    - forEach() methods are not chainable.  
    - forEach() method does not return a new array it may or may not modify the array it totally depends upon the callback function.
    - Syntax
        -  array.forEach(callback_function(currentValue, index, array)=> thisArg);  
            - callback: a function that will be called once for each element in array
            - currentValue : the current element being processed in the array.
            - index :the index of the current element being processed.
            - array : The array on which the foreach method called
            - this value:(optional): a value to use as this when executing the callback function.
    - forEach modifies original array : forEach can modify the original array if you explicitly update the array inside the callback. Otherwise it only iterates over the elements.
    - ForEach does not transform arrays .
    - Undefined and null are processed.
    - Empty element are skipped  (The empty slot (also called a hole in a sparse array) is skipped. )
    - return inside forEach : nothing happen because the return value are ignored. 
*/

let arr = [1,2,3,null, undefined,  , ];
//1. iterative method does not transforam an array (it may or may not be modified array)
arr.forEach((ele, index, arr)=>{
    console.log(ele)
})


// 2. forEach method always return undefined
let result = arr.forEach((ele, index, arr)=>{
    console.log(ele + " and index is "+ index)
}) 
console.log(result) // forEach metod always return undefined

// 3 forEach method igonre the return value it always return the undefined 
let res = arr.forEach((ele, index, arr)=>{
    return 'Hello'
})
console.log(res)


// 4 forEach() method skip the empty slot((The empty slot (also called a hole in a sparse array) is skipped. )) but processed the null & undefined. 
arr.forEach((ele)=>{
    console.log(ele) // skip the empty slot 
})

//Q.Does forEach() modify the origioanl array oR Does create new array 
// No it Self (ForEach never modified the array) : Origioanl array remain unchanges.
// also Not create New array  
const numbers = [1,2,3];
numbers.forEach((ele)=>{
    console.log(ele)
})

// # Explicit mutation : (if you modify the array then it changes)
const num = [1,2,3,4,5];
num.forEach((ele,index, array)=>{
    array[index] = ele * 2
})
// it wasn't forEach() that modified the array.
console.log(num)


/*
Q.Why forEach method are not chainable?

    - Because it always return undefined, so there is no array on which to call another method. 
    - Ans: forEach() method are not chainalbe becase it always return undefined (i.e it does not return any value or array )
    - forEach() metod are not chainable because When you iterate over and array by using forEach method whith given callback function on each and every element it does not return anything insted of that it modified the origiaonl array 
    num.forEach((ele, index, array)=>{
    console.log(ele)
    })
*/
// .map((ele)=>{
//     console.log(ele)
// })


// ex. 
let score = [85,92,78,88,95];
let totalscore = 0
score.forEach((ele,index,arr)=>{
    totalscore = totalscore + ele
})
console.log(totalscore)

// ex. with asynchronous function 
const rating = [5,4,5];
let sum = 0;
// so noramal function wait for operation 
const sumFUnction = async(a,b) => a + b;
console.log(await sumFUnction(10,20))
// but forEach() are not wait for asynchronous operation 
rating.forEach(async (ele,index,arr)=>{
    sum = await sumFUnction(10,29)
})
console.log(sum)
// Becaseu it return zero froEach() does not wait for asynchronous callbacks 


// ex. Can we break forEach() : we can not used break in forEach() method
// num.forEach((num)=>{
//     if(num === 4){
//         break;
//     }
// });


// ex. also continue can not used with forEach()
num.forEach((num)=>{
   if(num === 4){
    // continue;
    // insted that used 
    return 
   }
})


/*
Q why should you use forEach() ?
    - print value 
    - Update an external variable 
    - updated the dom 
    - send api request 
    - save data in database 
    - perform logging 
    - Trigger event.


Q When should not used forEach()
    - cerate new Transform an array 
    - Filter element 
    - compute single result 
    - find and element 

Q. forEach() vs Map()
    - forEach()
        - Purose is perform an action 
        - always return undefined 
        - does not create new array
        - does not mutation by default (explicit mutation based on the callback function)
        - not not wait for asynchronous function
        - Best use case : perform side effect, logging, Dom update.

    - map 
        - Transform data
        - always return new array 
        - create new array 
        - Does not mutating the array 
        - Best use case : Creating transformed arrays.

Q. Does forEach() modifiy the origional array ?
    - No, forEach() itself does not modified origional array. The array changes only if you explicitly inside the callback

Q. Why does forEach() return undefined ?
    - it is defined for perform action(side effect) not to produce a transformed array or another return value.

Q. Can you use break or continue inside forEach()
    - No , break, and continue are not allowed you can use return to skip the rest of callback for the current element but you can not stop entire loop.

Q. Does forEach() wait for async/await ?
    - No. It does not wait for asynchronous callbacks. If you need sequential asynchronous processing, use a for...of loop with await.

*/