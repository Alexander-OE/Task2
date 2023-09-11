const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = User = mongoose.model("user", userSchema)