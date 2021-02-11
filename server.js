const express = require("express")
const app = express();
const database_connection = require('./database/connect_database')

database_connection();


const port = process.env.PORT || 5000

app.get("/", (req,res)=>{
    res.send("server works")
})

app.listen(port,() => console.log("server started")) 