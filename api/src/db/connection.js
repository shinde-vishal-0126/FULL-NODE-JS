
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/olympic').then(()=>{
    console.log('data base connection successfully...')
}).catch(()=>{
    console.log('not connected..')
})