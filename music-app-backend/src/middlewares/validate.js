const ApiError = require('./../utils/apiError');
const logger = require('./../config/logger');
const Song = require('../models/song.model');

// Middleware function to validate the request agains a schema
const validateBodySchema = (schema) => (req, res, next) => {

  const data = req.body;

  // Validate the object against the schema

  // eslint-disable-next-line no-unused-vars
  const { value, error } = schema.validate(data, { abortEarly: false });

  // If there is an error, respond with a 400 status and the error
  // details
  if (error) {
    logger.error('error: ', error);
    const errors = error.details.map((detail) => detail.message).join(',');
    next(new ApiError(400, errors));
  }

  // If no error, call next to proceed
  return next();
};


// Middleware function to check for duplicate records
// This will be called before adding and updating a 
// record
const duplicateCheck = async (req, res, next) => {
  // Reduce the request object to only the relevant keys
  const {title, album, artist} = req.body;
  
  // Check if a song with the same title, artist and album
  // exitst
  const existingSong = await Song.findOne({ title, album, artist });

  if (existingSong) {
    // The song is a duplicate, respond with a 409 status and error details
    logger.error('error: ', 'Song with same title, artist and album exists');
    const errors = 'Song with same title, artist and album exists';
    next(new ApiError(409, errors));
  } else {
    // If no error, call next to proceed
    return next()
  }
}

// Middleware function to validate params against a schema
const validateIdParamSchema = (schema) => (req, res, next) => {
  const { id } = req.params

  // Validate the id param against the schema
  // eslint-disable-next-line no-unused-vars
  const { value, error } = schema.validate(id, { abortEarly: false });

  // If there is an error, respond with a 400 status and the error
  // details
  if (error) {
    logger.error('error: ', error);
    const errors = error.details.map((detail) => detail.message).join(',');
    next(new ApiError(400, errors));
  }

  // If no error, call next to proceed
  return next();
};


module.exports = {
  validateBodySchema,
  duplicateCheck,
  validateIdParamSchema
}
