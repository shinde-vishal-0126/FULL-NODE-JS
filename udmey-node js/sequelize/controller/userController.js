const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");
const User = require("../model/userModel");
const { UserDataModel } = require("../model/userDataModel");
const { Profile } = require("../model/profileModel");
const { PostModel } = require("../model/postModel");

const insert = async (req, res) => {
  //    const data = User.build({
  //         firstName:'vishal',
  //         lastName:'shinde',
  //         email:'test@test.com'
  //     })
  //     console.log(data)
  //     await data.save()

  // ! instead of that you have to used create method which is return promise
  // so you have to call on model where you want to stored the data

 const data = await User.create({
    firstName: "akshu",
    lastName: "shinde",
    email: "test1@test.com",
  });
  console.log(data.toJSON());
  console.log(JSON.stringify(data))

  //* also to update the value you have to used the set method  in following way
  //! it is used if you want update only one property then used this way 
//   data.firstName = 'vishal shinde';
//   await data.save()

//! if you want to update multiple property then you have to used the set() method in sequelize
// data.set({
//     firstName: "ritu ",
//     lastName: "shinde",
//     email: "test111@test.com",

// })
// await data.save();

//! also you have to used the update method  and it return promise;
// await data.update({
//     firstName: "vishakha ",
//     lastName: "shinde",
//     email: "test1111@test.com",
// })
// await data.save();

//! if want change only specific filed then you have to pass fields attribute in save method like 
data.firstName = 'data';
data.email = '1234@gamil.com'
await data.save({fields:['email']}) ;

};


const testFunction  = async (req,res) =>{
//     const newUser = {
//         firstName :'vishal',
//         lastName :'shinde',
//         email :'vishu@gamol.com',
//         password: 'admin@123',
//         age:40
//     }
// ! insert data into the database
//    const data = await User.create(newUser);
//    res.send(data);

//! fetch data form the table 
// const data = await User.findAll();
// res.send(data);


//! fetch only specific attribute data 
        // const user = await User.findAll({
        //     attributes:['firstName', 'age', 'password']
        // })
        // res.send(user)


// ! you have to perform the aggregation function  in sequelize 

// const data = await User.findAll({
//     attributes:[[sequelize.fn('COUNT',sequelize.col('firstName')),'count']]
// })
// res.send(data)

// //! How to exclude and include the value in sequelize 

// const data = await User.findAll({
//     attributes:{
//         exclude:['firstName', "lastName"]
//     }
// })
// res.send(data)

// * how to used the where clause in sequelize 
//! filter the query 
// const data = await User.findAll({where:{
    // id:1, also you have to pass multiple id using array like[2,3,4]
    // firstName : 'vishal',
//     password:'admin@123',
//     isActive: true
// }})
// console.log(data)
// res.send(data)


//! using the sequelize operator 
// const data = await User.findAll({
//   where:{
//     id:{
//       [Op.eq] : 1
//     }
//   }
// })

// res.send(data);


//! update the specific data based on the Given condition (give condition in where clause)
// const data = await User.update({
//   firstName:'harshu',
//   age:5
// },{
//   where:{
//     id:1
//   }
// })

// res.send(data);

//! findByPk() method obtains only a single entry from the table, using the provided primary key

// const data = await User.findByPk(1);
// return res.send(data)

//! findOne() method obtain the first entry it find(this fulfilled the optional query option it provided)
// const data = await User.findOne({
//   where:{
//     id:6
//   }
// })
// res.send(data)


// findOrCreate() method in javascript 
// const data = await User.findOrCreate({
//   where:{
    // firstName:'vishal',
    // isActive : false,
    // age:
//     firstName:'harshu'
//   }
// })
// res.send(data)

//!getters() and setters() and virtual in sequelize!
// getter() setter() are defined in in the model file 


// ! raw query 

// const [result, metadata ] = await sequelize.query('select * from users',{
//   type: QueryTypes.SELECT,
//   model:User,
//   mapToModel:true,

  // also you have to pass another method also 
  // log your query in console.
//   logging : true,

  // if plain is true then sequelize return only first record of the result set in case of false it return all records 
//   plain: false,

// set this true if you don't have a model definition for your query
//   raw:false
// })
// return res.status(200).json({result, metadata})

// const record = await sequelize.query('select * from users where id = ? and firstName = ?',{
//   type:QueryTypes.SELECT,
//   replacements:['1','harshu']
// })
// return res.status(200).json({record})


//| start association 
//* 1. one to one association code 
// const user = await UserDataModel.create({
//   userName:'vishal'
// });
// const profileData = await Profile.create({bio:'hello form the sequelize', userId:user.id})
// return res.status(200).json({user, profileData})

//* 2 get data with userDataModel and the Profile table
// const userWithProfile = await  UserDataModel.findAll({
//   include:{
//     model:Profile,
//     as: 'profile'
//   }
// })
// return res.status(200).json({userWithProfile})


// *2 one to Many  association code

// const user = await UserDataModel.create({
//     userName:'vishal'
//   });

  // create post for the user 

//   const userPost1 = await PostModel.create({
//     content:'this is my first post',
//     userId:user.id
//   })
//   const userPost2 = await PostModel.create({
//     content:'this is my second post',
//     userId:user.id
//   })

//   res.status(200).json({user, userPost1,userPost2})

// const userPost = await UserDataModel.findAll({
//   include:{
//     model:PostModel,
//     as:'post'
//   }
// })
// return res.status(200).json({userPost})



//* may to many relation 
// const user = await UserDataModel.create({
//   userName: 'vishal',
//   email: 'test@gmail.com'
// });

// Create posts for the user (no need to manually assign `userId`)
// const userPost1 = await PostModel.create({
//   content: 'this is my first post',
// });

// const userPost2 = await PostModel.create({
//   content: 'this is my second post',
// });

// Associate posts with the user using the `addPost` method
// await user.addPost([userPost1, userPost2]);

// res.status(200).json({ user, userPost1, userPost2 });

// const userPost = await UserDataModel.findAll({
//   include:{
//     model:PostModel,
//     as:'post'
//   }
// })
// return res.status(200).json({userPost})

const user = UserDataModel.destroy({where:{
  id:1
}})

res.status(200).json({user})
}

module.exports = { insert, testFunction };
