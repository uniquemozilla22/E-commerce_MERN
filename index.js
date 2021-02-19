const express = require("express")
const app = express();
const mongoose = require("mongoose")
const data = require('./confidential/data').database
const cors = require('cors')
const ShopModel = require("./database/Schema/Market/ShopModel")



//converting all the data into JSOn
app.use(express.json())

app.use(cors())




//Creating all the required Schema for the application
require('./database/CreateSchema.js')


//Creating a connection between our application and mongoDB
require('./database/connect_database.js')

//creating Roting mechanism to the 

app.post("/insert/shop",(req,res)=>{

    const Shop = new ShopModel(req.body.FormsData)
    console.log(req.body.FormsData)
    Shop.save()
        .then(() => console.log('Data inserted'))    
        .catch(err=>{console.log(err)})

})

//Intiializing a port in the system for the server of backend to run on
const port = process.env.PORT || 4000


app.listen(port, ()=>console.log("Server started on port:",port))