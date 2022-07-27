const asyncHandler = require('express-async-handler');
const admin = require('../model/usermodel');

const login = asyncHandler(async(req,res) => {
    const{name , password} = req.body;

    if(!name || !password){
        res.status(400);
        throw new Error('Please enter all the feilds');
    }

    const User = await admin.findOne({name});

    if(User){
        if(User.password === password){
            res.status(200).json({
                name: User.name,
                password : User.password
            })
        }
        else{
            res.status(400);
            throw new Error('Invalid password');
        }
    }
    else{
        res.status(400);
        throw new Error('User does not exist');
    }
})

module.exports = login;