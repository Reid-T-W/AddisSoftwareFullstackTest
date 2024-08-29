const joi = require('joi')
const ApiError = require('./../utils/apiError')
const logger = require('./../config/logger');

// Middleware function to validate the request agains a schema
const validate = (schema) => (req, res, next) => {

    // Reduce the request object to only the relevant keys
    const data = req.body;

    // Validate the object against the schema
    const { value, error } = schema.validate(data, { abortEarly: false });

    // If there is an error, respond with a 400 status and the error
    // details
    if (error) {
        logger.error("error: ", error)
        const errors = error.details.map((detail) => detail.message).join(',');
        next(new ApiError(400, errors));
    }

    // If no error, call next to proceed to the controller
    return next();
};

module.exports = validate