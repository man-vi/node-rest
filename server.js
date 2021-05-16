const express = require('express')
const routes = require('./routes/users')
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://localhost:27017/nodeRest')
    .then(() => console.log('Connected to db!'))
    .catch(e => console.log(e))

app.use(express.json())
app.use("/api/users", routes);

module.exports = app