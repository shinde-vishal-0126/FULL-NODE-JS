
const express = require('express');
// first we need to create router
const router = new express.Router()
const Student = require('../model/sutdent')

// then we need to defined router .
// register the router.

router.get("/users", async (req, res) => {
    try {
      const data = await Student.find();
      res.status(200).send(data);
    } catch (e) {
      res.status.send(e);
    }
  });


  //if you want to get only one single user in following way (or get individual data)

  router.get('/users/:id', async (req,res)=>{
    // if you find with id then you have to used req.param
    try{
      const _id = req.params.id;
      const studData = await Student.findById(_id);
      if(!studData){
        return res.status(404).send();
      }else{
        res.status(200).send(studData)
      } 
    } catch(e){
      res.status(500).send(e)
    }
    
  })
  
  
  // patch request in mongoDB :(update only perticular field);
  router.patch('/users/:id', async (req,res)=>{
    try{
      const _id = req.params.id;
      console.log(_id);
      console.log(req.body)
      const sutdentData = await Student.findByIdAndUpdate(_id, req.body,{
        new:true
      });
      res.status(200).send(sutdentData)
    }catch(e){
      res.status(404).send(e)
    }
  })
  
  // put api where you have to update full document or resources 
  router.put('/users/:id', async (req,res)=>{
    try{
      const _id = req.params.id;
      console.log(_id);
      console.log(req.body)
      const studentData = await Student.findByIdAndUpdate(_id, req.body,{
        new : true
      })
      res.status(200).send(studentData)
    }catch(e){
      res.status(404).send(e)
    }
  })
  
  
  // Delete request in mongoDB.
  router.delete('/users/:id', async (req,res)=>{
    try{
      const _id = req.params.id;
      const studentdata = await Student.findByIdAndDelete(_id);
      if(!_id){
        return res.status(404).send();
      }
      res.status(200).send(studentdata);
    }catch(e){
      res.status(500).send(e)
    }
  })
  
  
  
  // this is using the promise but better way is async /await
  // app.get('/users',(req, res)=>{
  //     const data = Student.find().then((data)=>{
  //         res.status(200).json(data)
  //     }).catch((e)=>{
  //         res.status(400).send(e)
  //     })
  // })
  
  // This post api create using promise
  // app.post('/users',(req, res)=>{
  //     const stud = new Student(req.body);
  //     stud.save().then(()=>{
  //         res.status(201).send(stud)
  //     }).catch((e)=>{
  //         res.status(400).send(e)
  //     })
  // })
  
  // another way to create api using the async/await
  router.post("/users", async (req, res) => {
    try {
      const stud = new Student(req.body);
      const data = await stud.save();
      res.status(201).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  
  

  module.exports = router;