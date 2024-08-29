const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/songs.routes');
const config = require('./config/config');
const errorHandler = require('./middlewares/errorHandler')

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

// Connect to MongoDB
mongoose
    .connect(config.dbConnection)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch(err=>{
        console.log(err)
    })



