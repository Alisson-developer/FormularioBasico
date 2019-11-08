const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    sobrenome: String,
    email: String,
    senha: String
})

module.exports = mongoose.model('User', UserSchema)