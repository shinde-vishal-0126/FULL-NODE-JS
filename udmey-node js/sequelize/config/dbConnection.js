
const {Sequelize} = require('sequelize');
// first give database name , 
// userName 
// password 
// also pass with separate parameters. following parameter
// host
// and  dialect


const sequelize = new Sequelize('word','root', 'root',{
    host:'localhost',
    dialect: 'mysql',
    // here if logging set as false does not show the any query in console.
    // logging: false
})

const dbConnection = async () =>{
    try{
        await sequelize.authenticate();
        console.log('successfully ')
    }catch(error){
        console.log(error)
    }
}
module.exports = {dbConnection, sequelize};



