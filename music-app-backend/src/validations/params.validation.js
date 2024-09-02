const joi = require('joi');

const idParamSchema = joi.string().length(24).hex().required();

module.exports = idParamSchema;

