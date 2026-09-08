const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express();

// To run the static file you have to used the build in middleware like express.static ;
const staticPath = path.join(__dirname,'../public');
console.log(staticPath);
app.use(express.static(staticPath))

const partialPath = path.join(__dirname,'../templates/partials');
console.log('partial Path :', partialPath)

// to defined the partial template file using first require the template engine what ever you have used 
// then register the template with give partial template file path 
hbs.registerPartials(partialPath)


// so if you want to show the static file with dynamic data so you need to set the views directory where located template files and also need to set the template engine 
const viewPath = path.join(__dirname,'../templates/views')
console.log(viewPath)
app.set('views',viewPath);
app.set('view engine', 'hbs')




// routing:
app.get('/',(req,res)=>{
    // res.send('This is Home page')
    res.render('index')
})
app.get('/about',(req,res)=>{
    // res.send('This is about page')
    res.render('about')
})
app.get('/weather',(req,res)=>{
    // res.send('This is weather page')
    res.render('weather')
})
app.get('*',(req,res)=>{
    // res.send('404, Page not found !')
    res.render('404')
})
// run server on port:
app.listen(8000,()=>{
    console.log('server started..');
    
})