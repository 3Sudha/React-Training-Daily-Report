const mongoose = require("mongoose");

const validator = require("validator");

const htlSchema = new mongoose.Schema({
    name:{
        type:String
        //required: true,
        //minlength:3
    },
    
    email:{
        type:String,
       // required: true,
        unique: [true, "Email id is already exist"],
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Invalid Email") 
            }
        }
    },

    Password:{
        type: String,
    },

    
    Confirm_Password:{
        type: String,
    },
    
})

const Hotel =new mongoose.model('Hotel', htlSchema);

module.exports =Hotel;