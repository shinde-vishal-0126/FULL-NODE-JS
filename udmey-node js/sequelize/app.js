
const express = require('express');
const app = express();
const {dbConnection , sequelize } = require('./config/dbConnection')
const User = require('./model/userModel');
const router = require('./routes/router');
const { ContactModel } = require('./model/contactModel');
require('./association')


app.use('/',router)

//1. it check if table is already exists then not create table
// sequelize is instances of connection object
 sequelize.sync({force:true});

//2. if already table is present then it drop and create new table 
// sequelize.sync({force:true});

//3. if table are exists it check with previous table and change only necessary updated change to meet table with updated table
// sequelize.sync({alter:true});


app.listen(3000,()=>{
    console.log('server started in port no 3000')
    dbConnection();
})