const express = require("express")
const app = express();
const mongoose = require("mongoose")
const data = require('./confidential/data').database

//Creating all the required Schema for the application
require('./database/CreateSchema.js')


//Creating a connection between our application and mongoDB
require('./database/connect_database.js')

//creating Roting mechanism to the 
require('./Routes/Routes.js')

//Intiializing a port in the system for the server of backend to run on
const port = process.env.PORT || 5000


app.listen(port, ()=>console.log("Server started on port:",port))