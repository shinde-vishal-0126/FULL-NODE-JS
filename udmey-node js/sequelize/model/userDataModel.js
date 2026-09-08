const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");


const UserDataModel = sequelize.define('userData',{
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    },
    userName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

},{
    freezeTableName:true,
    timestamps: true,
    paranoid:true
})

module.exports = {
    UserDataModel
}