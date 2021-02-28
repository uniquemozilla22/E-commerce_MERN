const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const data=require("../confidential/data").googleOAuthentication
const Mongoose = require("mongoose")


let  User =  Mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
  })
  
  passport.deserializeUser((userId,done)=>{
    User.findById(userId)
    .then((user)=>{
      done(null,user)
    })
  })

passport.use(
    new GoogleStrategy(
        {
            clientID:data.ClientID,
            clientSecret:data.ClientSecret,
            callbackURL:"http://localhost:4000/login/authenticated"

        },
        (
           async (accessToken,  refreshToken , profile , done )=>{
                
            //Finding the existence of the user in the database earlier on
            const existingUser = await User.findOne({googleID:profile.id})

            if(existingUser){
                //if it is a existing user 
                done(null,existingUser)
            }
            else{
                //if it is a new USer
                const new_user = await new User({
                    name:{
                        FirstName:{
                            content:profile.name.givenName,
                            },
                        MiddleName:{
                            content:" ",
                        },
                        LastName:{
                            content:profile.name.familyName,
                            },
                        },
                        googleID: profile.id,
                        address:{
                            content:"",
                        },
                        email:{
                            content:"profile.emails",
                        },
                        UserType:{
                            content:"customer",
                        },
                        UserImageLink:{
                            content:"profile.photos"
                        },
                        ShopID:{
                            content:1,
                        }, 
                }).save()
                .then(()=>console.log("sucess"))
                .catch(err=>console.log(err))
                done(null,new_user)
            }
            }
        )
        )
        )