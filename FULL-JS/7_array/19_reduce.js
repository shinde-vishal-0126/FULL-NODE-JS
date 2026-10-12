/*
# reduce() method 

    1: syntax: array.reduce((accumulator, currentValue, index, array)=>{
        block of code 
        }, initialValue)

       1: callback: a function that is called once for each element in the array
       2: accumulator: the accumulated result of the previous iteration or computation
       3: currentValue : the current element being processed in the array
       4: index: the index of the current element being processed 
       5:  array: (optional) : array reduce was called upon
       6: initialValue:(optional): an initial value for the accumulator. if not provided the first element of the array is used as the initial value.
    2: reduce method in JavaScript is used to execute a reducer function on each element of an array, resulting in a single accumulated value
        i.e The reduce() method is used to reduce an array to a single value by applying a callback function repeatedly to each element of the array, along with an accumulator.and return A single value: the final result after all iterations.
    3: Always provide an initial value to avoid unexpected behavior, especially with empty arrays.
    4. reduce() does not modify the original array.
    5. It's powerful for calculations, aggregations, object creation, etc.
    6: reduce method in javascript is used to accumulate or reduce an array to a single value.
        i.e it iterates over the elements of an array and applies a callback function to each element. updating an accumulator value with the result .

    7. reduce() method reduce array of the value down to just one single value .reduce() method execute the callback function for all the element in an array. return value of the callback function is the accumulated result and it is an argument 
    # In reduce method having two things
        1. callback_function (Having 4 argument callback(previousValue, currentValue, currentIndex, array))
        2. Initial value :(if initial value specified it is used as the initial value to start the accumulation)
            The first call to the callback function provides this value as an argument instead of an array value


    # NOTE :
        1 :A value to use as the first argument to the first call of the callback. 
        2: If no initial value is supplied, the first element in the array will be used as the initial accumulator value, and callback will start from the second element in the array.

    1: reduce() method used to reduce an array to a single value by applying a specified function to each element of an array.this method iterate each element of the array (it is iterative method iterate left to right) accumulating the result and it goes and return the final result as a single value.
    2: accumulator is basically the result of the previous computation (initially no previous computation result it is zero)

    #  what is return reduce method ?
        1:  The reduce method in JavaScript returns a single accumulated value that is derived from running the provided callback function on each element of the array. This return value can be any type, such as a number, string, object, array, or even another function, depending on how the callback function processes the elements.


        1: Reduce method flatten an array means convert the 3d or 2d array into a single dimensional array
        2: method in JavaScript is used to execute a reducer function on each element of an array,
        resulting in a single output value. 
        3: It is a powerful array method for aggregating data, transforming arrays, and combining elements into a single value.

*/

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const newNumbers = numbers.map((element)=>{
    return element * 2
}).filter((ele)=>{
    return ele *2
}).reduce((acc,cur, index, array)=>{
    return acc + cur
});
console.log(newNumbers);


// # in reduce() method you have to defined initial value or (default value to start the execution);
const array = [1,4,5,3,8,9,33,0,6];
const num = array.map((ele)=>{
    return ele *2
}).filter((ele)=>{
    return ele *  2
}).reduce((accu, ele)=>{
    return accu += ele;
},7)
console.log(num)

// example 
const arr = [1,4,5,3,8,9,33,0,6]
const initialValue = 0;
const sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
},initialValue)
console.log(sum);

// example
const getMax = ((a,b)=>{
    return Math.max(a,b)
});
console.log([1,100].reduce(getMax,50)); // 100
console.log([50].reduce(getMax,10)) // 50
console.log([1,100].reduce(getMax));

console.log([].reduce(getMax,1)) // 1 because its initial value is one


// # How to work reduce method without initial value
const fc = [15,16,17,18,19];
const now =fc.reduce((accumulator,currentValue,index)=>{
    console.log(accumulator);
    console.log(currentValue)
    return accumulator + currentValue
})
console.log(now);

// # How to work reduce method with an initial value
const fs = [15,16,17,18,18]
const data = fs.reduce((acc, current)=>{
    return acc + current
},10)
console.log(data);


// # using reduce with spare array
// # reduces skip missing element in the spare array but does not skip undefined value

// for spare array skip the spare array
const d = [1,2,3, ,4,5, ,6];
const f = d.reduce((accure, curre)=>{
    return accure + curre
})
console.log(f);

// reduce method for the undefined
const g = [1,2,3,undefined ,4,5,undefined ,6];
const h = d.reduce((accure, curre)=>{
    return accure + curre
})
console.log(h);



// # BY USING REDUCE() METHOD YOU HAVE TO FLATTEN AN ARRAY
// # Flatten an array refers to the process of converting a nested into single dimensional

const arr1 = [['zone-1','zone-2'],
['zone-2','zone-3'],
['zone-5','zone-6'],['zone-6','zone-6']]
let flatten = arr1.reduce((accu, customElements)=>{
    return accu.concat(customElements)
})
console.log(flatten);


// # Example2
const nestedArray = [1, [2, [3, [4]], 5], 6];

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
        // return acc.concat(val)
    }, []);
}

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



/*

# Why Is reduce So Useful?
    1: Flexibility: You can transform data in many ways, including filtering, mapping, and aggregating.
    2: Efficiency: It allows you to combine multiple operations into a single pass over the array.
    3: Customizability: Unlike other array methods like map or filter, reduce can produce any data structure, not just arrays.


#  used of reduce method
        1: calculate aggregate
        2: string manipulation
        3: removing duplicates
        4: chaining transformation
        5: building object for array
        6: Grouping the item
        7: counting occurrences
        8: flattening nested array
        9: finding the maximum and minimum
        10: summing up value.

*/