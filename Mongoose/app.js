const express = require("express");

//- mongoose used to established the connection between the node js and mongoDB:
// - mongodb : defined the protocol of the mongodDB
// - localhost:27017 specifies that the MongoDB server is hosted locally
// - employeedata is the name of the database to which you’re connecting. If this database       doesn’t exist, MongoDB will create it when data is added.
const mongoose = require("mongoose");
const validator = require ('validator')

// -----------------------------------------------------------------

// 1. create connection with node js
mongoose
  .connect("mongodb://127.0.0.1:27017/employeedata")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection failed:", err));

//--------------------------------------------------------------------

// 2. defined Schema
// Here first we need to defined the Document Schema :
const RecordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  G: {
    type: String,
  },
  education: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    // add custom validation  using validation function
    validation(value){
        if(value < 0 ){
            throw new Error('age value should not -ve')
        }
    } ,

    // also defined using following way 
    // validate:{
    //     validator: function(value){
    //         return value.length < 0
    //     },
    //     message : "age value should not -ve"
    // }
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// -----------------------------------------------------------------------------------------

//  3. create collection in mongoDB using mongoose library
// when you create collection mongoose.model having two argument first one in collection name and second one is schema name.
const emp = new mongoose.model("emp", RecordSchema);

// -------------------------------------------------------------------------------------

// 4. insert single document into the database
// const empRecord = new emp({
//     name:"ajinkaya",
//     G:"F",
//     education:"ssc",
//     age:29
// })

// save() method return promise
// empRecord.save()
//   .then(() => console.log("Employee added"))
//   .catch((err) => console.error("Failed to add employee:", err));

// -----------------------------------------------------------------

// 5. instead of promise used async/await
// defined function inside that you have insert record and then used save method

// const createDocument = async () => {
//   try {
//     const empRecord = new emp({
//       name: "ajinkaya",
//       G: "F",
//       education: "ssc",
//       age: 29,
//     });

//     const result = await empRecord.save();
//     console.log(result);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// call the defined function
// createDocument();

// -------------------------------------------------------------------------------------------------

// 6 if you want to insert only one Document you have to also used the following approach

  const createSingleDocument = async () => {
    try {
      // Use Model.create() to add a single document directly
      const result = await emp.create({
        name: "ajinkaya",
        G: "F",
        education: "ssc",
        age: 29,
        email:"shindev@gmail.com"
      });

      console.log("Document saved:", result);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Call the function to create and save the single document
  createSingleDocument();

//---------------------------------------------------------------------------------------------------

//  How to insert multiple document in database :
// defined function inside that you have insert record and then used save method
// const createDocument = async () => {
//   try {
//     const empRecord = new emp({
//       name: "ajinkaya",
//       G: "M",
//       education: "ssc",
//       age: 29,
//     });
//     const empRecord1 = new emp({
//       name: "hi",
//       G: "F",
//       education: "ssc",
//       age: 29,
//     });
//     const empRecord2 = new emp({
//       name: "bye",
//       G: "F",
//       education: "ssc",
//       age: 29,
//     });
//     const empRecord3 = new emp({
//       name: "tc",
//       G: "F",
//       education: "ssc",
//       age: 29,
//     });

    //   const result = await empRecord.save();

//     const result = await emp.insertMany([
//       empRecord,
//       empRecord1,
//       empRecord2,
//       empRecord3,
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// call the defined function
// createDocument();

// -------------------------------------------------------------------------------------------------

// 7.  How to Read or querying the document using mongoose :

// const getDocument = async () => {
//     // here we have to read all the record from the dataBase
//   const res = await emp.find({ G: "F" })
//  // if you want to show only the any perticular filed in the give document so you have to used the
//   const ress = await emp.find({ G: "F" },{age:1})

// // if you want to show the limited data then you have to defined following way
// const res1 = await emp.find({ G: "F" },{age:1}).limit(1);

// // if you want to skip the data and show only perticular data then used
// const res2 = await emp.find({ G: "F" },{age:1}).skip(1);

//   console.log(res);
//   console.log(ress);
//   console.log("res1", res1);
// console.log("res2", res2);

// };
// call the function get the document
// getDocument();

// --------------------------------------------------------------------------------------

// 8.  example based  on the comparison operator

// $eq (matches value that are equal to the specified value)
// $gt (matches value that are grater then a specified value)
// $gte (matches value that are grater then or equal to a specified value)
// $in (matches amy of the value in specified in array)
// $lt (matches value that are less then to a specified value)
// $lte (matches value that are less then or equal to a specified value))
// $ne  (matches all value that are not equal to specified value)
// $nin (Matches non of the value specified in an array)

// const getDocument = async () => {
// //   const res = await emp.find({age:{$gte : 29}}).select({name:1})
//   // also you have to defined in following way
//   const res = await emp.find({age:{$gte : 29}},{name:1})
//   console.log(res);

// // # example of in operator

//   const res1 = await emp.find({name :{$in : ['hi','bye']}}).select({name:1})
//   console.log(res1);

//   // # example of nin operator
//   const res11 = await emp.find({name :{$nin : ['hi','bye']}}).select({name:1})
//   console.log(res11);

// };

// getDocument();

//-------------------------------------------------------------------------

// logical operator in mongoDB

// $and: (join query clauses with logical AND return all the match the condition of the both clause)
// $not: (invert the effect of a query expression and return the document that do not match the query expression)
// $nor : (joins query clauses with a logical nor return all the document that fail to match both clause)

// 4. $or : (joins query with a logical OR return all document that match the condition of either clause)
// - or operator perform logical or operation on an array of two or more <expression> and select the document that satisfy the at list one condition.
// {$or:[{condition },{condition}]}

// const getDocument = async () => {
//   const res = await emp.find({ $or: [{ age: 29 }, { name: "hi" }] });
//   console.log(res);
//   const res1 = await emp.find({ $and: [{ age: 29 }, { name: "hi" }] });
//   console.log("res1....",res1);
//   const res111 = await emp.find({ $nor: [{ age: 29 }, { name: "hi" }] });
//   console.log("Documents where age is NOT 29 and name is NOT 'hi':", res111)
//   const res2 = await emp.find({ age: { $not: { $eq: 29 } } });
//   console.log("Documents where age is NOT 29:", res2);
// };
// getDocument();

// ------------------------------------------------------------------

// 9. sorting and count query method in mongoDB:

// # count the number document return by the query

// const getDocument = async () => {
//       const res = await emp.find({ $or: [{ age: 29 }, { name: "hi" }] }).countDocuments();
//       console.log(res);
//       const res1 = await emp.find({ $and: [{ age: 29 }, { name: "hi" }] }).countDocuments();
//       console.log("res1....",res1);
//       const res111 = await emp.find({ $nor: [{ age: 29 }, { name: "hi" }] }).countDocuments();
//       console.log("Documents where age is NOT 29 and name is NOT 'hi':", res111)
//       const res2 = await emp.find({ age: { $not: { $eq: 29 } } }).countDocuments();
//       console.log("Documents where age is NOT 29:", res2);
//     };
//     getDocument();

// -------------------------------------------------------------------------------------------------------

// # sorting the document in amending order or defending order

// const getDocument = async () => {
//     const res = await emp.find({ $or: [{ age: 29 }, { name: "hi" }] }).sort({name:1}); //if you give one as field property value it is amending order
//     console.log(res);
//     const res1 = await emp.find({ $and: [{ age: 29 }, { name: "hi" }] }).sort({name:1});
//     console.log("res1....",res1);
//     const res111 = await emp.find({ $nor: [{ age: 29 }, { name: "hi" }] }).sort({name:-1}); // if you give -1 as field property value it is defending order
//     console.log("Documents where age is NOT 29 and name is NOT 'hi':", res111)
//     const res2 = await emp.find({ age: { $not: { $eq: 29 } } }).sort({name:-1});
//     console.log("Documents where age is NOT 29:", res2);
//   };
//   getDocument();

// ----------------------------------------------------------------------------------------------------

// 10. update document in mongoose :

//   const updateDocment = async (_id) =>{
//     try{
//         // following method update and as  return it return the acknowledgement as updated of modified count
//         // const result = await emp.updateOne({_id},{

//         // also you have to used another method  findByIdAndUpdate it return whole updated document with existing  filed value
//         const result = await emp.findByIdAndUpdate({_id},{
//             $set : {
//                 name : "vishal shinde 123"
//             }
//             // if you want to log the newly modified data  then you have to used argument as new :true
//         },{new:true});
//         console.log(result);
//     }catch(error){
//         console.log(error)
//     }
//   }
//   updateDocment("67290b3f72674c7f28c74aff")

// ---------------------------------------------------------------------------------------------------------

// 11. Delete Query in MondoDB for delete Document

//   deleteDocument = async (_id) =>{
//     try {
//         // -  this is return deleted count
//         // const result = await emp.deleteOne({_id});
//         // - if you want to log the deleted Document so you have used the following method
//         const result = await emp.findByIdAndDelete({_id});
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
//   }
//   deleteDocument("67290b3f72674c7f28c74b00");

//--------------------------------------------------------------------------------------------

//  12. Build in validation in MongoDB
// - Schema type validation\

// const RecordSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//     uppercase: true,
//     trim: true,
//     //   also add custom length
//     //   minlength:2,
//     minlength: [2, "Give your custome message "],
//     maxlength: 30,
//   },
//   G: {
//     type: String,
//   },
//   education: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });
