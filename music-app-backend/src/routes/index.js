const express = require('express');
const router = express.Router();

const songsRoutes = require('./songs.routes');
const statsRoutes = require('./stats.routes');
const albumsRoutes = require('./albums.routes');
// const artistsRoutes = require('./artists.routes');
// const genresRoutes = require('./genres.routes');

// Use the routes with the prefix
router.use('/songs', songsRoutes);
// router.use('/artists', artistsRoutes);
router.use('/albums', albumsRoutes);
// router.use('/genres', genresRoutes);
router.use('/stats', statsRoutes)

module.exports = router;