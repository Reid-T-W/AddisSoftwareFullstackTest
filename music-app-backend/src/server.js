const express = require('express');
const apiRoutes = require('./routes');
const { errorHandler, errorConverter } = require('./middlewares/error');
const ApiError = require('./utils/apiError');
const httpStatus = require('http-status');
const morgan = require('./config/morgan');
const SwaggerDocs = require('./utils/swagger/swagger');
const cors = require('cors');

const app = express();

// Cors middleware, with all origins allowed
app.use(cors());

// JSON parsing middleware
app.use(express.json());

// API access logging middlware
app.use(morgan);

// Routes
app.use('/api/v1', apiRoutes);

// Swagger docs
SwaggerDocs(app);

// Handling non existent routes
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Error convertor middlware, so that it can 
// properly handled by the error handler middleware
app.use(errorConverter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
