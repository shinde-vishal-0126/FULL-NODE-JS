
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student').then(()=>{
    console.log('database connection successfully...')
}).catch((error)=>{
    console.log(error);
})