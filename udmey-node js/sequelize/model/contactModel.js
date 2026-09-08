const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");
const User = require("./userModel");


const ContactModel = sequelize.define('contactInfo',{
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    }
},{
    freezeTableName:true,
    timestamps:true
})
module.exports = {
    ContactModel
}