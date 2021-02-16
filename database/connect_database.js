
const mongoose = require("mongoose")
const data = require('../confidential/data.js').database

 const connect_database=async ()=>{

    await mongoose.connect(data.URI,{useNewUrlParser:true})
    await mongoose.connection
    .once('open',()=>console.log('Connection Sucessful to the database'))
    .on('error',(error)=>console.log("Your error:",error))
}


module.exports=connect_database