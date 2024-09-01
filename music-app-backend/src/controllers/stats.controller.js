const Song = require('../models/song.model.js');
const catchAsync = require('../utils/catchAsync.js');

/**
 * // Get song, artist, album, and genre stats
 *
 * @function getStats
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the status and the retrieved data
 *
 * @throws {InternalServerError} If there's an issue with the database or server.
 */

// eslint-disable-next-line no-unused-vars
const getStats = catchAsync(async (req, res, next) => {
    // get total number of songs
    const songsCount = await Song.countDocuments({})

    // get total number of albums
    // considering the case where two artists can have 
    // albums with the same name, these are considered
    // as different albums.
    const albumsCount = await Song.aggregate([
        {
          $group: {
            _id: { album: "$album", artist: "$artist" }
          }
        },
        {
          $group: {
            _id: "$_id.artist",
            distinctAlbums: { $addToSet: "$_id.album" }
          }
        },
        {
          $group: {
            _id: null,
            totalDistinctAlbumCount: { $sum: { $size: "$distinctAlbums" } }
          }
        }
      ]);

    // get total number of artists
    const artistsCount = await Song.distinct('artist')

    // get total number of geners
    const genresCount = await Song.distinct('genre')
    
    res.json({
        songsCount: songsCount,
        artistsCount: artistsCount.length,
        albumsCount: albumsCount[0].totalDistinctAlbumCount,
        genresCount: genresCount.length
    });
  });
  
  module.exports = { getStats };