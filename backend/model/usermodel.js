const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name:{type: 'string', required: true},
    password:{type: 'string', required: true}
})

const admin = mongoose.model("admin" , userModel);
module.exports = admin;