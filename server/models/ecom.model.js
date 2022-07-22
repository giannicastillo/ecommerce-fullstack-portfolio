const mongoose = require('mongoose');

//below are the instructions to create table of author 
const EcomSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "Insert product title!"],
        minlength: [3, "Product must be at least 3 letters long!"]
    },
    price:{
        type:Number, 
        required: [true, "Price is required!"]
    },
    description: {
        type: String,
        required:[true, "Description is required!"], 
    },
    imgUrl:{
        type: String,
        required: [true, "Please add image!"]
    },
    quantity:{
        type: Number,
        require: [true, "Please add the quantity!"]
    },
    category:{
        type:String,
        require: [true, "Please state a category!"]
    },
    },
    {timestamps:true}
)


const Ecom = mongoose.model('Ecom', EcomSchema)

module.exports = Ecom;