const joi = require('joi');

// Define a schema for the environment variables using Joi.
const createSongSchema = joi
  .object({
    title: joi.string().required(),
    artist: joi.string().required(),
    album: joi.string().required(),
    genre: joi.string().required(),
  })
  .unknown();

module.exports = createSongSchema;
