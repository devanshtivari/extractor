const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb').MongoClient;

const data = asyncHandler(async(req , res) => {
    const uri = "mongodb://localhost:27017/extraction";
    const client = new MongoClient(uri);

    try{
        const database = client.db("extraction");
        const collection = database.collection("data");

        const cursor = collection.find();
        const Data = [];

        await cursor.forEach(function(doc){
            Data.push(doc)
        })

        res.json(Data);
        res.status(200);
    }
    finally{
        await client.close();
    }
})

module.exports = data;