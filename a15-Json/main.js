// Task :
// 1.first simple javascript object convert into json object 
// 2.stored into the main.json file 
// 3.then data read form the file and again convert into the javascript object 
// 4.then log the data
const fs = require('fs');
const bio = {
    name:'vishal',
    age:28,
    Gender: 'M',
    Address: 'pune'
} 

const data = JSON.stringify(bio)

// stored data into file
fs.writeFile('main.json',data,(error)=>{
    console.log(error)
    console.log('data file create successfully....');  
})

// read data from the file 
fs.readFile('main.json','utf-8',(error, data)=>{
    console.log('data :', JSON.parse(data));// data : { name: 'vishal', age: 28, Gender: 'M', Address: 'pune' }
    console.log('error',error);
})