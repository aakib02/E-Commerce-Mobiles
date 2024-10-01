const mongoose  = require('mongoose')
const  {model,Schema} = mongoose

const Regschema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

module.exports = model("user",Regschema)