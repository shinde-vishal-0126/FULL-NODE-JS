const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')
const userFormDetails = require('./router/userForm')
const usersDetails = require('./router/userDetails')
// const hbs = require('hbs')
const exphbs = require('express-handlebars');
const app = express();

const staticFilePath = path.join(__dirname,'public');
console.log(staticFilePath)

const notFoundPath = path.join(__dirname,'views','404.html')
console.log(notFoundPath)

//! Configure Express to Use pug:
//! Configure Express to use pug as the template engine. This involves setting the `view engine` to `'pug'` and specifying the directory where your views (EJS templates) will be located.


// app.engine('hbs', exphbs.engine({
//     extname: 'hbs', // Specify the file extension
//     defaultLayout: 'main', // The default layout file
//     layoutsDir: path.join(__dirname, 'views', 'layouts'), // Path to layouts folder
// }));
app.set('view engine', 'pug')
app.set('views', 'views')

// to server the static file you have to used the static middleware 
app.use(express.static(staticFilePath))

app.use(bodyParser.urlencoded({extended:false}))

app.use(userFormDetails.router)

app.use(usersDetails)

app.get('*',(req,res)=>{
    // res.send('<h1> page not Found </h1>')
    // res.sendFile(notFoundPath)
    res.status(404).render('404',{
        pageTitle:'404 - page not Found....'
    })
})

app.listen(3000,()=>{
    console.log('server started....')
})