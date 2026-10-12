/*
# forEach polyfill
1. arr.forEach(callback(element, index, arr)=>{})
2. modified original arr. (not return new array )
3. iterate each and every element of the array by calling the given callback function 
5. it always return undefined.
6: it is always used for perform side effect in like logging , updating ui, modified the object

*/
//# polyfill of forEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};



let num = [1, 2, 3, 4, 5];
let data = num.myForEach((ele, i, arr) => {
  return (arr[i] = ele * 2);
});
console.log(data);
console.log(num);




// # using call method
Array.prototype.myForEach1 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(callback + "not a function");
  }
  for (let i = 0; i < this.length; i++) {
    //  hasOwnProperty() method: Only checks if the property exists as an own (direct) property of the object, not on its prototype.
    if (this.hasOwnProperty(i)) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};

let modifiedArray = num.myForEach1((ele, i, arr) => {
  console.log(ele, i, arr);
  return (arr[i] = ele * 4);
});
console.log(modifiedArray);
