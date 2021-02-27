const ShopModel = require("../database/Schema/Market/ShopModel")
const express =require('express')
const app = express()
const passport = require("passport")




app.post("/insert/shop",(req,res)=>{

    const Shop = new ShopModel(req.body.FormsData)
    console.log(req.body.FormsData)
    Shop.save()
        .then(() => console.log('Data inserted'))    
        .catch(err=>{console.log(err)})

})

