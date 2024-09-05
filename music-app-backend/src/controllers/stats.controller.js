/**
 * @fileoverview Stats Controller handles all stats-related operations.
 * This file defines controllers for getting stats.
 */
const Song = require('../models/song.model.js');
const catchAsync = require('../utils/catchAsync.js');

/**
 * // Get song, artist, album, and genre stats
 *
 * @function getStats
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the retrieved stats object
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

    // get distinct artists
    const artists = await Song.distinct('artist')

    // get distinct genres
    const genres = await Song.distinct('genre')
    
    res.json({
        songsCount: songsCount,
        artistsCount: artists.length,
        albumsCount: albumsCount[0].totalDistinctAlbumCount,
        genresCount: genres.length
    });
  });
  
  module.exports = { getStats };