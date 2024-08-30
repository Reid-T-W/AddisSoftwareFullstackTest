const express = require('express');
const router = express.Router();

const songsRoutes = require('./songs.routes');

// Use the routes with the prefix
router.use('/songs', songsRoutes);

module.exports = router;