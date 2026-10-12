/*
# map polyfill

1.Array.map(callback(element, index, arr)=>{})
*/

Array.prototype.myMap = function (callback) {
  // map function return new array with transform an element so used empty array to store resulting value after applying callback function
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

let num = [1, 2, 3, 4];
let newArr = num.myMap((ele, index, arr) => {
  return ele * 2;
});
console.log(newArr);

// # using call method
Array.prototype.myMap1 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(callback + "is not function");
  }
  let temp = [];
  for(let i=0;i<this.length;i++){
    //  Check if the index exists in the array (important for sparse arrays)
    if(i in this){
        temp.push(callback.call(thisArg, this[i], i, this))
    }
  }
  return temp
};
let output = num.myMap1((ele, index, arr)=>{
    return ele * 3
})
console.log(output)
/*
 # what is used of thisArg in map(), filter() and forEach() method 
    1. thisArg is optional parameter.
    2. thisArg allow you to specify the custom this value for the callback function . (i.e value used as this inside the callback)
    3. if this is not provided this default to undefined.
    4. thisArg set this context inside the callback function

 */
