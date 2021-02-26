
const UserSchema = (mongoose) =>{
    
    let createUser = new mongoose.Schema({
        name:{
        FirstName:{
            content:String,
            required:Boolean
            },
        MiddleName:{
            content:String,
            required:Boolean
        },
        LastName:{
            content:String,
            required:Boolean
            },
        },
        address:{
            content:String,
            required:Boolean
        },
        email:{
            content:String,
            required:Boolean
        },
        UserType:{
            content:String,
            required:Boolean
        },
        ShopID:{
            content:Number,
            required:Boolean
        },       
        
})

const users = mongoose.model('users',createUser)

return users

}

module.exports = UserSchema
