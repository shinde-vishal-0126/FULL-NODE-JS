
const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../utils/path-utils');

const products =[]

const adminFile = path.join(__dirname,'../','views', 'add-product.html')
console.log('adminFile', adminFile);
 
router.get('/add-product',(req,res,next)=>{
    // res.sendFile(adminFile)
    res.render('add-product', {pageTitle:'add-product', path: '/admin/add-product',formCSS: true, productCSS:true, activeAddProduct: true})
})

router.post('/add-product',(req, res, next)=>{
    products.push({title : req.body.title})
    console.log("products",products);
    res.redirect('/')
})

exports.router = router;
exports.products = products;