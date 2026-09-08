
// Json stands for Javascript object Notation;
// Json is lightweight format for storing and transferring data
// Json is ofter is used when data is sent from server to web page.


// Q how to convert javascript object to json Object and Json object to javascript object ?
// Ans : using JSON.stringify(objectName) convert javascript object to Json object 
// and JSON object to normal javascript object using JSON.parse(json object Name);


// Here you have simple javascript object :
// 1. How to convert javascript Object into the JSON object 

// This is javascript object 
const bio = {
    name:'vishal',
    age:28,
    Gender: 'M',
    Address: 'pune'
} 
// above object convert into json object in following way

const JsonObject = JSON.stringify(bio);
console.log("jsonObject :", JsonObject);// jsonObject : {"name":"vishal","age":28,"Gender":"M","Address":"pune"}


// 2. How to convert Json object into the javascript Object :

const javascriptObject =  JSON.parse(JsonObject);
console.log('javascriptObject', javascriptObject)


