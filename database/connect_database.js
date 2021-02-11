const mongoose = require('mongoose');
const data = require('../confidential/data').database


const connection =()=>{ 
    
mongoose.connect(data.URI)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

}

module.exports=connection
