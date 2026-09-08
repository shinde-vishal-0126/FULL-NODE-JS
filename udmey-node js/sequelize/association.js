const { PostModel } = require("./model/postModel");
const { Profile } = require("./model/profileModel");
const { UserDataModel } = require("./model/userDataModel");

//! here we have to done one to one mapping 
// because single user having only one profile 
// so here has one to one association

UserDataModel.hasOne(Profile,{
    foreignKey:'userId',
    as:'profile'
})
// if you defined the hasOne relation then in belongsTo defined apposite in above case we have to defined UserDataModel hasOne relation with Profile then below i have defined Profile belongs to UserDataModel
Profile.belongsTo(UserDataModel,{
    foreignKey:'userId',
    as:'userInfo'
})


//! 2.
//! here we have to see the one to many association 
// so single user has multiple post so used one to many association

UserDataModel.hasMany(PostModel,{
    foreignKey:'userId',
    as:'post'
});
PostModel.belongsTo(UserDataModel,{
    foreignKey:'userId',
    as:'user'
});


//3. many to many association

UserDataModel.belongsToMany(PostModel,{
    through:'userPosts',
    foreignKey:'userId'
})

PostModel.belongsToMany(UserDataModel,{
    through:'userPosts',
    foreignKey:'postId'
})

