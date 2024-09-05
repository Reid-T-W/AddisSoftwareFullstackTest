const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const config = require('./config');

// Get IP format based on environment
const getIPFormat = () =>
  config.env === 'production' ? ':remote-addr - ' : '';

// Morgan format
const format = `${getIPFormat()}:method :url :status :response-time ms :user-agent :date`;

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'logs/access.log'),
  { flags: 'a' },
);

module.exports = morgan(format, {
  stream: accessLogStream,
});
