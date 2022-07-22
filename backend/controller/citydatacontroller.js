const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/extraction";
const client = new MongoClient(uri);

const citydata = asyncHandler(async (req, res) => {
  const { city } = req.query.city;
  console.log("name of the city is : ", city);
  try {
    const database = client.db("extraction");
    const collection = database.collection({ city });

    const cursor = collection.find();
    const Data = [];

    await cursor.forEach(function (doc) {
      Data.push(doc);
    });

    res.json(Data);
    res.status(200);
  } finally {
    await client.close();
  }
});

module.exports = citydata;