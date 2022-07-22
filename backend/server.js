const express = require('express');
const datafetchroute = require('./routes/datafetchroute');
const citydata = require('./routes/cityroute');
const connectDb = require('./db/db');
cors = require('cors');

const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.get('/' , datafetchroute);
app.get('/city' , citydata);
app.listen(3000 , console.log("Server had started successfully at port 3000"));