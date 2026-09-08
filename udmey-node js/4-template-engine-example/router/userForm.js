
const express = require('express');
 const router = express.Router();
const path = require('path');

let userData = [];

 const userForm = path.join(__dirname, '../','views','userForm.html');
 console.log(userForm);
 const homePage =  path.join(__dirname, '../','views','homePage.html')

 router.get('/add-user',(req,res)=>{
    // res.write('<h1> welcome to home page</h>')
    // res.sendFile(userForm);
    res.render('userForm',{
        pageTitle:'User form',
        path:'/add-user'
    })
})

router.get('/home',(req,res)=>{
    // res.sendFile(homePage)
    res.render('homePage',{
        pageTitle:'HomePage',
        path: '/home'
    })
})

router.post('/user',(req, res)=>{
    userData.push(req.body)
    console.log(req.body)
    console.log(userData)
    res.redirect('/')
    
})

exports.router = router
exports.userData = userData