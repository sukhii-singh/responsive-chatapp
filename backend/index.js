const express = require('express')
const cors = require("cors")
const app = express()
const dotenv = require('dotenv').config()
const route = require('./routes/route')
const chatRoute = require('./routes/chatRoute')
const port = process.env.PORT || 5000
const db = require('./config/db')
db()
app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/upload', express.static('upload'));
app.use('/', route)
app.use('/', chatRoute)


app.listen(port, () => { console.log(`server runing on ${port}`) })