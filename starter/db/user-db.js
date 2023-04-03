const mongoose = require("mongoose");

const User = mongoose.Schema;

const userSChema = new User ({
    userName:{
        type:String,
    },

    email:{
        type:String
    },

    password:{
        type:String,
    },

    inventary:{
        type:String
    }

})