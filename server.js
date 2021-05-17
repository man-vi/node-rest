const express = require('express')
const routes = require('./routes/users')
const mongoose = require('mongoose');
const config = require('config')
const app = express()

mongoose.connect(config.get('db_url'))
    .then(() => console.log('Connected to db!'))
    .catch(e => console.log(e))

app.use(express.json())
app.use("/api/users", routes);

module.exports = app