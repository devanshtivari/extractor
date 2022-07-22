const express = require('express');
const datafetchroute = require('./routes/datafetchroute');
const connectDb = require('./db/db');
cors = require('cors');

const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.get('/' , datafetchroute);
app.listen(3000 , console.log("Server had started successfully at port 3000"));