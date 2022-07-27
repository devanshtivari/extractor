const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/extraction';
const client = new MongoClient(uri);

const login = asyncHandler(async(req , res) => {
    const {name , password} = req.body;
    if(!name || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    try{
        const database = client.db("extraction");
        const collection = database.collection("admin");
        const cursor = collection.find();
        const Data=[];

        await cursor.forEach(function(obj){
            Data.push(obj);
        })

        if(name === Data[0].name && password === Data[0].password){
            res.status(200);
            res.send("Login successful");
        }
        else{
            res.status(200);
            res.send("Bad credentials. Please try again")
        }
    }
    catch(e){
        res.status(400);
        throw new Error(e.message);
    }
});

module.exports = login;