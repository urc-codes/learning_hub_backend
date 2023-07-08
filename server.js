const express = require('express')
const morgan = require ('morgan')
const mongoose = require('mongoose')
const cors  = require('cors')
const Routes = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.set('view engine', 'ejs');

// connection to database
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    })
 

app.use(Routes)

app.listen(5000,console.log("http://localhost:5000"))