const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require('cors')
const ShopModel = require("./database/Schema/Market/ShopModel");
const passport = require("passport");
const CookieSession = require ("cookie-session")



//converting all the data into JSOn
app.use(express.json())

app.use(cors())


//using the cookies to store the user data to keep the user logged in
app.use(CookieSession({
    maxAge:2592000000,
    keys:["9865443"]
}))


//Creating all the required Schema for the application
require('./database/CreateSchema.js')


//creating a authentication Google through passport
require("./services/passport.js")


//Creating a connection between our application and mongoDB
require('./database/connect_database.js')

//creating Roting mechanism to the 
require("./Routes/Routes.js")

//authentication Routes
require("./Routes/AuthRoutes.js")(app,passport)



//Intiializing a port in the system for the server of backend to run on
const port = process.env.PORT || 4000


app.listen(port, ()=>console.log("Server started on port:",port))