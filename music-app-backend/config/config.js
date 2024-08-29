const joi = require('joi');
require('dotenv').config();
const envVarsSchema = require('./../validations/env.validation');

// Validate the environment variables against the schema.
const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  logger.error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
  env: envVars.NODE_ENV,
};
