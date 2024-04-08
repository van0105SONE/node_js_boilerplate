const express = require('express')
const apiV1 = require('./v1/routes')
const cors = require('cors')
const app = express();

//enable cores
app.use(cors())
app.options('*', cors());

app.use(express.json());

app.use('/api/v1',apiV1 )

module.exports = app;