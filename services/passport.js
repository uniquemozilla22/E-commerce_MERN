const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const data=require("../confidential/data").googleOAuthentication
const Mongoose = require("mongoose")



passport.use(
    new GoogleStrategy(
        {
            clientID:data.ClientID,
            clientSecret:data.ClientSecret,
            callbackURL:"http://localhost:4000/authenticated/"

        },
        (
            async(accessToken,  refreshToken , profile , done )=>{
                console.log(accessToken)
            }
        )
        )
        )