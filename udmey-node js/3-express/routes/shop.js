
const express = require('express');
const path = require('path')
const router = express.Router();
const adminData = require('./admin');
const { title } = require('process');

const shopFile = path.join(__dirname, '../', "views", "shop.html")

router.get('/',(req, res,next)=>{
    console.log('admin data',adminData.products)
    // res.send('<h1> welcome to the express js </h1>') 
    // instead of send express.response if you want to send file you have to used sendFile method

    // res.sendFile(shopFile)
    // if you used template engine then you have to used render method
    const products = adminData.products
    res.render('shop',{
        prod: products,
        pageTitle: 'shop',
        path :'/',
        hasProducts : products.length > 0,
        activeShop : true,
        productCss: true
    })
})


module.exports = router