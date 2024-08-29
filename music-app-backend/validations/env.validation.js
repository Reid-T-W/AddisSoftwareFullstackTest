const joi = require('joi');

// Define a schema for the environment variables using Joi.
const envVarsSchema = joi.object({
    DB_CONNECTION: joi.string().required(),
    PORT: joi.number().default(8000),
    NODE_ENV: joi.string().required()
}).unknown();

module.exports = envVarsSchema;