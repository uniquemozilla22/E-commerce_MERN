const mongoose = require("mongoose")

require('./Schema/product/productShema.js')(mongoose)

require('./Schema/Market/MarketSchema.js')(mongoose)
