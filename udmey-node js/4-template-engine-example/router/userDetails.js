

const express = require('express');
const router = express.Router()
const path = require('path')
const userData = require('../router/userForm')

const useDetailsPath = path.join(__dirname, '../','views','usersDetails.html')

router.get('/', (req,res)=>{

    const hasUsers = userData.userData && userData.userData.length > 0;
    console.log(userData.userData)
    res.render('userDetails',{
        userData : userData.userData,
        pageTitle:'userDetails...',
        hasUsers : true
    })
})

module.exports = router