const mongoose = require('mongoose')


const ShopSchema  = new mongoose.Schema({
  name:{
      content:String,
      required:Boolean
    },
    description:{
      content:String,
      required:Boolean
    },
    discount:{
      content:Number,
      required:Boolean
    },
    contactNumber:{
      content:String,
      required:Boolean
    },
    email:{
      content:String,
      required:Boolean
    },
    products:{
      content:Array,
      required:Boolean
    }
})

    
const Shop = mongoose.model('shop',ShopSchema)


module.exports = Shop
