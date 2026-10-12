/*
# filter polyfill 
Array.filter((element, index, array) =>{})
*/

// polyfill of the filer method

Array.prototype.myFilter = function (callback) {
  // filter method return new array with resulting array.
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let arr = [1, 2, 3, 4, 5];
let output = arr.myFilter((element, index, arr) => {
  return element > 3;
});
console.log(output);


// # using call method
Array.prototype.myFilter1 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(callback + "not a function ");
  }
  // Create a new array to store filtered results
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    //  Check if the index exists in the array (important for sparse arrays)
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        temp.push(this[i]);
      }
    }
  }
  return temp;
};

let data = arr.myFilter1((ele,i, arr)=>{
    return ele < 3;
})
console.log(data);
