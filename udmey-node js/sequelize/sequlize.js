// https://sequelize.org/docs/v6/core-concepts/model-basics/

//? what is mean by sequelize 
// sequelize is promise based node.js orm tool used with mySql database.

//? what do you mean by ORM 
// orm stands for object relational mapping 
// it is technique to accessing relational database

//? why sequelize 
// Model creation (model i.e schema of the table )
// Association
// validation and Data types 
// inBuild query (instead of writing the raw query or manually query it provide the inBuild function to execute the query)
// Migrations
// Hooks and Event 
// Transaction support ()


//! model basics 

//? what is model (Models define the schema for a table)
//1. model is an abstraction that represent a table in your database.
//2. Models are used to interact with the data in that table by providing methods for performing CRUD (Create, Read, Update, Delete) operations and more.
//3. defined model in sequelize using sequelize.define('model-name' ,{ attributes or field which you required})
// model-name i.e create table of given model name in database.
//4 Definition: A model defines the structure of the database table, including its columns, data types, and any constraints or validations.
//5 Associations: Models can define relationships with other models, such as one-to-one, one-to-many, or many-to-many associations.
//6, Instance Methods: Each row in the table can be represented as an instance of the model, and instance methods allow operations on these individual records.
//7.Static Methods: Models also have static methods for performing operations on the table as a whole, such as querying all rows or performing bulk updates
//8 Hooks: Models can define lifecycle hooks (beforeCreate, afterUpdate, etc.) to run custom logic at certain points in the model's lifecycle.


//? what is model synchronization 
// . A model can be synchronized with the database by calling model.sync(options), an asynchronous function (that returns a Promise). With this call, Sequelize will automatically perform an SQL query to the database.
//!1. User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)

//!2. User.sync({ force: true }) - This creates the table, dropping it first if it already existed

//!3. User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

//? How to synchronizing all models at once 
// You can use sequelize.sync() to automatically synchronize all models. 
// basically synchronize done by in app.js (in main file)

//? How to dropping tables 
//! To drop the table related to a model:
// await User.drop();
// console.log('User table dropped!');

//! To drop all tables:
// await sequelize.drop();
// console.log('All tables dropped!');

//? how to insert data into database or perticular model table 
// create instances using build() method instead of using the new keyword and used save() method to store data in database.
// also used the create({}) which return the promise

//? how to update data into the database 
//!1 to update the database create method return promise you if you want to update the data then you have Get the return object and  update only one field by ex. data.firstName = 'vishal'  and call the save() method on that return data 
//!2 if you want to update multiple filed you have to used the set({}) method and then used save() method 

//!3 also used the update method and it return the promise so used await like await data.update({})
// await data.save();


//? how to save only specific file in the database 
//! if want change only specific filed then you have to pass fields attribute in save method like  and pass array of filed name you want only save this filed in the database 
data.firstName = 'data';
data.email = '1234@gamil.com'
await data.save({fields:['email']}) ;


//? Hot to delete the data form the database 
// to delete the data from the database it used destroy() method basically it return promise so used like await data.destroy()

//? aso if you want to increment the value of numeric then used the increment  (by default incremented by one )
// data.increment({age:2, cash:5})

// ? How to insert update, delete the data in database by using sequelize
//1. to insert =  const data = user.build({})
    //await data.save()

    // 2. also used 
    //await model.create(({})

// 2. to update value
    // const data = await user.create ({})
        // update only single property()
        // data.firstName ='shinde' // update the property
        // await data.save()
        

        // also used
        //set({}) -> also return promise and used also save()

        // also used 
        // data.update({}) return promise and also save();

//? how to insert data  into database using sequelize
// const data = await model.create({})
//! also if you want ot stored the bulk of the into data base then you have to the following method like 
// const data = await Model.bulkCreate(user);
// res.send(data)

//? how to fetch data form the database using sequelize 
// used FindAll() method 
// const data = await model.findAll();

//? how to fetch the data only specific attributes 
// const user = await User.findAll({
//     attributes:['firstName', 'age', 'password']
// })
// res.send(user)
// in findAll() method pass object with attributes field with array of filed names 

//? how to add ales (as)  in attributes  
// const user = await User.findAll({
//     attributes:[['firstName','FN'], ['age','ag'], ['password','pwd']]
// })
// res.send(user)
// so for ales purpose you have to pass attributes property and  inside that pass array or array and inside array defined fileName and second element as ales name 

//? ! you have to perform the aggregation function  in sequelize 
// const data = await User.findAll({
//     attributes:[[sequelize.fn('COUNT',sequelize.col('firstName')),'count']]
// })
// res.send(data)


//? How include and exclude the filed in the sequelize 
// const data = await User.findAll({
//     attributes:{
//         exclude:['firstName', "lastName"]
//     }
// })
// res.send(data)

//? How to work with where clause in sequelize.
// using findAll() method here you have to pass the where clause
//! filter the query 
// const data = await User.findAll({where:{
//     id:1
// }})
// console.log(data)
// res.send(data)

//!example 2 check with multiple condition
// const data = await User.findAll({where:{
    // id:1, also you have to pass multiple id using array like[2,3,4]
    // firstName : 'vishal',
//     password:'admin@123',
//     isActive: true
// }})
// console.log(data)
// res.send(data)

//? how to used operator in sequelize?
//! using the sequelize operator 
// const data = await User.findAll({
//     where:{
//       id:{
//         [Op.eq] : 1
//         [Op.in] : [1,2,3]
//         [Op.and] : [{id:2},{isActive:true}]
//       }
//     }
//   })
  
//   res.send(data);


//? how to update data based on the condition (or update only specific data )
// here you have used the where clause
// update method return the zero and one when the data is updated successfully or return 0 is the data not updated successfully.
// const data = await User.update({
//   firstName:'harshu',
//   age:5
// },{
//   where:{
//     id:1
//   }
// })
// res.send(data);

//? how to delete data form the database ;
// const deleteUser = await User.destroy({
//     where:{
//         id:1
//     }
// })
// res.send(deleteUser)


//* model Querying (finders):
// finders method once the generate select queries 
//? what is findByPk() method in sequelize
// findByPK() method obtains only a single entry from the table using the provided primary key 
// const data = await User.findByPk(1);
// return res.send(data)
// of data found it return the data other wise it return null;

//? what is findOne() method in javascript 
// findOne() method obtain the first entry it find(this fulfilled the optional query option it provided)
// const data = await User.findOne({
//     where:{
//       id:6
//     }
//   })
//   res.send(data)


//? what is findOrCreate() method 
// The method findOrCreate will create an entry in the table unless it can find one fulfilling the query options
// (first it check if the data are present in the data base with provided option then it return this data otherwise it create new data with given option and return this data.)
// findOrCreate() method in javascript 
// const data = await User.findOrCreate({
//     where:{
//       firstName:'harshu',
//       isActive : true
//     }
//   })
//   res.send(data)
  
//   }
// if the data is found then it return the array of found data and 2nd argument as false then is not created
//!to create new data 
// const data = await User.findOrCreate({
    //   where:{
    //     firstName:'vishal',
    //     isActive : false,
    //     age:29
    //   }
    // })
    // res.send(data)


//? what is found and countAll method in javascript :
// findCountAll() method is conversion method that findAll and count  this useFul when dealing with queries related to pagination and where you want to retrieve data with limit and offset but also know the number records that math the query



//| getters , setters and virtual in sequelize
// Sequelize allows you to define custom getters and setters for the attributes of your models.
// sequelize also allow you to specify the so-called virtual attributes which are attributes on the sequelize model that does not underlying sql but instead are populated automatically by sequelize
//!getters() if you get the data form the database and you want to change something in your data so you have to used the getter  method
// a getter is a get() function defined for one column in the model definition
//get() method are applied in the model file in side the attribute filed

// const User = sequelize.define('users',{
//     firstName:{
        // type:Sequelize.STRING,
//         type:DataTypes.STRING,
//         allowNull:false,
//         get(){
//             const rawValue = this.getDataValue('firstName');
//             return rawValue ? "Mr." + rawValue.toUpperCase() : null
//         }
//     },

//! set()
// A setter is a set() function defined for one column in the model  definition it receives the value being set 
// if you want to before inserting the value into the database you have to done some changes you have to used the set() method 
// for example if you want to save() password in database before that you have to need it hash the password that type you have to used the set 

//  lastName:{
//         type:Sequelize.STRING,
        // here pass default value also
        // defaultValue:'shinde'
//         set(value) {
//          this.setDataValue('lastName' + "from-India")
//         }
        // what ever changes done by set() method are stored in the sql database table.

//     },


//? what is virtual field
// Virtual fields are field that sequelize populates under the hood but reality they don't even exist in the database.
// virtual file if you want to combine more then one field then you have to used virtual field 
// fullName:{
//         type:DataTypes.VIRTUAL,
//         get(){
//             return `${this.firstName} ${this.lastName} `
//         },
//         set(value){
//             throw new Error ('do not try to set the full value')
//         }

//     },

//| NOTE
// make sure you set() get() and the virtual field are defined in the model file 


//? what is validation and constrains in sequelize 
// validation and constrains are defined in your model 
// validation and constrain are used to check give data are according to your requirement or not 

// validation and constrain are directly apply on the sql database table 

// 1. allowNull : false : i.e null value are not allowed
// 2. unique : true : i.e inside the db Give filed are always unique (do not repeat)
// 3 for validation purpose used validation object in model filed and pass the any validation like is before, after etc...
// validate: {
//     is: /^[0-9a-f]{64}$/i,
//   },



// ? what is differences between validation and constrains :
//! validation 
// validation are check in sequelize level in pure javascript .
// they can be arbitrarily complex if you provide custom validator function or can be on of the build in validator offered by sequelize.
// if the validation fails no sql query will be sent to the database at all 

// constraints :
// on the other hand constrain are rule defined the Sql level 
// the most basic example of constraint is an unique constraint 
// if a constrain check fail an error will be thrown by the database and sequelize will forward this error to javascript 

// validator() :
// Model validator allow you to specify format/ content/ inheritance/ validation / for each attribute of the model .
// validation are automatically run on create, update, and save
// you can also call validate() manually validate an instance.
// also you have to defined the custom validation inside the validator object


//| row queries in sequelize:
// i.e already prepared sql queries you can use the sequelize.query method
//  await sequelize.query('select * form user') this function by default return two arguments a result array and an object containing metadata (such as amount affected row )
// this is raw query the metadata are dialect specified

// execute in following way 

// 1
// const [result, metadata ] = await sequelize.query('select * from users')
// return res.status(200).json({result, metadata})
//! in above example return result and metadata if you want to return or result you have to used following way 
//const [result, metadata ] = await sequelize.query('select * from users',{
    type: QueryTypes.SELECT
// })
// return res.status(200).json({result, metadata})
// in this code pass second argument as object with type attributes 

// if you defined getter and setter() and virtual and it not display in your raw query if you want to add this in your raw query so you have to pass 2nd parameter in query method and inside that object you have to pass your model name like

// const [result, metadata ] = await sequelize.query('select * from users',{
//     type: QueryTypes.SELECT,
//     model:User,
//     mapToModel:true,
  
    // also you have to pass another method also 
    // log your query in console.
//     logging : true,
  
    // if plain is true then sequelize return only first record of the result set in case of false it return all records 
//     plain: false,
  
  // set this true if you don't have a model definition for your query
//     raw:false


  
//   })
//   return res.status(200).json({result, metadata})


//? replacement 
// replace the given value in the position of question mark  ?
// const record = await sequelize.query('select * from users where id = ? and firstName = ?',{
//     type:QueryTypes.SELECT,
//     replacements:['1','harshu']
//   })
//   return res.status(200).json({record})
  
//   }

//bind parameter 
// same as replacement purpose we have to used 



//? what are type of relation ship 
//! one to one  :
// if only one instances of an entity is associated with only one instances of another entity then it is one to one relation 
// ex (single) person ==> has ==>(single) Aadhar card

//! one to many :
// if single instance of an entity is associated with more then one instances of another entity then it is one to many relationship 
// (single) consumer ==> has ==> account (many)

//! many to one :
// if more then one instance of an entity is associate with single or one instances of another entity then it is many to one relationship
// (many) order ==> has ==>  (single) products 


// many to many:
// if more then one instances of an entity set is associated with more then one instances of another entity then it many to many relationship 
//(many) costumer ==> has(many)products


//? what Association :  
// (if you are work with large complex db structure where you have to add multiple join query so easy this process using the association   
// association make relation between different table )
// (ie using association we have tow or more model are make in relation ship )

//  "association" typically refers to the relationships between tables in a database. 
// These relationships are established using keys, primarily primary keys and foreign keys, to link rows in different tables.

// Implementing Associations:
// Primary Key (PK): A unique identifier for each row in a table.
// Foreign Key (FK): A column or set of columns in a table that refers to the primary key in another table, establishing the relationship.


//! sequelize support the 3 type of association
// one to one
// one to many
// many to many


//! so sequelize provide the four types of association that should be combine to create them 
// hasOne association 
// BelongsTo  association
// HasMany association 
// BelongsToMany (through:'') association 

//? please check association.js file 
// used userDataModel 
// and profile model 
// here we have to cover all the association 


//? what is used of paranoid
// Paranoid :
// paranoid table perform a soft deletion or the record instead of hard deletion.
// sequelize support the concept of the paranoid tables a paranoid table is once that when told to delete a record it will not truly delete it 
//  and a special column called deletedAt will have it value set to the timestamp of the deletion request 
// if you soft delete it update the deleted time in deletedAt() table and if you call findAll() sequelize does not give deleted record 
// paranoid : true option to the model definition

// in model if you have to defined paranoid true then it soft delete 
// if you want to hard delete then you have to used the force: as true in destroy() method like destroy({
// where:{
//     id:1,
    
// },{
// force:true
// }
// })



//| advanced association concept

// Fetching association Eager Loading vs Lazy Loading 
// The concept fo Eager loading and lazy loading are fundamental to understand how fetching associated work in sequelize
// Lazy loading refers to the technique of fetching the associated data only when you really want it ;
// Eager Loading on the other hand refers to the technique fo fetching everything at once 

// when you fetching the data with the help of association they are using two way like lazy loading and eager Loading 

// by default you have fetch data form the association is eager loading 



//| Transaction in sequelize
//  a transaction is a way to ensure that a series of database operations (queries) are executed as a single unit, where all changes are committed to the database together or rolled back in case of an error. 
// This helps maintain data integrity by ensuring that either all operations succeed or none of them do.

//1. Atomicity: A transaction ensures that a group of queries are executed atomically, meaning they all succeed or fail together.

//2 Commit: If all operations within the transaction are successful, the transaction is committed, meaning the changes are saved to the database.

//3 Rollback:  If any operation within the transaction fails, the transaction is rolled back, and all changes made during the transaction are undone, leaving the database in its previous state.

// 2 type of transactions

//1. Unmanaged transactions: Committing and rolling back the transaction should be done manually by the user (by calling the appropriate Sequelize methods).
// ex
// const { sequelize } = require("../config/dbConnection");
// const { ContactModel } = require("../model/contactModel");
// const User = require("../model/userModel");

// const transaction = async (req, res)=>{

//     try{
//         const t = await sequelize.transaction();
//         const data = await User.create({
//             firstName:'vishal',
//             lastName:'shinde',
//             email:'test@gamil.com',
//             password:'admin@123',
//             age:45
//         },{
//             t:transaction
//         })
    
//         const contactDetails = await ContactModel.create({
//             phone:'9970710108',
//             userId:data.id
//         },{
//            t:transaction 
//         })
    
//         await t.commit();
//         return res.json({data, contactDetails})
//     }catch(error){
//         console.log('all transaction data are failed ', error);
//         t.rollback();
//     }
    
// }

// module.exports = {
//     transaction
// }

//2 Managed transactions: Sequelize will automatically rollback the transaction if any error is thrown, or commit the transaction otherwise. Also, if CLS (Continuation Local Storage) is enabled, all queries within the transaction callback will automatically receive the transaction object.
// ex 
// const transaction = async (req, res)=>{

//     try{

//     await sequelize.transaction(async (transaction)=>{

//         const data = await User.create({
//             firstName:'vishal',
//             lastName:'shinde',
//             email:'test@gamil.com',
//             password:'admin@123',
//             age:45
//         },{
//             t:transaction
//         })
    
//         const contactDetails = await ContactModel.create({
//             phone:'9970710108',
//             userId:data.id
//         },{
//            t:transaction 
//         })
//         return res.json({data, contactDetails}) 
//     })     // await t.commit();   
     
//     }catch(error){
//         console.log('all transaction data are failed ', error);
//     //     t.rollback();
//     //     
//     }
// }

// module.exports = {
//     transaction
// }



//? what is hook in sequelize
// Hooks (also known as lifecycle events), are functions which are called before and after calls in sequelize are executed. 
// For example, if you want to always set a value on a model before saving it, you can add a beforeUpdate hook.


//? how to create indexing in the sequelize:
// Sequelize supports adding indexes to the model definition which will be created on sequelize.sync().
// const User = sequelize.define('User', {
//     name: {
//       type: DataTypes.STRING
//     },
//     email: {
//       type: DataTypes.STRING
//     }
//   }, {
//     indexes: [
//       {
//         unique: true,
//         fields: ['email'] // Unique index on the email field
//       },
//       {
//         fields: ['name'] // Non-unique index on the name field
//       }
//     ]
//   });