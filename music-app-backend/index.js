const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/songs.routes');
const config = require('./config/config');
const { errorHandler, errorConverter } = require('./middlewares/error')
const ApiError = require('./utils/apiError');
const httpStatus = require('http-status');

const app = express();

app.use(express.json());
app.use(router);
// Handling non existent routes
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
})
app.use(errorConverter)
app.use(errorHandler);

// Connect to MongoDB
mongoose
    .connect(config.dbConnection)
    .then(() => {
        console.log('Connected to MongoDB');
        const server = app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch(err=>{
        console.log(err)
    })

const exitHandler = () => {
    if (server) {
        server.close(() => {
          console.log('Server closed');
          process.exit(1);
        });
      } else {
        process.exit(1);
      }
};

const unExpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
  };

process.on('uncaughtException', unExpectedErrorHandler);
process.on('unhandledRejection', unExpectedErrorHandler);

