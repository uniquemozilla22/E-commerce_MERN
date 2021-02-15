
const mongoose = require("mongoose")
const data = require('../confidential/data.js').database


mongoose.connect(data.URI,{useNewUrlParser:true})
mongoose.connection
.once('open',()=>console.log('Connection Sucessful to the database'))
.on('error',(error)=>console.log("Your error:",error))
