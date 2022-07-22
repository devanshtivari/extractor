const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/extraction";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(uri , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected succesfully : ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error occured : ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;