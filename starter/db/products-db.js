const mongoose = require ('mongoose')

const Product = mongoose.Schema;

const productSchema = new Product ({
    productName:{
        type: String,

    },

    category:{
        type: String,

    },
    description:{
        type:String

    },

    price:{
        type:String

    },
    productImage:{
        type:String

    },
    availability:{
        type:String
        
    }



})

module.exports = mongoose.module("Products", productSchema)