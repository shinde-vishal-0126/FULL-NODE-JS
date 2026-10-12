/*
# reduce polyfill 

array.reduce(callback(accumulator, currentValue, index, array)=>{})
    1.accumulator : are accumulate the value of previous computation or iteration.
# reduce method used reduce an array to a single value by applying a callback function on each element and accumulate the result for each iterator and return a single value as output.

# reduce method having 2 parameter like 
1. callback function 
2. initial value

*/

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : this[0] 

    let startIndex = initialValue !== undefined ? 0 : 1

     // here if you not give initial value to the accumulator then it give first element value as default value and current element are 2 element
    // If accumulator is defined  the callback function is called with the current accumulator, the current element this[i], the index i, and the array itself this.
    for(let i = startIndex ; i< this.length ; i++){
        accumulator = callback(accumulator, this[i], i, this)
         //If accumulator is undefined (which happens when no initialValue is provided), the first element of the array (this[i]) is set as the accumulator, and no callback is invoked for the first element.
    }
    return accumulator;
}

let arr = [1,2,3,4,5]
let output = arr.myReduce((acc, ele,i, arr)=>{
    return acc + ele
})
console.log(output)