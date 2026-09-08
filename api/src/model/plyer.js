

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    dob:{
        type:Date,
        required:true
    },
    country:{
        type:String,
    },
    score:{
        type:String
    },
    event:{
        type:String
    }
},
{
    timestamps:true
})


// create collection with the help of model

const Player = new mongoose.model('Player', playerSchema);
module.exports = Player;