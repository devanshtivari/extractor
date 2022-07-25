const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/extraction';
const client = new MongoClient(uri);

const login = asyncHandler(async(req , res) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400);
        throw new Error("Please enter all the feilds");
    }

    try{
        const database = client.db("extraction");
        const collection = database.collection("admin")

        const user =  collection.findOne({name : {username}} , {password : {password}});
        var counter = 0;

        await user.forEach(function(doc){
            counter = counter+1;
        })

        if(counter === 0){
            res.status(200);
            res.send("User not found");
        }
        if(counter === 1){
            res.status(200);
            res.send("user found");
        }
    }
    finally{
        await client.close();
    }

})

module.exports = login;