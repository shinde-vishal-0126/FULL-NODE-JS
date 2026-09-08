
// Serving static file in express js

// To serve static file such as image, css-file, and javascript file used the "express.static" middleware function in express;
// express.static(root, [options])
// The argument specifies the root directory from which to serve static assets.

const express = require('express');
const path = require('path')
const app = express();

const staticPath = path.join(__dirname , 'public');
console.log(staticPath);

// if you want to serve static file you have to used build in middleware like express.static
// if you want to used middleware you have to use app.use(); use keyword 
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Hello word')
})
app.get('/home',(req,res)=>{
    res.send('welcome to node js !!!!!')

})
app.listen(8000,()=>{
    console.log('server started');
    
})