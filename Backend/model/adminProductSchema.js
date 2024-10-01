const mongoose = require('mongoose')
const { schema } = require('./RegSchema')
const {model,Schema} = mongoose

const adminProduct = new Schema({
    Pname:String,
    Pprice:Number,
    Pdesc:String,
})
module.exports = model('adminproduct',adminProduct)