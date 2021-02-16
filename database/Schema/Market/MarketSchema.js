
const Shopfunc = (mongoose) =>{
    
    let createShop = new mongoose.Schema({
    name: String,
    priceRange: Number,
    description:String,
    discount:Number,
    products:[{
        productID:Number
    }]
})

const Shop = mongoose.model('shop',createShop)

return Shop

}

module.exports = Shopfunc
