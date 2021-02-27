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
                


            const existingUser = await User.findOne({google:{googleId:profile.id}})

            if(existingUser){
                done(null,existingUser)
            }
            else{

                const application_user = await new User({
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
                        google:{
                            googleId: profile.id,
                            displayName:profile.displayName
                        },
                        address:{
                            content:"",
                        },
                        email:{
                            content:"undefined",
                        },
                        UserType:{
                            content:"Customer",
                        },
                        UserImageLink:{
                            content:"undefined"
                        },
                        ShopID:{
                            content:1,
                        }, 
                }).save()
                done(null,application_user)
            }
            }
        )
        )
        )