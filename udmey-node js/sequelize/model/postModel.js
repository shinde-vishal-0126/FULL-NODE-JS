const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");


const PostModel = sequelize.define('posts',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false

    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    // if work with association there is no need to give userId column it created by automatically by association 
    // userId:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    //     unique:true
    // }


},{
    freezeTableName:true,
    timestamps:true
})

module.exports = {
    PostModel
}