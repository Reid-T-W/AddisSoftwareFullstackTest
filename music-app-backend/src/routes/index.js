const express = require('express');
const router = express.Router();

const songsRoutes = require('./songs.routes');
const statsRoutes = require('./stats.routes');

// Use the routes with the prefix
router.use('/songs', songsRoutes);
router.use('/stats', statsRoutes)

module.exports = router;