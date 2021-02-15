
const MarketSchema = (mongoose) =>{
    
    let createMarket = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: {
        min: Number,
        max: Number,
    },
    description:String,
    discount:Number,
    moreInfo:{
        color:String,
        size:String,
    },
    review:[{
        userID:Number,
        star:Number,
        description:String,
        date: Date,
    }],
    QueAndAns:[{
        Que:{
            userId:Number,
            questionContent:String,
            Date: Date
        },
        Ans:{
            userId:Number,
            AnswerContent:String,
            Date: Date
        }
    }]

})

const Market = mongoose.model('Market',createMarket)

return Market

}

module.exports = MarketSchema
