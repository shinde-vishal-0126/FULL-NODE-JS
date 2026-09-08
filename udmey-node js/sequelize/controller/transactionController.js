const { sequelize } = require("../config/dbConnection");
const { ContactModel } = require("../model/contactModel");
const User = require("../model/userModel");

//! using unmanaged approach 

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





//! using manage approach


const transaction = async (req, res)=>{

    try{

    await sequelize.transaction(async (transaction)=>{

        const data = await User.create({
            firstName:'vishal',
            lastName:'shinde',
            email:'test@gamil.com',
            password:'admin@123',
            age:45
        },{
            t:transaction
        })
    
        const contactDetails = await ContactModel.create({
            phone:'9970710108',
            userId:data.id
        },{
           t:transaction 
        })
        return res.json({data, contactDetails}) 
    })     // await t.commit();   
     
    }catch(error){
        console.log('all transaction data are failed ', error);
    //     t.rollback();
    //     
    }
}

module.exports = {
    transaction
}