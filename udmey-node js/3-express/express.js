// express js is framework of node js.
// 1. what is express ?
// 2 using middleware ?
// 3 working with request and response (elegantly)
// 4. routing
// 5. returning html pages (files)

//! what express and why ?
//1. server logic complex
//2. you want to focus on your Business logic not on the nitty gritty details 
//3. use frameWork for the heavy Lifting


//? what is framework 
// Framework Helper functions, tools and rules that help you build your application

//! express js all about middleware :
// request ==> middleware (request, response, next) =>{}
    // next()
    // middleware (req, res, next) =>{}
    // response ==>


const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const expressHbs = require('express-handlebars')
const hbs = require('express-hbs')
const path = require('path')

const app = express();
// add middleware using app.use() use method allow you to add middleware function 
// middleware having 3 argument req, res and next  is actually function that will be passed to this function by express (i.e you can pass function as an argument to the use method an this  function receiving yet another function here on the next arguments) this allow to request to the travel on next middleware
// app.use((req, res,next)=>{
//     console.log('in first middleware')
//     next()
    // res.send('<h1> welcome tho express js </h1>')
// })

// here we have to used the body-parser ad middleware
console.log('directory path', (path.join(__dirname,'public')))

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes.router);
app.use(shopRoutes)


app.engine('hbs', hbs.express4({layoutsDir:'views/layouts', defaultLayoutTemplates:'main-layout', extname:'hbs'}))
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views')


app.use((req, res, next)=>{
    // res.status(404).send('<h1> Page not Found </h1>')
    // res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
    res.status(404).render('404', {
        pageTitle:'page Not Found'
    })
})

app.listen(3000,()=>{
    console.log('server starting ...')
})
