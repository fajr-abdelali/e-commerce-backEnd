const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
    owner:{
        type:ObjectID,
        required:true,
        ref:'User'
    },
    items:[{
        itemId:{
            type:ObjectID,
            ref:'Item',
            required:true
        },
        name:String,
        quantity:{
            type:Number,
            min:1,
            default:1,
            required:true
        },
        price:Number,
    }],
    bill:{
        type:Number,
        required:true,
        default:0
    },
    timestemps:true
})

const Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart