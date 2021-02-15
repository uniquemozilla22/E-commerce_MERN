const express = require("express")
const app = express();
const mongoose = require("mongoose")
const data = require('./confidential/data').database

//Creating all the required Schema for the application
require('./database/CreateSchema.js')


//Creating a connection between our application and mongoDB
require('./database/connect_database.js')



const port = process.env.PORT || 5000


app.get("/", (req,res)=>{
    res.send("")
})

app.listen(port, ()=>console.log("Server started on port:",port))