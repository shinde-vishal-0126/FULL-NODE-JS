const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/dbConnection')

const User = sequelize.define('users',{
    firstName:{
        // type:Sequelize.STRING,
        type:DataTypes.STRING,
        allowNull:false,
        get(){
            const rawValue = this.getDataValue('firstName');
            return rawValue ? "Mr." + rawValue.toUpperCase() : null
        }
    },
    lastName:{
        type:Sequelize.STRING,
        // here pass default value also
        // defaultValue:'shinde'
        set(value) {
         this.setDataValue('lastName' + "from-India")
        }
        // what ever changes done by set() method are stored in the sql database table.

    },
    fullName:{
        type:DataTypes.VIRTUAL,
        get(){
            return `${this.firstName} ${this.lastName} `
        },
        set(value){
            throw new Error ('do not try to set the full value')
        }

    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING(64)
    },
    age:{
        type:DataTypes.INTEGER,
        // validate:{
        //     is:/^[0-9a-f]{64}$/i
        // }
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
    
},{
    //!1 Sequelize will infer the table name to be equal to the model name, without any modifications:
    freezeTableName: true

    //!2 if you don/t want table name as model name then you have to used following attributes 
    // like tableName: 'Your-table-name'

    //!3  also here you have to defined timeStamp are require or not if you don't want then set 
    // timestamp:false
})
module.exports = User