const express = require('express');
const router = require('./routes/songs.routes');
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

module.exports = app;

