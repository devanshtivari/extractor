const express = require('express');
const datafetchroute = require('./routes/datafetchroute');
const citydata = require('./routes/cityroute');
const loginroute = require('./routes/loginroute');
const connectDb = require('./db/db');
cors = require('cors');

const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.use('/' , datafetchroute);
app.use('/city' , citydata);
app.use('/login',loginroute);
app.listen(5000 , console.log("Server had started successfully at port 3000"));