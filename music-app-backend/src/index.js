const mongoose = require('mongoose');
const http = require('http');
const config = require('./config/config');
const app = require('./server');
const logger = require('./config/logger');

// Connect to MongoDB
mongoose
  .connect(config.dbConnection)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((err) => {
    logger.error(err);
  });

// Creating the server
const httpServer = http.createServer(app);
const server = httpServer.listen(config.port, () => {
  logger.info(`server listening on port ${config.port}`);
});

// Exit handler that closes the server
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// Unexpected Error handler that will be executed when 
// an uncaughtException and unhandledRejection events 
// are emitted
const unExpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

// Handling any uncaught Exceptions and unhandled rejections
process.on('uncaughtException', unExpectedErrorHandler);
process.on('unhandledRejection', unExpectedErrorHandler);

// Handling the SIGTERM signal
process.on('SIGTERM', () => {
  logger.info('SIGTERM RECIEVED');
  if (server) {
    server.close();
  }
});
