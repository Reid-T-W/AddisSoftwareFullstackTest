const express = require('express');
const apiRoutes = require('./routes');
const { errorHandler, errorConverter } = require('./middlewares/error');
const ApiError = require('./utils/apiError');
const httpStatus = require('http-status');
const morgan = require('./config/morgan');
const SwaggerDocs = require('./utils/swagger/swagger');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:4173'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan);
app.use('/api/v1', apiRoutes);
SwaggerDocs(app);
// Handling non existent routes
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
