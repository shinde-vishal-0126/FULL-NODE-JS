
/*
# toLocalString(local,option)
        1: toLocalString() method return string representation the element of array or array

        2: toLocalString() method is designed to convert object to string according to the local or regional format, allowing for more specific formatting based on the local.

        3. convert a number and date to string based on the local and formatting option 

        4. This method provides way to format numbers and data in a way that is sensitive to the cultural noms of a specific local

        5. The toLocaleString() method is a powerful tool for creating locale-sensitive string representations of numbers and dates Purpose: Converts an object to a string with localization support.
*/

const array = [1, 'a',new Date('21 Dec 1917 14:12:00 UTC')];
const toLocal = array.toLocaleString('en',{timeZone: 'UTC'});
console.log(toLocal);


// #  Object of configuration properties
    // 1: Number.prototype.toLocaleString();
    // 2: Date.prototype.toLocaleString()
    // 3: Object.prototype.toLocaleString();

// # NOte:
//in toLocalString() if the element is undefined, null or spare slot is converted to an empty string
const arr = [1, , undefined];
const data = arr.toLocaleString('en',{timeZone:'UTC'});
console.log(data);

// example 
console.log([1, ,3].toLocaleString());