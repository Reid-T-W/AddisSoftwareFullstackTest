const config = require('../config/config');
const httpStatus = require('http-status');
const ApiError = require('./../utils/apiError');
const mongoose = require('mongoose');

/**
 * A function that checks the type of error, and converts
 * it to the format required by the error handler middleware.
 * 
 * @function errorConverter
 * @param {Object} err - Recieved error object
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {*} next 
 * 
 * 
 */
const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
      const statusCode =
        error.statusCode || error instanceof mongoose.Error
          ? httpStatus.BAD_REQUEST
          : httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, false, error.stack);
    }
    next(error);
  };

/**
 * A function that handles all errors that occur in the app
 * and returns the necessary response to the frontend.
 * 
 * @function errorHandler
 * @param {Object} err - Recieved error object
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {*} next 
 * 
 * 
 */
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (config.env === 'production' && !err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[statusCode];
    }
    const response = {
        error: true,
        code: statusCode,
        message,
        ...(config.env === 'development' && { stack: err.stack }),
    }
    if (config.env === 'development') {
        console.log(err);
    }
    res.status(statusCode).send(response);
};

module.exports = {
    errorHandler,
    errorConverter
}