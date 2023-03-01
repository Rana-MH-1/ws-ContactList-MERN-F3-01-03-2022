const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true,
        match:[ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'please put a valid email']
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('user',UserSchema)