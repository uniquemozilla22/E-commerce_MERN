
const UserSchema = (mongoose) =>{
    
    let createUser = new mongoose.Schema({
        name:{
        FirstName:{
            content:String,
            },
        MiddleName:{
            content:String,
        },
        LastName:{
            content:String,
            },
        },
        google:{
            googleId: Number,
            displayName:String
        },
        address:{
            content:String,
        },
        email:{
            content:String,
        },
        UserType:{
            content:String,
        },
        UserImageLink:{
            content:String,
        },
        ShopID:{
            content:Number,
        },       
        
})

const users = mongoose.model('users',createUser)

return users

}

module.exports = UserSchema
