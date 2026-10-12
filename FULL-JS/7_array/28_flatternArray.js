/*
# flattening array  (flatten the array using flatMap and flat method)

    1: def : Flattening an array refers to the process of converting a nested array (an array that contain other array) into a single dimensional array (i.e an array without nested array )

    3: this can be useFul when you want to simplify the structure of an array for easier processing or manipulation 

    4:Two dimensional array is nothing but array of an array (array inside array);

    5: Flattening an array simplifies a nested array into a single-dimensional array. 

    # flatMap: 
        1:syntax: arr.flatMap(callback(currentValue, index, array), thisArg)

        2: The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is a combination of .map() followed by .flat(1) (i.e., flatten to depth of 1).

        3.It only flattens one level deep.It is useful when the mapping function returns arrays.
        
        4: avoids the need to use .map(...).flat().

        5. The flatMap() method in JavaScript is a powerful array method that combines the functionality of map() and flat() (with a depth of 1).
        
        6: flatMap() is new array instances method that combine flat() and map() it useful when calling function that return an array in the map  callback but you want to your resulted array to be flat

        7:  Flatmap() meted return new array formed by applying a give callback function to each element of the array and flattering the result of array by one level
            i.e i.e return new array with each element being the result of callback function and flatten by a depth of 1
        
        8: flatMap() method is iterative method amd flatMap() method identical to map(callback(ele,value, array)) and followed by flat(1) for each element 

        10. (so flatmap() method combine the functionality of map() and flat() if first applied mapping function to each element in the array and then flatten the result by one lever)

        11.  original array does not change  flatmap() map are non mutating method

*/
//#  More complex example with nested arrays
const nestedArr = [[1, 2], [3, 4], [5, 6]];
// Using flatMap to flatten the nested arrays by one level
const flattened = nestedArr.flatMap(x => x);
console.log(flattened);


// # Example: 1
const arr = [1,2,1];
const res = arr.flatMap((num)=>{
    return num == 2 ? [2,2,3] : 1
}) 
console.log(res); // [ 1, 2, 2, 3, 1 ]


// # Example: 2
const arr1 = [1,2,3,4];
const res1 = arr1.flatMap((ele)=>{
    return [ele * 2]
})
console.log(res1);// [ 2, 4, 6, 8 ]


// # Example: 3
// lets Generate list of word form list of sentences
const arry19 = [" it,s sunny in","","california"];
const sp = arry19.map((ele)=>{
    console.log(ele)
    return ele.split(' ');
})
const array2 = arry19.flatMap((ele)=>{
    console.log(ele)
    return ele.split(' ')
})
console.log(array2);
console.log(sp);



// # Example 4
// we want to remove all the negative numbers
// and split the odd numbers into an even numbers and 1

const all = [5,4,-3,20,17,-33,-4,18];
const result = all.flatMap((n)=>{
    if(n< 0){
        return []
    }
    return n % 2 === 0 ? [n] : [n-1, 1];
})
console.log(result)



// using flatMap() on spare array
console.log([1,2, ,4,5].flatMap((x)=>{
  return   [x,x*2]
}))

/*
# note 
1:Iterates only over existing elements.
2:Skips holes (missing elements).
3:Applies the callback function only to non-hole values.
4:Flattens the result by one level.



#  Key Features:
1: Combines map() and flat(1): Avoids the need to chain these two methods manually.
2: Single-Level Flattening: Flattens only one level deep, even if the mapping function returns nested arrays.



# differences between flatMap and map method in js

    # flatMap():
        1: flatMap method first map each element using the mapping function and then flatten by result one level (it combination of flat() and map())

        2: first applied the mapping function to each element of the array then flatten the resulting array by one level, does not alter the original array instead that return new array 

        3. when you want to map and flatten in single step

        4. in flatMap method automatically flatten the result by one level after mapping 


    # flat() : 
        1: flat() method flatten nested array into single array 

        2: create new arry with all sub-array element concatenated with specified dept.

        3: flattern nested array upto specified depth

        4: does not modified original array instead return new array

        5: flattern an array by  concatenating the element of sub array into the parent array up the specified depth

        6. flat() method used when you have deeply nested array and need to flattern it to a certain depth

        7.  in flat() method allow you to specify the depth of flattering


| Feature                     | `flat()`                                           | `flatMap()`                                           |
| --------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| **Purpose**                 | Flattens nested arrays                             | Maps each element, then flattens the result (depth 1) |
| **Callback Function**       | ❌ No callback allowed                              | ✅ Requires a callback function                        |
| **Flattening Depth**        | ✅ Customizable (e.g., `flat(2)`, `flat(Infinity)`) | ❌ Always flattens 1 level only                        |
| **Returns**                 | A new array with sub-arrays flattened              | A new array with mapped and flattened results         |
| **Common Use Case**         | Remove nesting from arrays                         | Transform + flatten in a single step                  |
| **Original Array Changed?** | ❌ No                                               | ❌ No                                                  |



        

*/